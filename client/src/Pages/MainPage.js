import React, { Component } from "react";
import { connect } from 'react-redux';

import { fetchCompaniesPreview } from '../redux/reducers/companies_preview';
import Loader from '../Shared/Atoms/Loader'
import CompaniesList from "../Shared/Organisms/CompaniesList";
import Search from "../Shared/Atoms/Search";

class MainPage extends Component {

  state = {
    searchedCompanies: this.props.companies
  };

  componentDidMount() {
    this.props.fetchCompaniesPreview();
  }

  componentWillReceiveProps(props){
    if(props.companies){
      this.setState({searchedCompanies: props.companies})
    }
  }

  handleSearch = value => {
    this.setState({
      searchedCompanies: this.props.companies.filter(
        el =>
          el.name.toLowerCase().indexOf(value) !==
          -1
      )
    });
  };

  render() {
    const { isLoading, error, companies } = this.props;
    const { searchedCompanies } = this.state
    console.log('props', companies, this.state.searchedCompanies )
    if(isLoading) 
      return <Loader />;
    if (error) 
      return <div>Error: {this.props.error}</div>
    if(companies) {
      return (
        <div>
          <Search onChange={this.handleSearch} />
          { searchedCompanies && 
            <CompaniesList
              companies={searchedCompanies}
            />
          }

        </div>
      );
    } 
    return null       
  }
}

const mapStateToProps = (state) => {
  console.log('stte', state.companies.companies)
  return({
    isLoading: state.companies.isLoading,
    companies: state.companies.companies,
    error: state.companies.error 
  })
};

export default connect(mapStateToProps, { fetchCompaniesPreview })(MainPage);