import React, { Component } from 'react';
import styled from 'styled-components'

import {colors} from '../../styles/colors'
import Logo from '../Atoms/Logo'
import HeaderLink from '../Atoms/HeaderLink'

const Header = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.8em;
    background: ${colors.black}
`

class MainHeader extends Component {
    render() {
        return (
            <Header>
                <Logo/>
                <HeaderLink/>
            </Header>
        )
    }
}

export default MainHeader
