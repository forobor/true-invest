import React, { Component } from "react";
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCompaniesPreview, deleteCompany } from '../redux/reducers/companies_preview';
import Loader from '../Shared/Atoms/Loader'
import CompaniesList from "../Shared/Organisms/CompaniesList";
import Search from "../Shared/Atoms/Search";
import { colors, fonts, media } from '../styles/theme'


const AddButton = styled.div`
    position: fixed;
    width: 80px;
    height: 80px;
    bottom: 100px;
    right: 100px;
    background: ${colors.blue_trans};
    border-radius: 50%;
    font-size: ${fonts.large}
    box-shadow: 0 0 40px rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Arial";
    transition: all .2s ease-in-out;
    &:hover,
    &:focus {
        transform: scale(1.4);
    }
    ${media.phone`
        width: 30px;
        height: 30px;
        bottom: 10px;
        right: 10px;
    `};
`

class Dashboard extends Component {

  state = {
    searchedCompanies: null
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
    console.log('das', this.state, this.props)
    this.setState({
      searchedCompanies: this.props.companies.filter(
        el =>
          el.name.toLowerCase().indexOf(value) !==
          -1
      )
    });
  };

  handleDelete = id => {
      this.props.deleteCompany(id)
  }


  render() {
    const { isLoading, error, companies, isDeleteLoading, isLogged } = this.props;
    const { searchedCompanies } = this.state
    if(isLoading) 
      return <Loader />;
    if (error) 
      return <div>Error: {error}</div>
    // if (!isLogged) {
    //     return <Redirect to="/dashboard/login"/>
    // }
    if(companies) {
      return (
        <div>
          <Search onChange={this.handleSearch} />
          {isDeleteLoading 
            ? <Loader />
            : <CompaniesList 
              onDelete={this.handleDelete}
              isEditable
              companies={searchedCompanies}
              isDeleteLoading={isDeleteLoading}
            />
          }

          <Link  to=''>
            <AddButton>+</AddButton>
          </Link>
        </div>
      );
    }
    return <Loader />;
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.companies.isLoading,
  companies: state.companies.companies,
  error: state.companies.error,

  isDeleteLoading: state.companies.isDeleteLoading,

  isLogged: state.adminAuth.isLogged
})

export default connect(mapStateToProps, { fetchCompaniesPreview, deleteCompany })(Dashboard);