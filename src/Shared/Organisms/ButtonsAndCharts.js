import React, {Component} from 'react'
import styled from 'styled-components'

import Chart from '../Molecules/Chart'
import { colors } from '../../styles/theme'

const Container = styled.div`
    background: 'white';
`

const StatButtons = styled.div`
    display: flex;
    justify-content: center;
    margin-left: 1em;
    margin-right: 1em;    
    flex-wrap: wrap;
    
`
const StatButton = styled.button`
    background: ${colors.blue}};
    color: ${colors.white};
    font-size: 1em;
    padding: 0.25em 1em;
    border-radius: 3px;
    border: 2px solid ${colors.blue};
    margin: 5px;
    cursor: pointer;
    font-family: 'Alice', serif;         
`

const ChartTitle = styled.h1`
    text-align: center;
`

class ButtonsAndCharts extends Component {
    state = {
        currentChart: this.props.stats[0]
    }

    handleStatButtonClick = target => {
        const dataField = this.props.stats.find(statField => statField.name === target.name);
        this.setState({currentChart: dataField});
    };



    render() {
        const {stats} = this.props;
        return (
            <Container>
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
                <ChartTitle>{this.state.currentChart.title}</ChartTitle>
                <Chart legend={this.state.currentChart.title} {...this.state.currentChart.chartData} />
                
            </Container>
        )
    }
}

export default ButtonsAndCharts;