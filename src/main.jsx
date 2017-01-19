import React from 'react';
import {Link} from 'react-router';
export const Main = ({ children }) => (
  <div>
    <h1>APP!</h1>
    <ul>
      <li><Link to="/login" >/Login</Link></li>
      <li><Link to="/list" >/ List</Link></li>
      <li><Link to="/" >/ Home</Link></li>
    </ul>
    {children}
  </div>
)