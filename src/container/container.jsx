import React from 'react';
import Header from '../header/header';
//import Footer from '../footer/footer';

export default class Container extends React.Component {
  constructor(){
    super();
  }
  render() {    
    return (
      <div>
        <Header/>
        {this.props.children}
      </div>
      )
  }
}