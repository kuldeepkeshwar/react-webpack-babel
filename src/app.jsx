import styles from './index.scss';
import React from 'react';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import Login from './login/login';
import Dashboard from './dashboard/dashboard';

import AccountStatus from './dashboard/account-status/account-status';
import Container from './container/container';
import Header from './header/header';
import Footer from './footer/footer';
export default class App extends React.Component {
  constructor(){
    super();
    this.state={
      isLogined:false
    };
  }
  render() {
    let homePage;
    if(this.state.isLogined){
      homePage=<IndexRoute  component={Dashboard}/>
    }else{
      homePage=<IndexRoute  component={Login}/>
    }
    return (
      <div>
        <Header/>
        <Router history={browserHistory}>
           <Route path="/" component={Container}>
            {homePage}
            <Route path="login" component={Login}/>
            <Route path="dashboard" component={Dashboard}>
              
              <Route path="account-status" component={AccountStatus}/>
            </Route> 
           </Route>
        </Router>
        <Footer/>
      </div>
      )
  }
}
