import React from 'react';
class Loginform extends React.Component {
  constructor(){
    super();
    this.state={
      username:null,password:null
    }
    this.hanldeSubmit=this.hanldeSubmit.bind(this);
  }
  hanldeSubmit(event){
    event.preventDefault();
    event.stopPropagation();
    //validate with backend and login
    //navigate to listing page
    console.log(this.state);
  }
  render() {
    return (
      <section className="login-container">
        <div className="logo align-center">
          <img src="/static/images/pt-logo.png" alt=""/>
        </div>
        <div className="login-content">
          <form onSubmit={this.hanldeSubmit}>
            <input type="text" placeholder="Username" className="form-field"/>
            <input type="password" placeholder="Password" className="form-field"/>
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
