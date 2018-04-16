import React, { Component } from 'react';
import styled from 'styled-components'


import MainHeader from './Shared/Molecules/MainHeader'
import MainPage from './Pages/MainPage'
import Dashboard from './Pages/Dashboard'
import CompanyInfoPage from './Pages/CompanyInfoPage'
import ChangeCompanyPage from './Pages/ChangeCompanyPage'
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
          <Route exact path='/dashboard' component={Dashboard}/>
          <Route path='/dashboard/company/:id' component={ChangeCompanyPage}/> 
        </Switch>
      </AppWrapper>
    );
  }
}

export default App;
