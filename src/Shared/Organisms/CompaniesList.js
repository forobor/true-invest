import React, {Component} from 'react'
import styled from 'styled-components'
import CompanyPreview from '../Molecules/CompanyPreview'

const List = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 2em;
    flex-wrap: wrap;
`

class CompanyList extends Component {
    render() {
        const {companies} = this.props
        return (
            <List>
                {companies.map(company => 
                        <CompanyPreview
                            id={company.id}
                            name={company.name}
                            logo={company.logo}
                            weight={company.weight}
                            price={company.price}
                        />                        
                    )
                }
            </List>
        )
    }
}
export default CompanyList;