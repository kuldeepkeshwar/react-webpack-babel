import React from 'react';
import {Link} from 'react-router';
import Auth from './../utils/auth';
export default class Header extends React.Component {
  constructor(props, context){
    super(props, context);
    this.state={
      user:{}
    };
  }
  componentDidMount(){
    Auth.getUser().then(_user=>this.setState({user:_user}));
  }
  render() {
    
    return (
        <header className="header">
          <div className="container">
            <div className="row">
              <div className="grid-4">
                <div className="logo">
                  <img src="/static/images/pt-logo.png" alt="logo"/>
                </div>
              </div>
              <div className="grid-8">
                <div className="dropdown user-dropdown ">
                  <a href="" className="dropdown-link">
                    <span className="username">{this.state.user.shortForm}</span> {this.state.user.name }<span className="dropdown-arrow"></span>
                  </a>
                  <ul className="dropdown-menu">
                    <li><Link to="/logout">Logout</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </header>
      )
  }
}
