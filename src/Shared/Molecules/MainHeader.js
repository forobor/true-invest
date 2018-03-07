import React, { Component } from 'react';
import styled from 'styled-components'

import {colors, fonts} from '../../styles/theme'
import Logo from '../Atoms/Logo'
import HeaderLink from '../Atoms/HeaderLink'

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.8em;
    background: ${colors.black};
    box-shadow: 0 5px 5px ${colors.black};
`
const HeaderTitle = styled.div`
    color: ${colors.white};
    text-align: center;
    font-family: 'Alice', serif;
    font-size: ${fonts.large}  
`

class MainHeader extends Component {
    render() {
        return (
            <Header>
                <Logo/>
                <div>
                    <HeaderTitle>Инвестируйте,</HeaderTitle>
                    <HeaderTitle>основываясь на данных</HeaderTitle>
                </div>                
                <HeaderLink/>
            </Header>
        )
    }
}

export default MainHeader
