import React, { Component } from 'react'
import styled from 'styled-components'
import FontAwesome from 'react-fontawesome'
import { Link } from 'react-router-dom';

import CompanyStatsList from '../Shared/Organisms/CompanyStatsList'
import { COMPANIES } from '../companies'
import {colors, fonts} from '../styles/theme'

const InfoPage=styled.div`
    display: flex;
    background: ${colors.white};
    flex:1;
    flex-direction: column;
    padding-top: 10px;
`

const CloseContainer = styled(Link)`
    position: absolute;
    right: 10px;
`

const ClosePage = styled(FontAwesome)`
    font-size: ${fonts.large};
    cursor: pointer;
    color: ${colors.black};
    :hover {
        color: ${colors.light_gray};        
    }
`

class CompanyInfoPage extends Component {
    render() {
        const company = COMPANIES.find(company => +company.id === +this.props.match.params.id);
        console.log('company',company)
        return (
            <InfoPage>
                <CloseContainer to={`/`}>
                    <ClosePage name='times'/>   
                </CloseContainer>     
                <CompanyStatsList {...company} />
                                        
            </InfoPage>
        )
    }
}

export default CompanyInfoPage;