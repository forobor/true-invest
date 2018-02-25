import React, {Component} from 'react'
import styled from 'styled-components'

const LinkTitle = styled.a.attrs({
    href: '#'
})`
    font-size: 2em;
`

class HeaderLink extends Component {
    render() {
        return (
            <LinkTitle>О сайте</LinkTitle>
        )
    }
}

export default HeaderLink;