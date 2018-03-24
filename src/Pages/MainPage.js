import React, { Component } from "react";

import CompaniesList from "../Shared/Organisms/CompaniesList";
import { COMPANIES } from "../companies";
import Search from "../Shared/Atoms/Search";

class MainPage extends Component {
  state = {
    companies: COMPANIES
  };

  handleSearch = value => {
    this.setState({
      companies: COMPANIES.filter(
        el =>
          el.name.toLowerCase().indexOf(value) !==
          -1
      )
    });
  };

  render() {
    return (
      <div>
        <Search onChange={this.handleSearch} />
        <CompaniesList
          companies={this.state.companies}
        />
      </div>
    );
  }
}

export default MainPage;
