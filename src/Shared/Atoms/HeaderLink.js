import React, {Component} from 'react'
import styled from 'styled-components'
import {fonts} from '../../styles/theme'

const LinkTitle = styled.a.attrs({
    href: '#'
})`
    font-size: ${fonts.large};
`

class HeaderLink extends Component {
    render() {
        return (
            <LinkTitle>О сайте</LinkTitle>
        )
    }
}

export default HeaderLink;