import React from 'react';
export default class DashBoard extends React.Component {
  render({children}) {
    return (
      <div>
        <p>DashBoard page!!</p>
        <p>{children}</p>
      </div>
    )
  }
}
