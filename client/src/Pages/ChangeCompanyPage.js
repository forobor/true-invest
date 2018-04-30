import React, { Component } from "react";
import styled from "styled-components";
import FontAwesome from "react-fontawesome";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

import CompanyLogo from '../Shared/Atoms/CompanyLogo'
import { fetchCurrentCompanyInfo, fetchUpdateCompany } from '../redux/reducers/current_company_info'
import Loader from '../Shared/Atoms/Loader'
import { colors, fonts, media } from "../styles/theme";

const InfoPage = styled.div`
  background: ${colors.white};
  padding-top: 10px;
  font-family: "Alice", serif;
  position: relative;
`;

const CloseContainer = styled(Link)`
  position: absolute;
  right: 10px;
`;


const ClosePage = styled(FontAwesome)`
  font-size: ${fonts.large};
  cursor: pointer;
  color: ${colors.black};
  :hover {
    color: ${colors.light_gray};
  }
`;

const CompanyLogoNameContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const CompanyName = styled.h2``;

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
  width: 350px;
`
const CompanyInfoTitle = styled.div`
  width: 110px;
  font-weight: 600;
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
const ChartTitle = styled.div`
    font-weight: 600; 
`

const ChartInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px 20px;
`
const UpdateButton = styled.div`
    position: fixed;
    bottom: 0;
    right: 5px;
    height: 70px;
    background: ${colors.blue_trans};
    border-radius: 10% 10% 0 0;
    font-size: ${fonts.xmed}
    box-shadow: 0 0 10px rgba(0,0,0,0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Alice', serif; 
    transition: all .2s ease-in-out;
    cursor: pointer;
    padding: 0 5px;
    &:hover,
    &:focus {
        font-size: ${fonts.large};
    }
    ${media.phone`
        bottom: 10px;
        right: 10px;
    `};
`



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
        if (field.length === 4){
            this.setState({
                [field[0]]: {
                    ...this.state[field[0]],
                    [field[1]]: {
                        ...this.state[field[0]][field[1]],
                        [field[2]]: {
                            ...this.state[field[0]][field[1]][field[2]],
                            [field[3]]:value
                        }
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
    const { isLoading, error} = this.props    
    if(isLoading) 
      return <InfoPage><Loader /></InfoPage>;
    if (error) 
      return <div>Error: {error.message}</div>
    if (this.state) {
      const infoDataKeys = Object.keys(this.state.infoPageData)
      const chartDataKeys = Object.keys(this.state.chartStats)
      return (
        <InfoPage>
            <CloseContainer to={`/dashboard`}>
                <ClosePage name="times" />
            </CloseContainer>
            <CompanyLogoNameContainer>
                <CompanyLogo logo={this.state.logo} />
                <CompanyName>
                    {this.state.name}
                </CompanyName>
            </CompanyLogoNameContainer>
            <CompanyInfo>
                <CompanyField>
                    <CompanyInfoTitle>Логотип: </CompanyInfoTitle>
                    <Input 
                        value={this.state.logo} 
                        onChange={event => this.handleChangeStat(event.target.value, "logo")}
                    />
                </CompanyField>                
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
                {infoDataKeys.map((statField, key) => {
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
            <ChartsData>
                {chartDataKeys.map((chartStatField) => {
                     return (
                     <div key={chartStatField}>
                        <ChartStatFields>
                            <ChartInfo>
                            <ChartTitle>{this.state.chartStats[chartStatField].title}</ChartTitle>                                
                                {Object.entries(this.state.chartStats[chartStatField].chartData).map(chartProp => {
                                    return (
                                        <div key={chartProp[0]}>
                                        <span>{chartProp[0]}</span> 
                                        <Input
                                            value={chartProp[1]}
                                            onChange={event => 
                                            this.handleChangeStat(
                                                event.target.value, 
                                                `chartStats.${chartStatField}.chartData.${chartProp[0]}`
                                            )}
                                        />
                                       </div>
                                    )
                                })}
                            </ChartInfo>
                        </ChartStatFields>                        
                    </div>)  
                })}
            </ChartsData>
            <UpdateButton onClick={this.handleUpdate}>Обновить</UpdateButton>
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
