import React, {Component} from 'react'
import styled from 'styled-components'
import CompanyPreview from '../Molecules/CompanyPreview'

const List = styled.div`
    display: flex;
    justify-content: space-around;
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