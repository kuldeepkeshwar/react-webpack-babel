import styles from './index.scss';
import React from 'react';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import Login from './login/login';
import Dashboard from './dashboard/dashboard';
import AccountStatus from './dashboard/account-status/account-status';
import Container from './container/container';
export default class App extends React.Component {
  constructor(){
    super();
    this.state={
      isLogined:true
    };
  }
  render() {
    let homePage;
    if(this.state.isLogined){
      homePage=<Route component={Dashboard}>
              <IndexRoute component={AccountStatus}/>
            </Route>
    }else{
      homePage=<IndexRoute  component={Login}/>
    }
    return (
        <Router history={browserHistory}>
           <Route path="/" component={Container}>
            {homePage}
            <Route path="/login" component={Login}/>
            <Route path="/dashboard" component={Dashboard}>
              <IndexRoute component={AccountStatus}/>
            </Route>
           </Route>
        </Router>
      )
  }
}
