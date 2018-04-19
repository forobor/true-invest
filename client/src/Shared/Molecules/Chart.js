import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import styled from "styled-components";

import {
  colors,
  media
} from "../../styles/theme";

const ChartContainer = styled.div`
    margin: 0 auto;
    position: relative;
    max-height: 500px;
    max-width: 900px;
    min-height: 500px;
    min-width: 900px;
    ${media.tablet`
    max-height: auto;
    max-width: auto;
    min-height: auto;
    min-width: auto;
    `}
`;

class Chart extends Component {
  render() {
    const labels = Object.keys(this.props.chartData)
    const data = Object.values(this.props.chartData)
    return (
      <ChartContainer>
        <Line
          data={{
            labels: [...labels],
            datasets: [
              {
                borderColor: colors.blue,
                fill: false,
                data: [...data]
              }
            ]
          }}
          options={{
            legend: { display: false },
            maintainAspectRatio: true,
            scales: {
              yAxes: [
                {
                  position: "right"
                }                
              ]
            }
          }}
        />
      </ChartContainer>
    );
  }
}

export default Chart;
