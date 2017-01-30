import React from 'react';
import { browserHistory  } from 'react-router';
import Auth from './../utils/auth';
class Loginform extends React.Component {
  constructor(props, context){
    super(props, context);
    this.state={
      username:'',password:''
    }
    this.hanldeSubmit=this.hanldeSubmit.bind(this);
    this.handleChange=this.handleChange.bind(this);
  }
  handleChange(event) {
    let _state={};
    _state[event.target.name]=event.target.value;
    this.setState(_state);
  }
  hanldeSubmit(event){
    event.preventDefault();
    event.stopPropagation();
    //validate with backend and login
    //navigate to listing page
    Auth.login(this.state.username,this.state.password).then((resp)=>{
      console.log(resp);
      if(resp.authenticated){
        browserHistory.replace('/dashboard');
      }else{
        //show error //TODO
      }
    })
  }
  render() {
    return (
      <section className="login-container">
        <div className="logo align-center">
          <img src="/static/images/pt-logo.png" alt="logo"/>
        </div>
        <div className="login-content">
          <form onSubmit={this.hanldeSubmit}>
            <input name="username" type="text" placeholder="Username" className="form-field" value={this.state.username} onChange={this.handleChange}/>
            <input name="password" type="password" placeholder="Password" className="form-field" value={this.state.password} onChange={this.handleChange}/>
            <input type="submit" value="Submit" className="button"/>
            <a href="" className="forgot-password">Forgot password?</a>
          </form>
        </div>
      </section>
      )
  }
}

export default class Login extends React.Component {
  render() {
    return (
       <Loginform/>
      )
  }
}
