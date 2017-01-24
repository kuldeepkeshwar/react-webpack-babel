import React from 'react';
export default class AccountSearchForm extends React.Component {
  render() {
    return (
        <div>
          <h3 className="heading3">Search</h3>
            <div className="filter-form">
              <div className="row">
                <div className="grid-3">
                  <div className="filter">
                    <label htmlFor="">From</label>
                    <input type="text" placeholder="Select date" className="form-field"/>
                  </div>
                </div>

                <div className="grid-3">
                  <div className="filter">
                    <label htmlFor="">To</label>
                    <input type="text" placeholder="Select date" className="form-field"/>
                  </div>
                </div>

                <div className="grid-3">
                  <div className="filter">
                    <label htmlFor="">Coustomer ID</label>
                    <input type="text" placeholder="Coustomer id" className="form-field"/>
                  </div>
                </div>

                <div className="grid-3">
                  <div className="filter">
                    <label htmlFor="">Status</label>
                    <select name="" id="" className="form-field">
                      <option value="">Status</option>
                      <option value="">Status 2</option>		
                    </select>
                  </div>
                </div>

                <div className="grid-3">
                  <div className="filter">
                    <label htmlFor="">File upload</label>
                    <div className="file-uploader-container">
                      <input type="file" className="form-field"/>
                      <div className="file-uploader">
                        <span className="file-name">File upload</span>
                        <img src="/static/images/attachment.svg" className="icon" alt=""/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="button-holder align-center">
                <input type="submit" value="Submit" className="button"/>
                <button className="button outline">Reset all</button>
              </div>
            </div>
        </div>
    )
  }
}
