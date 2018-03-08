import React, { Component } from 'react'
import styled from 'styled-components'
import FontAwesome from 'react-fontawesome'

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
const ClosePage = styled(FontAwesome)`
    position: absolute;
    right: 10px;
    font-size: ${fonts.large};
    cursor: pointer;
    color: ${colors.black};
    :hover {
        color: ${colors.light_gray};        
    }
`

class CompanyInfoPage extends Component {
    render() {
        return (
            <InfoPage>
                <CompanyStatsList {...COMPANIES[0]} />
                <ClosePage name='times'/>                                
            </InfoPage>
        )
    }
}

export default CompanyInfoPage;