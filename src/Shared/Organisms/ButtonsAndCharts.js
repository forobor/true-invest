import React, {Component} from 'react'
import styled from 'styled-components'

import { colors } from '../../styles/theme'

const StatButtons = styled.div`
    display: flex;
    justify-content: center;
    margin: 10px;
    flex-wrap: wrap;
`
const StatButton = styled.button`
    background: ${colors.blue}};
    color: ${colors.white};
    font-size: 1em;
    padding: 0.25em 1em;
    border-radius: 3px;
    border: 2px solid ${colors.blue};
    font-family: 'Alice', serif; 
    margin: 5px;
    cursor: pointer; 
`
class ButtonsAndCharts extends Component {

    handleStatButtonClick = target => console.log(target.name);

    render() {
        console.log('props', this.props)
        const {stats} = this.props;
        return (
            <div>
                <StatButtons>
                    {stats.map(statField =>                     
                        <StatButton
                            key={statField.name}
                            name={statField.name}
                            data={statField.data} 
                            onClick={event => this.handleStatButtonClick(event.target)}>
                            {statField.title}
                        </StatButton>)
                    }
                </StatButtons>
            </div>
        )
    }
}

export default ButtonsAndCharts;