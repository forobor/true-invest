import React, { Component } from 'react'
import styled from 'styled-components'
import { colors } from '../../styles/theme'

const Button = styled.button`
  background: ${props => props.isDelete ? colors.danger : colors.blue};
  color: ${colors.white};
  font-size: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  border: 2px solid transparent;
  font-family: 'Alice', serif; 
  margin: 5px;
  cursor: pointer; 
`;

class CompanyButton extends Component {
    render() {
        if(this.props.isDelete) {
            return <Button isDelete onClick={this.props.onDelete}>{this.props.title}</Button>

        }
        return <Button >{this.props.title}</Button>
        
    }
}

export default CompanyButton