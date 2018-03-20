import React, { Component } from 'react'
import { Line } from 'react-chartjs-2'
import styled from 'styled-components'

import { colors, media } from '../../styles/theme'

const ChartContainer = styled.div`
    margin: 0 auto;
    width: 90% !important;
    max-width: 800px;
    height: auto !important;
    background: ${colors.white}

`
class Chart extends Component {

    render() {
        return (
            <ChartContainer>
                <Line
                    data={{labels: [...this.props.labels],
                        datasets:[
                            {
                                borderColor: colors.blue,
                                fill: false,
                                data:[...this.props.data]
                            }
                        ]}}
                    options={{
                        legend: { display: false },
                        maintainAspectRatio: true,
                        scales: {
                            yAxes: [{
                                position: 'right'
                            }]
                        },
                    }}
                />
            </ChartContainer>
        )
    }
}

export default Chart;