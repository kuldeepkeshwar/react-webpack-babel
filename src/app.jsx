import styles from './index.scss';
import React from 'react';
import { Router, browserHistory  } from 'react-router';
import Routes from './routes';
export default class App extends React.Component {
  constructor(props, context){
    super(props, context);
  }
  render() {
    return (
        <Router history={browserHistory} routes={Routes}></Router>
      )
  }
}
