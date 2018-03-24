import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import {
  colors,
  fonts,
  media
} from "../../styles/theme";

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background: ${colors.black};
  font-size: ${fonts.large};
  height: 80px;
  ${media.tablet`
        font-size: ${fonts.xmed};
    `};
  ${media.phone`
        padding: 5px;
        font-size: ${fonts.normal};
    `};
`;

const LogoTitle = styled.div`
  text-decoration: overline underline;
  font-family: "Forum", cursive;
  color: ${colors.white};
`;

const HeaderTitle = styled.div`
  color: ${colors.white};
  text-align: center;
  font-family: "Alice", serif;
`;

const LinkTitle = styled.div``;

class MainHeader extends Component {
  render() {
    return (
      <Header>
        <Link to={`/`}>
          <LogoTitle>True Invest</LogoTitle>
        </Link>
        <div>
          <HeaderTitle>Инвестируйте,</HeaderTitle>
          <HeaderTitle>
            основываясь на данных
          </HeaderTitle>
        </div>
        <Link to={`/`}>
          <LinkTitle>О сайте</LinkTitle>
        </Link>
      </Header>
    );
  }
}

export default MainHeader;
