import React, {Component} from 'react'
import styled from 'styled-components'

import CompanyLogo from '../Atoms/CompanyLogo'
import CompanyStatField from '../Atoms/CompanyStatField'
 
const StatsList = styled.div`
    margin-top: 24px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    font-family: 'Alice', serif; 
`
const StatColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`

class CompanyStatsList extends Component {
    render () {
        return (
            <StatsList>
                <StatColumn>
                    <CompanyLogo logo='https://sberbank.ru/portalserver/content/atom/contentRepository/content?id=8655dfea-3d64-4f01-8bf3-26748db9d36e' />
                    <CompanyStatField title='Тикер' value={this.props.ticker} />                    
                </StatColumn>
                <StatColumn>
                    <CompanyStatField title='Всего акций(млн.)' value={this.props.allStocks} />
                    <CompanyStatField title='free-float' value={this.props.freeFloat} />                    
                </StatColumn>
                <StatColumn>
                    <CompanyStatField title='Цена за акцию' value={this.props.price} />
                    <CompanyStatField title='Дивиденды' value={this.props.yearStat.dividend[2016]} />                    
                </StatColumn>
                <StatColumn>
                    <CompanyStatField title='P/B' value={this.props.pB.value} />
                    <CompanyStatField title='P/S' value={this.props.pS.value} />                    
                </StatColumn>
                <StatColumn>
                    <CompanyStatField title='P/CF' value={this.props.pCF.value} />
                    <CompanyStatField title='P/E' value={this.props.pE.value} />                    
                </StatColumn>
            </StatsList>
        )
    }
}

export default CompanyStatsList;