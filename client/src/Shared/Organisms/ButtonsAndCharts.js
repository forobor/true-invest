import React, { Component } from "react";
import styled from "styled-components";

import Chart from "../Molecules/Chart";
import {
  colors,
  media,
  fonts
} from "../../styles/theme";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${colors.white};
`;

const StatButtons = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 20px;
  margin-right: 20px;
  flex-wrap: wrap;
`;
const StatButton = styled.button`
  background: ${colors.blue}};
  color: ${colors.white};
  border-radius: 3px;
  font-size: ${fonts.xsmall};
  padding: 0.25em 1em;
  border: 2px solid ${colors.blue};
  margin: 5px;
  cursor: pointer;
  font-family: "Alice", serif;
  width: 150px;
  text-align: center;
  ${media.tablet`
        width: 150px;
    `} ${media.phone`
    font-size: ${fonts.small};
        width: 125px;
    `};
`;

const ChartContainer = styled.div``;

const ChartTitle = styled.h2`
  text-align: center;
`;

class ButtonsAndCharts extends Component {
  state = {
    currentChart: this.props.stats.stockPrice
  };

  handleStatButtonClick = target => {
    this.setState({ currentChart: this.props.stats[target.name] });
  };

  render() {
    const { stats } = this.props
    const keys = Object.keys(this.props.stats)
    return (
      <Container>
        <StatButtons>
          {keys.map(statField => (
            <StatButton
              key={statField}
              name={statField}
              data={stats[statField].data}
              onClick={event =>
                this.handleStatButtonClick(
                  event.target
                )
              }
            >
              {stats[statField].title}
            </StatButton>
          ))}
        </StatButtons>
        <ChartContainer>
          <ChartTitle>
            {this.state.currentChart.title}
          </ChartTitle>
          <Chart
            legend={this.state.currentChart.title}
            chartData={this.state.currentChart.chartData}
          />
        </ChartContainer>
      </Container>
    );
  }
}

export default ButtonsAndCharts;
