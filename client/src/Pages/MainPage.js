import React, { Component } from "react";

import Loader from '../Shared/Atoms/Loader'
import CompaniesList from "../Shared/Organisms/CompaniesList";
import Search from "../Shared/Atoms/Search";

class MainPage extends Component {

  state = {
    companies: null,
    searchedCompanies: null
  };

  componentDidMount() {
    if (!this.state.companies) {
      this.callApi()
      .then(res => this.setState({ companies: res, searchedCompanies: res }))
      .catch(err => console.log(err));
    }

  }

  callApi = async () => {
    const response = await fetch('/api/companies');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  handleSearch = value => {
    this.setState({
      searchedCompanies: this.state.companies.filter(
        el =>
          el.name.toLowerCase().indexOf(value) !==
          -1
      )
    });
  };

  render() {
    if( this.state.companies) {
      return (
        <div>
          <Search onChange={this.handleSearch} />
          <CompaniesList
            companies={this.state.searchedCompanies}
          />
        </div>
      );
    }
    return <Loader />;
  }
}

export default MainPage;