import styles from './index.scss';
import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import Login from './login';
import List from './list';
import Main from './main';
export default class App extends React.Component {
  render() {
    return (
      <div>
        <header>paytm header!!</header>
        <Router history={browserHistory}>
           <Route path="/" component={Main}>
            <Route path="login" component={Login}/>
            <Route path="list" component={List}/> 
           </Route>
        </Router>
        <footer>footer!!</footer>
      </div>
      )
  }
}
