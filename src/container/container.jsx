import React from 'react';
//import Header from '../header/header';
//import Footer from '../footer/footer';

export default class Container extends React.Component {
  constructor(props, context){
    super(props, context);
  }
  render() {    
    return (
      <div>
        {this.props.children}
      </div>
      )
  }
}