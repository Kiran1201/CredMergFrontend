
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { getAllEmployees } from '../../service/EmployeeService';

const ViewEmployees = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      const response = await getAllEmployees();
      setEmployees(response.data);
    };

    fetchEmployees();
  }, []);

  return (
    <div className="container">
      <div className="d-flex justify-content-end">
        <Link type="button" className="btn btn-info" to={`/add-employee`}>AddEmployee</Link>
      </div>
      <h4 className="text-dark">List Of Employees</h4>
      <table className="table table-light table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Designation</th>
            <th>CTC</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.designation}</td>
              <td>{employee.ctc}</td>
              <td>{employee.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewEmployees;
