import React, { Component } from "react";
import styled from "styled-components";
import FontAwesome from "react-fontawesome";

import { fonts, media } from "../../styles/theme";

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

const Description = styled(FontAwesome)`
  font-size: ${fonts.normal};
  position: absolute;
  right: 50px;
  curson: pointer
  ${media.tablet`
    left: 0px;
    right: auto;        
  `} ${media.phone`
    left: 0px;
    right: auto;        
  `};
`;



class CompanyStatField extends Component {
  render() {
    const { title, value, description  } = this.props;
    return (
      <StatFieldContainer>
        {description && <Description title={description} className="far fa-question-circle" name="" />}
        <StatTitle >{title}</StatTitle>
        <StatValue>{value}</StatValue>
      </StatFieldContainer>
    );
  }
}

export default CompanyStatField;
