import React from 'react';
import Header from './../header/header';
import LeftPanel from './left-panel';
export default class DashBoard extends React.Component {
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
