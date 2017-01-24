import React from 'react';
export default class AccountStatus extends React.Component {
  render() {
    return (
        <aside className="right-content">
          <div className="wrapper">
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

            <div className="panel">
              <table className="table">
                <thead>
                  <tr>
                    <th> <input type="checkbox" className="checkbox"/></th>
                    <th>CustID</th>
                    <th>Request initiated</th>
                    <th>Last attempted</th>
                    <th>Status</th>
                    <th>Status detail</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td> <input type="checkbox" className="checkbox"/></td>
                    <td>201343</td>
                    <td>07-02-2017 11:50:00</td>
                    <td>09-02-2017 11:50:00</td>
                    <td>KYC issues</td>
                    <td>400: Dob missing</td>
                  </tr>

                  <tr>
                    <td> <input type="checkbox" className="checkbox"/> </td>
                    <td>201343</td>
                    <td>07-02-2017 11:50:00</td>
                    <td>09-02-2017 11:50:00</td>
                    <td>KYC issues</td>
                    <td>400: Dob missing</td>
                  </tr>

                  <tr>
                    <td> <input type="checkbox" className="checkbox"/> </td>
                    <td>201343</td>
                    <td>07-02-2017 11:50:00</td>
                    <td>09-02-2017 11:50:00</td>
                    <td>KYC issues</td>
                    <td>400: Dob missing</td>
                  </tr>

                  <tr>
                    <td> <input type="checkbox" className="checkbox"/> </td>
                    <td>201343</td>
                    <td>07-02-2017 11:50:00</td>
                    <td>09-02-2017 11:50:00</td>
                    <td>KYC issues</td>
                    <td>400: Dob missing</td>
                  </tr>

                  <tr>
                    <td> <input type="checkbox" className="checkbox"/> </td>
                    <td>201343</td>
                    <td>07-02-2017 11:50:00</td>
                    <td>09-02-2017 11:50:00</td>
                    <td>KYC issues</td>
                    <td>400: Dob missing</td>
                  </tr>

                  <tr>
                    <td> <input type="checkbox" className="checkbox"/> </td>
                    <td>201343</td>
                    <td>07-02-2017 11:50:00</td>
                    <td>09-02-2017 11:50:00</td>
                    <td>KYC issues</td>
                    <td>400: Dob missing</td>
                  </tr>

                  <tr>
                    <td> <input type="checkbox" className="checkbox"/> </td>
                    <td>201343</td>
                    <td>07-02-2017 11:50:00</td>
                    <td>09-02-2017 11:50:00</td>
                    <td>KYC issues</td>
                    <td>400: Dob missing</td>
                  </tr>

                  <tr>
                    <td> <input type="checkbox" className="checkbox"/> </td>
                    <td>201343</td>
                    <td>07-02-2017 11:50:00</td>
                    <td>09-02-2017 11:50:00</td>
                    <td>KYC issues</td>
                    <td>400: Dob missing</td>
                  </tr>
                </tbody>
              </table>

              <div className="button-holder align-center">
                <button className="button">Download</button>	
                <button className="button outline">Retry</button>
              </div>
            </div>
          </div>

          <div className="modal-container">
            <div className="overlay"></div>
            <div className="modal small">
              <span className="close">&times;</span>
              <div className="modal-head"><h3>Case history : 233352 / Ashish singh</h3> </div>
              <div className="modal-content">
                <table className="table">
                  <thead>
                    <tr>
                      <th>S.no</th>
                      <th>Date</th>
                      <th>User</th>
                      <th>Status</th>
                      <th>Status detail</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>07-02-2017 11:50:00</td>
                      <td>Customer</td>
                      <td>KYC issues</td>
                      <td>400: Dob missing</td>
                    </tr>

                    <tr>
                      <td>1</td>
                      <td>07-02-2017 11:50:00</td>
                      <td>Rahul</td>
                      <td>KYC issues</td>
                      <td>400: Dob missing</td>
                    </tr>

                    <tr>
                      <td>1</td>
                      <td>07-02-2017 11:50:00</td>
                      <td>Mukesh</td>
                      <td>KYC issues</td>
                      <td>400: Dob missing</td>
                    </tr>
                  </tbody>	
                </table>
              </div>
            </div>
          </div>
        </aside>
    )
  }
}
