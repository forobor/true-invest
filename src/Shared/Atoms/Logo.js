import React, { Component } from 'react'
import styled from 'styled-components'

import { Link } from 'react-router-dom'
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
            <Link to={`/`}>
                <LogoTitle>True Invest</LogoTitle>
            </Link>
        )
    }
}

export default Logo