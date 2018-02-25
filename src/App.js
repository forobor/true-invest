import React, { Component } from 'react';
import styled from 'styled-components'

import MainHeader from './Shared/Molecules/MainHeader'

const AppWrapper = styled.div`
  flex:1;
  display:flex;
`

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <MainHeader/>
      </AppWrapper>
    );
  }
}

export default App;
