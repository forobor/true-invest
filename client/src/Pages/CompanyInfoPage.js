import React, { Component } from "react";
import styled from "styled-components";
import FontAwesome from "react-fontawesome";
import { Link } from "react-router-dom";

import Loader from '../Shared/Atoms/Loader'
import CompanyLogo from "../Shared/Atoms/CompanyLogo";
import CompanyStatsList from "../Shared/Organisms/CompanyStatsList";
import ButtonsAndCharts from "../Shared/Organisms/ButtonsAndCharts";
import { colors, fonts } from "../styles/theme";

const InfoPage = styled.div`
  height: 100%;
  background: ${colors.white};
  padding-top: 10px;
  font-family: "Alice", serif;
  position: relative;
`;

const CloseContainer = styled(Link)`
  position: absolute;
  right: 10px;
`;

const CompanyLogoNameContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;


const ClosePage = styled(FontAwesome)`
  font-size: ${fonts.large};
  cursor: pointer;
  color: ${colors.black};
  :hover {
    color: ${colors.light_gray};
  }
`;

const CompanyName = styled.h2``;

class CompanyInfoPage extends Component {
  state = {
    company: null,
  };

  componentDidMount() {
    if (!this.state.company) {
      this.callApi()
      .then(res => this.setState({ company: {...res} }))
      .catch(err => console.log(err));
    }
  }

  callApi = async () => {
    const companyId = +this.props.match.params.id;
    const response = await fetch(`/api/company/${companyId}`);
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  render() {

    const {company} = this.state
    if (this.state.company) {
      return (
        <InfoPage>
          <CloseContainer to={`/`}>
            <ClosePage name="times" />
          </CloseContainer>
          <CompanyLogoNameContainer>
            <CompanyLogo logo={company.logo} />
            <CompanyName>
              {company.name}
            </CompanyName>
          </CompanyLogoNameContainer>
          <CompanyStatsList {...company} />
          <ButtonsAndCharts
            stats={company.chartStats}
          />
        </InfoPage>
      );
    }
    return <Loader/>;
  }
}

export default CompanyInfoPage;
