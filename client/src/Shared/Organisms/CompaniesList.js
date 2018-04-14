import React, {Component} from 'react'
import styled from 'styled-components'
import CompanyPreview from '../Molecules/CompanyPreview'

const List = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`

class CompanyList extends Component {
    render() {
        const {companies, isEditable, onDelete} = this.props
        return (
            <div>
                <List>
                    {companies.map(company => 
                            <CompanyPreview
                                key={company.id}
                                id={company.id}
                                name={company.name}
                                ticker={company.ticker}
                                logo={company.logo}
                                weight={company.weight}
                                price={company.price}
                                isEditable={isEditable}
                                onDelete={onDelete}
                            />                        
                        )
                    }
                </List>
            </div>

        )
    }
}
export default CompanyList;