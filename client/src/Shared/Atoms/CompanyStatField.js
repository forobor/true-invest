import React, { Component } from "react";
import styled from "styled-components";
import FontAwesome from "react-fontawesome";

import { fonts, media, colors } from "../../styles/theme";

const StatFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  width: 250px;
  position: relative;
  ${media.tablet`
      width: 100px;        
  `} ${media.phone`
      width: 100px;        
  `};
`;

const StatTitle = styled.div`
  text-align: center;
  font-size: ${fonts.small};
  width: 100px;
  ${media.tablet`
    width: 50px;      
  `} ${media.phone`
    width: 50px;        
  `};
`;

const StatValue = styled.div`
  font-size: ${fonts.med} 
  ${media.tablet`
    font-size: ${fonts.normal} 
    font-weight: 600;          
  `} 
  ${media.phone`
    font-size: ${fonts.xsmall}
    font-weight: 600;       
  `};
`;

const BadgeDescription = styled.div`
  display: none;
  width: 200px;
  position: absolute;
  left: -25px;
  background-color: ${colors.light_gray};
  border-radius: 10px;
  padding: 10px;
  z-index: 30;
  ${media.phone`
      width: 120px;
      font-size: ${fonts.small}
  `};
`

const Description = styled(FontAwesome)`
  font-size: ${fonts.normal};
  position: relative;
  right: 50px;
  curson: pointer;
  ${media.tablet`
    left: 0px;
    right: auto;        
  `}
  ${media.phone`
    font-size: ${fonts.small};
    left: 0px;
    right: auto;        
  `};
`;

const DescriptionContainer = styled.div`
  cursor: pointer;
  &:hover ${BadgeDescription} {
    display: block;
  }
  &:active ${BadgeDescription} {
    display: block;
  }
`


class CompanyStatField extends Component {
  render() {
    const { title, value, description  } = this.props;
    return (
      <StatFieldContainer>
        {description && 
          <DescriptionContainer>
            <Description className="far fa-question-circle" name=""/>
            <BadgeDescription>{description}</BadgeDescription>
          </DescriptionContainer>
        }
        <StatTitle >{title}</StatTitle>
        <StatValue>{value}</StatValue>
      </StatFieldContainer>
    );
  }
}

export default CompanyStatField;
