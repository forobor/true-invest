import React, { Component } from 'react'
import { Line } from 'react-chartjs-2'
import styled from 'styled-components'

import {colors} from '../../styles/theme'

const ChartContainer = styled.div`
    margin: 20px auto;
    max-width: 1000px;
    max-height: 1000px;
    
`
class Chart extends Component {

    render() {
        console.log('thisprops', this.props)
        return (
            <ChartContainer>
                <Line
                    data={{labels: [...this.props.labels],
                        datasets:[
                            {
                                label: this.props.legend,
                                borderColor: colors.blue,
                                fill: false,
                                data:[...this.props.data]
                            }
                        ]}}
                    options={{
                        legend: { display: false },
                        maintainAspectRatio: true
                    }}
                />
            </ChartContainer>
        )
    }
}

export default Chart;