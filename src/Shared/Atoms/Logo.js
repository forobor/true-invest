import React, { Component } from 'react'
import styled from 'styled-components'

import { colors } from '../../styles/colors'

const LogoTitle = styled.h1`
    text-decoration: overline underline;
    font-family: 'Forum', cursive;
    color: ${colors.white}
`

class Logo extends Component {
    render() {
        return (
            <LogoTitle>True Invest</LogoTitle>
        )
    }
}

export default Logo