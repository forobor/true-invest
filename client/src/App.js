import React, { Component } from 'react';
import styled from 'styled-components'
import MainHeader from './Shared/Molecules/MainHeader'
import MainPage from './Pages/MainPage'
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

  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/companies');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);
    return body;
  };



  render() {
    return (
      <AppWrapper>
        <MainHeader />
        <Switch>
          <Route exact path='/' component={MainPage}/>
          <Route path='/company/:id' component={CompanyInfoPage}/>
        </Switch>
      </AppWrapper>
    );
  }
}

export default App;
