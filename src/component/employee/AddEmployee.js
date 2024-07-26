import React, { useState } from 'react';
import { createEmployee } from '../../service/EmployeeService';

const AddEmployee = () => {
  const [name, setName] = useState('');
  const [designation, setDesignation] = useState('');
  const [ctc, setCtc] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newEmployee = { name, designation, ctc, email };
    await createEmployee(newEmployee);
    setName('');
    setDesignation('');
    setCtc('');
    setEmail('');
  };

  return (
    <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
      <h3>Add Employee</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="designation">Designation</label>
          <input type="text" className="form-control" id="designation" value={designation} onChange={(e) => setDesignation(e.target.value)} placeholder="Designation" required />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="ctc">CTC</label>
          <input type="number" className="form-control" id="ctc" value={ctc} onChange={(e) => setCtc(e.target.value)} placeholder="CTC" required />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="email">Email</label>
          <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        </div>
        <button type="submit" className="btn btn-primary">Add Employee</button>
      </form>
    </div>
  );
};

export default AddEmployee;