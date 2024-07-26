import React, { useState } from 'react';
import { createVendor } from '../../service/VendorService';

const AddVendor = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [upi, setUpi] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newVendor = { name, email, upi };
        await createVendor(newVendor);
        setName('');
        setEmail('');
        setUpi('');
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
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="upi">UPI</label>
                    <input type="text" className="form-control" id="upi" value={upi} onChange={(e) => setUpi(e.target.value)} placeholder="UPI" required />
                </div>
                <button type="submit" className="btn btn-primary">Add Vendor</button>
            </form>
        </div>
    );
};

export default AddVendor;
