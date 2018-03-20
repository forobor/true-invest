import React, {Component} from 'react'
import styled from 'styled-components'

import CompanyLogo from '../Atoms/CompanyLogo'
import CompanyStatField from '../Atoms/CompanyStatField'
import {colors, fonts} from '../../styles/theme'
 
const StatsList = styled.div`
    padding: 24px;
    background: ${colors.white};
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    font-family: 'Alice', serif; 
`

class CompanyStatsList extends Component {
    render () {
        console.log('props', this.props)
        const { infoPageData } = this.props
        return (
            <StatsList>           
                {/* <CompanyLogo logo='https://sberbank.ru/portalserver/content/atom/contentRepository/content?id=8655dfea-3d64-4f01-8bf3-26748db9d36e' /> */}
                {
                    infoPageData.map((statFiled, key) => (
                        <CompanyStatField key={key} title={statFiled.title} value={statFiled.value} /> 
                    ))
                }
            </StatsList>
        )
    }
}

export default CompanyStatsList;