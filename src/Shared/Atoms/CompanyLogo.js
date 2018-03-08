import React, {Component} from 'react'
import styled from 'styled-components'

const Logo = styled.img`
    width: 60px;
    heigth: 60px;
`

class CompanyLogo extends Component {
    render() {
        return (
            <Logo src={this.props.logo}/>
        )
    }
}
export default CompanyLogo;