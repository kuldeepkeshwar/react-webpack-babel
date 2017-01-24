import React from 'react';
export default class AccountDetailModal extends React.Component {
  render() {
    return (
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
    )
  }
}
