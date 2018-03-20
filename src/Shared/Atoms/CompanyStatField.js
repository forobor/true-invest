import React, {Component} from 'react'
import styled from 'styled-components'

import { pixelFonts, media } from '../../styles/theme'

const StatFieldContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
    width: 250px;
    ${media.tablet`
        width: 100px;        
    `}
    ${media.phone`
        width: 100px;        
    `}
`

const StatTitle = styled.div`
    text-align: center;
    font-size: ${pixelFonts.small}
`
const StatValue = styled.div`
    font-size: ${pixelFonts.med}
    ${media.tablet`
        font-size: ${pixelFonts.normal} 
    font-weight: 600;
               
    `}
    ${media.phone`
        font-size: ${pixelFonts.xsmall}
    font-weight: 600;
             
    `}
    
`

class CompanyStatField extends Component {
    render() {
        const { title, value } = this.props;
        return (
            <StatFieldContainer>
                <StatTitle>{title}</StatTitle>
                <StatValue>{value}</StatValue>                
            </StatFieldContainer>
        )
    }
}

export default CompanyStatField;