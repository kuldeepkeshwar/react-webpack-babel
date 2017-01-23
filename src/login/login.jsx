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
        <form onSubmit={this.hanldeSubmit}>
          <label>User Name</label>
          <input type="text" name="username"/>
          <label>Password</label>
          <input type="text" name="pwd"/>
          <input type="submit" value="Login"/>
        </form>
      )
  }
}

export default class Login extends React.Component {
  render() {
    return (
      <div>
        <p>Please login</p>
        <Loginform/>
      </div>
      )
  }
}
