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
const Panel = React.createClass({
  propTypes: {
    children: React.PropTypes.element.isRequired,
    activeClass: React.PropTypes.string,
    beforeOpen: React.PropTypes.func
  },
  getInitialState: function() {
      return({
          //className:'',
          handlers: {}
      });
  },
  render: function () {
    let props =Object.assign({
      className:this.props.children.props.className.trim()+' '+this.state.className
    },this.state.handlers);
    return( React.cloneElement( this.props.children, props ) );
  },
  componentDidMount: function() {
      this.setState({
        className:this.props.activeClass,
        handlers: {
            onClick: this.handleClick
        }
      });
  },
  handleClick: function (event) {
    let cls='';
    if(this.state.className.indexOf(this.props.activeClass)==-1){//closed
      cls=this.props.activeClass;
    }
    this.setState({
        className:cls
    })
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
    return (
      <aside className="left-menu">
        <Accordion panels={this.state.menus}>
          <ul className="side-bar">
            {this.state.menus.map((menu, i) => {
              //let className = (menu.open) ? 'open' : '';
              return (
                <Panel key={i} activeClass="open">
                  <li key={i} className="test">
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
