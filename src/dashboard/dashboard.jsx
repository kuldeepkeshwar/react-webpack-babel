import React from 'react';
export default class DashBoard extends React.Component {
  render() {
    return (
      <div>
        <p>DashBoard page!!</p>
        {this.props.children}
      </div>
    )
  }
}
