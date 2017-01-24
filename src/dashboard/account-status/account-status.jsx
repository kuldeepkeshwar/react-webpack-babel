import React from 'react';
import AccountList from './account-list';
import AccountSearchForm from './account-search-form';
export default class AccountStatus extends React.Component {
  render() {
    return (
        <aside className="right-content">
          <div className="wrapper">
            <AccountSearchForm/>
            <AccountList/>
            <div className="button-holder align-center">
              <button className="button">Download</button>	
              <button className="button outline">Retry</button>
            </div>
          </div>
        </aside>
    )
  }
}
