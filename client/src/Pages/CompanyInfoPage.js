import React, { Component } from "react";
import styled from "styled-components";
import FontAwesome from "react-fontawesome";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

import { fetchCurrentCompanyInfo } from '../redux/reducers/current_company_info'
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

const CompanyName = styled.h2``;


const ClosePage = styled(FontAwesome)`
  font-size: ${fonts.large};
  cursor: pointer;
  color: ${colors.black};
  :hover {
    color: ${colors.light_gray};
  }
`;


class CompanyInfoPage extends Component {

  componentDidMount() {
    const companyId = +this.props.match.params.id;
    this.props.fetchCurrentCompanyInfo(companyId)
  }

  render() {
    const { isLoading, error, company} = this.props
    if(isLoading) 
      return <Loader />;
    if (error) 
      return <div>Error: {error.message}</div>
    if (company) {
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
          <CompanyStatsList infoPageData={company.infoPageData} />
          <ButtonsAndCharts
            stats={company.chartStats}
          />
        </InfoPage>
      );
    }
    return null;
  }
}

const mapStateToProps = (state) => ({
    isLoading: state.currentCompany.isLoading,
    company: state.currentCompany.company,
    error: state.currentCompany.error 
})


export default connect(mapStateToProps, { fetchCurrentCompanyInfo })(CompanyInfoPage);
