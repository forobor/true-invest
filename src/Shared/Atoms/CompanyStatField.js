import React, {Component} from 'react'
import styled from 'styled-components'

import { pixelFonts } from '../../styles/theme'

const StatFieldContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const StatTitle = styled.div`
    font-size: ${pixelFonts.small}
`
const StatValue = styled.div`
    fons-size: ${pixelFonts.med}
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