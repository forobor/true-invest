import React, {Component} from 'react'
import styled from 'styled-components'

import CompanyLogo from '../Atoms/CompanyLogo'
import CompanyStatField from '../Atoms/CompanyStatField'
 
const StatsList = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`

class CompanyStatsList extends Component {
    render () {
        return (
            <StatsList>
                <CompanyLogo logo='https://sberbank.ru/portalserver/content/atom/contentRepository/content?id=8655dfea-3d64-4f01-8bf3-26748db9d36e' />
                <CompanyStatField title='Тикер' value={this.props.ticker} />
            </StatsList>
        )
    }
}