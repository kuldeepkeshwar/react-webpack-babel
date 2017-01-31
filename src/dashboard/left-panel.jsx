import React from 'react';

import { Router, Route, Link } from 'react-router'
import { getMenu } from './../services/menu';
import { isThenable } from './../utils/function';
function renderSubMenu(menus) {
  return menus.map((menu, i) => {
    return <li key={i}>
      <Link to={menu.path}>{menu.label}</Link>
    </li>
  })
}

function renderMenu(menus) {
  let _m = menus.map((menu, i) => {
    //let className = (menu.open) ? 'open' : '';
    return (
      <Panel key={i} activeClass="open" open={() => (menu.open) ? 'open' : ''}>
        <li key={i} >
          <a href="javascript:void(0);">{menu.label} <span className="dropdown-arrow"></span></a>
          <ul>
            {renderSubMenu(menu.children)}
          </ul>
        </li>
      </Panel>
    )
  });
  return <Accordion>
    {_m}
  </Accordion>;
  return menus.map((menu, i) => {
    //let className = (menu.open) ? 'open' : '';
    return (
      <Panel key={i} activeClass="open" open={() => (menu.open) ? 'open' : ''}>
        <li key={i} >
          <a href="javascript:void(0);">{menu.label} <span className="dropdown-arrow"></span></a>
          <ul>
            {renderSubMenu(menu.children)}
          </ul>
        </li>
      </Panel>
    )
  });
}
const Panel = React.createClass({
  propTypes: {
    children: React.PropTypes.element.isRequired,
    activeClass: React.PropTypes.string,
    open: React.PropTypes.func
  },
  render: function () {
    let _panel=this;
    let children=React.Children.map(this.props.children, (child, index) => {
      return React.cloneElement(child, {
        onClick: function(){ 
          console.log(this);
          
        }.bind(child)
      });
    });
    //console.log(this.props.children);
    return (children[0]);
  },
  // componentDidMount: function () {
  //   console.log(this);
  //   React.Children.forEach(this.props.children, (child, index) => {
  //     if (child.open) {
  //       if(isThenable(child.open)){
  //         child.open().then(()=>{
  //           //
  //         })
  //       }else if (child.open()){

  //       }
  //     } else {
  //       //add default
  //     }
  //   });
  // },
  componentWillUnmount: function () {
    //this.element.off( "mousemove", this.handleMousemove );
  },
  handleClick: function (event) {

  }
})
const Accordion = React.createClass({
  propTypes: {
    //children: React.PropTypes.element.isRequired,

  },
  render: function () {
    return (this.props.children)
  },
  componentDidMount: function () {
    //console.log( this );
  },
  componentWillUnmount: function () {
    //this.element.off( "mousemove", this.handleMousemove );
  },
  handleClick: function (event) {

  }
})
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
    const _menus = renderMenu(this.state.menus);
    return (
      <aside className="left-menu">

        <Accordion panels={this.state.menus}>
          <ul className="side-bar">
            {this.state.menus.map((menu, i) => {
              //let className = (menu.open) ? 'open' : '';
              return (
                <Panel key={i} activeClass="open">
                  <li key={i} >
                    <a href="javascript:void(0);">{menu.label} <span className="dropdown-arrow"></span></a>
                    <ul>
                      {renderSubMenu(menu.children)}
                    </ul>
                  </li>
                </Panel>
              )
            })
            }
          </ul>
        </Accordion>

      </aside>
    )
  }
}
