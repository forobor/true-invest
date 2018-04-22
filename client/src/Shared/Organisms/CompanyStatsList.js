import React, {Component} from 'react'
import styled from 'styled-components'

import CompanyStatField from '../Atoms/CompanyStatField'
import {colors} from '../../styles/theme'
 
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
        const { infoPageData } = this.props
        const infoKeys = Object.keys(infoPageData)
        return (
            <StatsList>           
                {

                    infoKeys.map((statField, key) => (
                        <CompanyStatField 
                            key={key} 
                            {...infoPageData[statField]} 
                        /> 
                    ))
                }
            </StatsList>
        )
    }
}

export default CompanyStatsList;