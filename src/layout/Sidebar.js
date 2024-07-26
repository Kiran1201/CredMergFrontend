// src/Sidebar.js

import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="d-flex flex-column vh-100">
      <h3 className="text-dark text-center my-3">Menu</h3>
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link className="nav-link text-dark" to="/view-employees">
            Employee
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-dark" to="/view-vendors">
            Vendor
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-dark" to="/send-email">
            Email
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
