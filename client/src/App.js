import React, { Component } from 'react';
import styled from 'styled-components'
import MainHeader from './Shared/Molecules/MainHeader'
import MainPage from './Pages/MainPage'
import Dashboard from './Pages/Dashboard'
import CompanyInfoPage from './Pages/CompanyInfoPage'
import { Switch,  Route } from 'react-router-dom';


const AppWrapper = styled.div`
  flex:1;
  display:flex;
  flex-direction:column;
  width: 100%;
  height: 100%;
`

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <MainHeader />
        <Switch>
          <Route exact path='/' component={MainPage}/>
          <Route path='/company/:id' component={CompanyInfoPage}/>
          <Route path='/dashboard' component={Dashboard}/> 
        </Switch>
      </AppWrapper>
    );
  }
}

export default App;
