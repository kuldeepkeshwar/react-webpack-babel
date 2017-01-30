import React from 'react';
import Header from './../header/header';
import LeftPanel from './left-panel';
export default class DashBoard extends React.Component {
  constructor(props, context){
    super(props, context);
    this.state={
      a:10,b:30
    }
  }
  render() {
    
    return (
      <div>
        <Header/>
        <section className="main-content">
          <LeftPanel/>
          {this.props.children}
        </section>
	    </div>
    )
  }
}
