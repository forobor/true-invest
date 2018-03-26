import React, { Component } from 'react'
import styled from 'styled-components'
import { colors } from '../../styles/theme'

const Button = styled.button`
  background: ${colors.blue}};
  color: ${colors.white};
  font-size: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  border: 2px solid ${colors.blue};
  font-family: 'Alice', serif; 
  margin: 5px;
  cursor: pointer; 
`;

class CompanyButton extends Component {
    render() {
        return <Button>{this.props.title}</Button>
    }
}

export default CompanyButton