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
        console.log('props', this.props)
        const { infoPageData } = this.props
        return (
            <StatsList>           
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