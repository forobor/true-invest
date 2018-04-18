import React, { Component } from "react";
import styled from "styled-components";
import FontAwesome from "react-fontawesome";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

import CompanyLogo from '../Shared/Atoms/CompanyLogo'
import { fetchCurrentCompanyInfo, fetchUpdateCompany } from '../redux/reducers/current_company_info'
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

const CompanyInfo = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 40px 20px;
`
const CompanyField = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`
const CompanyInfoTitle = styled.div`
  width: 110px;
  display: inline-block;
`
const Input = styled.input`
  margin-left: 20px;
  margin-right: 20px;
  border: none;
  border-bottom: 1px solid black;
  text-align: right;
  padding: 10px;
`

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

    state = null

    componentWillReceiveProps(props){
        if(props.company){
            this.setState({...props.company})
        }
    }

    componentDidMount() {
        const companyId = +this.props.match.params.id;
        this.props.fetchCurrentCompanyInfo(companyId)
    }


    handleChangeStat = (value, statField) => {
        const field = statField.split('.')
        if (field.length === 1){
            this.setState({
                [field[0]]:value
            })
        }
        if (field.length === 2){
            this.setState({
                [field[0]]:{
                    ...this.state[field[0]],
                    [field[1]]: {
                        ...this.state[field[0]][field[1]],
                        value
                    }
                }
            })
        }
    }

  handleUpdate = async () => {
    await this.props.fetchUpdateCompany(this.state.id, this.state)
    const companyId = +this.props.match.params.id;
        this.props.fetchCurrentCompanyInfo(companyId)
  }

  render() {
    const { isLoading, error, company} = this.props    
    if(isLoading) 
      return <Loader />;
    if (error) 
      return <div>Error: {error.message}</div>
    if (this.state) {
      const infoKeysData = Object.keys(this.state.infoPageData)
      return (
        <InfoPage>
            <CloseContainer to={`/dashboard`}>
                <ClosePage name="times" />
            </CloseContainer>
            <CompanyLogo logo={this.state.logo} />
            <CompanyInfo>
                <CompanyField>
                    <CompanyInfoTitle>Название компании: </CompanyInfoTitle>
                    <Input 
                        value={this.state.name} 
                        onChange={event => this.handleChangeStat(event.target.value, "name")}
                    />
                </CompanyField>
                <CompanyField>
                    <CompanyInfoTitle>Вес в индексе RTS, %: </CompanyInfoTitle>
                    <Input 
                     value={this.state.weight}
                     onChange={event => this.handleChangeStat(event.target.value, "weight")} 
                    />
                </CompanyField>
                <CompanyField>
                    <CompanyInfoTitle>Цена за акцию, р: </CompanyInfoTitle>
                    <Input 
                     value={this.state.price}
                     onChange={event => this.handleChangeStat(event.target.value, "price")}
                    />
                </CompanyField>
                {infoKeysData.map((statField, key) => {
                    return (
                    <CompanyField key={key}>
                        <CompanyInfoTitle>{this.state.infoPageData[statField].title}: </CompanyInfoTitle>
                        <Input
                         value={this.state.infoPageData[statField].value}
                         onChange={event => 
                            this.handleChangeStat(event.target.value, `infoPageData.${statField}`)}
                        />
                    </CompanyField>)  
                })}
            </CompanyInfo>
            {/* <ChartsData>
                {this.state.chartStats.map((chartStatField, key) => {
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
            </ChartsData> */}
            <input type="button" value="обновить" onClick={this.handleUpdate} />
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


export default connect(mapStateToProps, { fetchCurrentCompanyInfo, fetchUpdateCompany })(ChangeCompanyPage);
