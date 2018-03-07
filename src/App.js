import React, { Component } from 'react';
import styled from 'styled-components'
import MainHeader from './Shared/Molecules/MainHeader'
import MainPage from './Pages/MainPage'

const AppWrapper = styled.div`
  flex:1;
  display:flex;
  flex-direction:column;
  width: 100%;
  heigth: 100%;
`

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <MainHeader/>
        <MainPage/>
      </AppWrapper>
    );
  }
}

export default App;
