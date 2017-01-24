import React from 'react';
export default class Header extends React.Component {
  render() {
    return (
        <header className="header">
          <div className="container">
            <div className="row">
              <div className="grid-4">
                <div className="logo">
                  <img src="/static/images/pt-logo.png" alt=""/>
                </div>
              </div>
              <div className="grid-8">
                <div className="dropdown user-dropdown ">
                  <a href="" className="dropdown-link">
                    <span className="username">Rg</span> Ravinder gupta <span className="dropdown-arrow"></span>
                  </a>
                  <ul className="dropdown-menu">
                    <li><a href="">Logout</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </header>
      )
  }
}
