import React, {Component} from 'react'
import styled from 'styled-components'
import CompanyButton from '../Atoms/CompanyButton'
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
const Logo = styled.img`
    width: 60px;
    heigth: 60px;
`
const Price = styled.div`
    margin: 4px;
`

class CompanyPreview extends Component {
    render() {
        return(
            <Company>
                <Logo src='https://sberbank.ru/portalserver/content/atom/contentRepository/content?id=8655dfea-3d64-4f01-8bf3-26748db9d36e'></Logo>
                <Name>{this.props.name}</Name>
                <Weight>Вес в индексе RTS: {this.props.weight}</Weight>            
                <Price>Цена за акцию: {this.props.price} р.</Price>
                <CompanyButton/>
            </Company>
        )
    }
}

export default CompanyPreview