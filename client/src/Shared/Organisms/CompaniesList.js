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
        const {companies} = this.props
        return (
            <div>
                <List>
                    {companies.map(company => 
                            <CompanyPreview
                                key={company.id}
                                id={company.id}
                                name={company.name}
                                logo={company.logo}
                                weight={company.weight}
                                price={company.price}
                            />                        
                        )
                    }
                </List>
            </div>

        )
    }
}
export default CompanyList;