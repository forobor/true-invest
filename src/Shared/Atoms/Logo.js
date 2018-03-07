import React, { Component } from 'react'
import styled from 'styled-components'

import { colors, fonts } from '../../styles/theme'

const LogoTitle = styled.div`
    text-decoration: overline underline;
    font-family: 'Forum', cursive;
    color: ${colors.white}
    font-size: ${fonts.large}
`

class Logo extends Component {
    render() {
        return (
            <LogoTitle>True Invest</LogoTitle>
        )
    }
}

export default Logo