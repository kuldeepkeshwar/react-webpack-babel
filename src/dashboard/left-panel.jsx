import React from 'react';
export default class LeftPanel extends React.Component {
  constructor(){
      super();
  }  
  render() {
    return (
      <aside className="left-menu">
      <ul className="side-bar">
        <li className="open">
          <a href="">Account related <span className="dropdown-arrow"></span></a>
          <ul>
            <li><a href="">Account opening status</a></li>
            <li><a href="">Account </a></li>
            <li><a href="">status</a></li>
          </ul>
        </li>

        <li className="">
          <a href="">Account related <span className="dropdown-arrow"></span></a>
          <ul>
            <li><a href="">Account opening status</a></li>
            <li><a href="">Account </a></li>
            <li><a href="">status</a></li>
          </ul>
        </li>

        <li className="">
          <a href="">Account related <span className="dropdown-arrow"></span></a>
          <ul>
            <li><a href="">Account opening status</a></li>
            <li><a href="">Account </a></li>
            <li><a href="">status</a></li>
          </ul>
        </li>

        <li className="">
          <a href="">Account related <span className="dropdown-arrow"></span></a>
          <ul>
            <li><a href="">Account opening status</a></li>
            <li><a href="">Account </a></li>
            <li><a href="">status</a></li>
          </ul>
        </li>

        <li className="">
          <a href="">Account related <span className="dropdown-arrow"></span></a>
          <ul>
            <li><a href="">Account opening status</a></li>
            <li><a href="">Account </a></li>
            <li><a href="">status</a></li>
          </ul>
        </li>
      </ul>
    </aside>
    )
  }
}
