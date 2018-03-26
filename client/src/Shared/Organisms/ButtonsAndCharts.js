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
    currentChart: this.props.stats[0]
  };

  handleStatButtonClick = target => {
    const dataField = this.props.stats.find(
      statField => statField.name === target.name
    );
    this.setState({ currentChart: dataField });
  };

  render() {
    const { stats } = this.props;
    return (
      <Container>
        <StatButtons>
          {stats.map(statField => (
            <StatButton
              key={statField.name}
              name={statField.name}
              data={statField.data}
              onClick={event =>
                this.handleStatButtonClick(
                  event.target
                )
              }
            >
              {statField.title}
            </StatButton>
          ))}
        </StatButtons>
        <ChartContainer>
          <ChartTitle>
            {this.state.currentChart.title}
          </ChartTitle>
          <Chart
            legend={this.state.currentChart.title}
            {...this.state.currentChart.chartData}
          />
        </ChartContainer>
      </Container>
    );
  }
}

export default ButtonsAndCharts;
