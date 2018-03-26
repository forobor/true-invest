import React, {Component} from 'react'
import styled from 'styled-components'
import CompanyButton from '../Atoms/CompanyButton'
import CompanyLogo from '../Atoms/CompanyLogo'

import { Link } from 'react-router-dom';
import { colors } from '../../styles/theme'

const Company=styled.div`
    width: 250px;
    height: 250px;
    background-color: ${colors.white}
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin: 12px;
    border-radius: 8px;
    font-family: 'Alice', serif; 
`
const Name = styled.h2`
    margin: 5px;
`
const Weight = styled.div`
    color: ${colors.gray}
    
`

const Price = styled.div`
    margin: 4px;
`

class CompanyPreview extends Component {
    render() {
        return(
            <div>
                <Company>
                    <CompanyLogo 
                        logo={this.props.logo} />
                    <Name>{this.props.name}</Name>
                    <Weight>Вес в индексе RTS: {this.props.weight}%</Weight>            
                    <Price>Цена за акцию: {this.props.price} р.</Price>
                    <Link to={`/company/${this.props.id}`}>
                        <CompanyButton title='Посмотреть статистику' />
                    </Link> 
                </Company>
            </div>

        )
    }
}

export default CompanyPreview