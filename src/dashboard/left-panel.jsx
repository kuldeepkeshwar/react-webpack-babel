import React from 'react';
const menus=[{
  label:'Account Opening',
  open:true,
  children:[{
    label:'Account Opening Status',
    path:'/dashboard/account-status'
  },{
    label:'KYC',
    path:'/dashboard/account-status'
  },{
    label:'Account',
    path:'/dashboard/account-status'
  }]
},{
  label:'Account Opening',
  open:false,
  children:[{
    label:'Account Opening Status',
    path:'/dashboard/account-status'
  },{
    label:'KYC',
    path:'/dashboard/account-status'
  },{
    label:'Account opening ',
    path:'/dashboard/account-status'
  },{
    label:'Account',
    path:'/dashboard/account-status'
  }]
},{
  label:'Account Opening',
  open:false,
  children:[{
    label:'Account Opening Status',
    path:'/dashboard/account-status'
  },{
    label:'KYC',
    path:'/dashboard/account-status'
  },{
    label:'Account opening ',
    path:'/dashboard/account-status'
  },{
    label:'Account',
    path:'/dashboard/account-status'
  }]
}];
function renderSubMenu(menus){
  return menus.map((menu,i)=>{
    return <li key={i}><a href="{menu.path}">{menu.label}</a></li>
  })
}
function renderMenu(menus){
  return menus.map((menu,i)=>{
      let className=(menu.open)?'open':'';
      return (<li key={i} className={className}>
        <a href="javascript:void(0);">{menu.label} <span className="dropdown-arrow"></span></a>
        <ul>
          {renderSubMenu(menu.children)}
        </ul>
      </li>)
  });
}
export default class LeftPanel extends React.Component {
  constructor(){
      super();
  }  
  render() {
    const _menus=renderMenu(menus);
    return (
      <aside className="left-menu">
      <ul className="side-bar">
        {_menus}
      </ul>
    </aside>
    )
  }
}
