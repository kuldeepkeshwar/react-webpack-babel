import React from 'react';
import { Router, Route, Link } from 'react-router'
import { getMenu } from './../services/menu';
function renderSubMenu(menus) {
  return menus.map((menu, i) => {
    return <li key={i}>
      <Link to={menu.path}>{menu.label}</Link>
    </li>
  })
}
function renderMenu(menus) {
  return menus.map((menu, i) => {
    let className = (menu.open) ? 'open' : '';
    return (
      <li key={i} className={className}>
        <a href="javascript:void(0);">{menu.label} <span className="dropdown-arrow"></span></a>
        <ul>
          {renderSubMenu(menu.children)}
        </ul>
      </li>
    )
  });
}
export default class LeftPanel extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      menus: []
    }
  }
  componentDidMount() {
    getMenu().then(items => this.setState({
      menus: items
    }));
  }
  render() {
    console.log(this);
    const _menus = renderMenu(this.state.menus);
    return (
      <aside className="left-menu">
        <ul className="side-bar">
          {_menus}
        </ul>
      </aside>
    )
  }
}
