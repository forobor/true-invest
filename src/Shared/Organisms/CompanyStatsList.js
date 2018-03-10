import React, {Component} from 'react'
import styled from 'styled-components'

import CompanyLogo from '../Atoms/CompanyLogo'
import CompanyStatField from '../Atoms/CompanyStatField'
 
const StatsList = styled.div`
    margin: 24px 0.5em;    
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    font-family: 'Alice', serif; 
`

class CompanyStatsList extends Component {
    render () {
        return (
            <StatsList>           
                <CompanyLogo logo='https://sberbank.ru/portalserver/content/atom/contentRepository/content?id=8655dfea-3d64-4f01-8bf3-26748db9d36e' />
                <CompanyStatField title='Тикер' value={this.props.ticker} />                                
                <CompanyStatField title='Всего акций(млн.)' value={this.props.allStocks} />
                <CompanyStatField title='free-float' value={this.props.freeFloat} />                    
                <CompanyStatField title='Цена за акцию' value={this.props.price} />
                <CompanyStatField title='Дивиденды' value={this.props.dividend} />                    
                <CompanyStatField title='P/B' value={this.props.pB.value} />
                <CompanyStatField title='P/S' value={this.props.pS.value} />                    
                <CompanyStatField title='P/CF' value={this.props.pCF.value} />
                <CompanyStatField title='P/E' value={this.props.pE.value} />                    
            </StatsList>
        )
    }
}

export default CompanyStatsList;