import React, { Component } from "react";
import styled from 'styled-components'
import { Link } from 'react-router-dom';

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

  handleDelete = id => {
      
    console.log('del')
    this.callApiDelete(id)
    .then(res => this.forceUpdate()) //no work
    .catch(err => console.log(err));
  }

  callApiDelete = async id => {
    const response = await fetch(`/api/company/${id}`, {method: 'DELETE'});
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);
    return body;
  }

  render() {
    if( this.state.companies) {
      return (
        <div>
          <Search onChange={this.handleSearch} />
          <CompaniesList 
            onDelete={this.handleDelete}
            isEditable
            companies={this.state.searchedCompanies}
          />
          <Link  to=''>
            <AddButton>+</AddButton>
          </Link>
        </div>
      );
    }
    return <Loader />;
  }
}

export default MainPage;