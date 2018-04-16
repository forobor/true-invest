import React, { Component } from "react";
import styled from "styled-components";
import FontAwesome from "react-fontawesome";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

import CompanyLogo from '../Shared/Atoms/CompanyLogo'
import { fetchCurrentCompanyInfo } from '../redux/reducers/current_company_info'
import Loader from '../Shared/Atoms/Loader'
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

const ChartsData = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

`

const ChartStatFields = styled.div`
  display: flex;
`

const ChartInfo = styled.div`
  display: flex;
  flex-direction: column;
`

const CompanyName = styled.h2``;

class ChangeCompanyPage extends Component {

    state = {
        company: null
    }

    componentWillReceiveProps(props){
        if(props.company){
            this.setState({company: {...props.company}})
        }
    }

  componentDidMount() {
    const companyId = +this.props.match.params.id;
    this.props.fetchCurrentCompanyInfo(companyId)
  }

  render() {
    const { isLoading, error, company} = this.props
    console.log('company', this.state.company)
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
            <CompanyLogo logo={company.logo} />
            <div>
                <span>Название компании: </span>
                <input type='text' value={company.name}/>
            </div>
            <div>
                <span>Вес в индексе RTS, %: </span>
                <input type='text' value={company.weight}/>
            </div>
            <div>
                <span>Цена за акцию, р: </span>
                <input type='text' value={company.price}/>
            </div>
            <div>
                {company.infoPageData.map((statField, key) => {
                     return (
                     <div key={key}>
                        <span>{statField.title}</span>
                        <input type='text' value={statField.value}/>
                    </div>)  
                })}
            </div>
            <ChartsData>
                {company.chartStats.map((chartStatField, key) => {
                     return (
                     <div key={key}>
                        <span>{chartStatField.title}</span>
                        <ChartStatFields>
                            <ChartInfo>
                                {chartStatField.chartData.labels.map(yearLabel => {
                                    return (
                                        <div key={yearLabel}  >{yearLabel} </div>
                                    )
                                })}
                            </ChartInfo>
                            <ChartInfo>
                                {chartStatField.chartData.data.map(yearStat => {
                                    return (
                                         <input key={yearStat} type='text' value={yearStat} />
                                    )
                                })}
                            </ChartInfo>
                        </ChartStatFields>                        
                    </div>)  
                })}
            </ChartsData>
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


export default connect(mapStateToProps, { fetchCurrentCompanyInfo })(ChangeCompanyPage);
