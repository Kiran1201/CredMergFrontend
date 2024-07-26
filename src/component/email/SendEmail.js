import React, { useState, useEffect } from 'react';
import { getAllVendors } from '../../service/VendorService';
import { sendEmailToVendors } from '../../service/EmailService';

const SendEmail = () => {
    const [vendors, setVendors] = useState([]);
    const [selectedVendors, setSelectedVendors] = useState([]);

    useEffect(() => {
        const fetchVendors = async () => {
            try {
                const response = await getAllVendors();
                setVendors(response);
            } catch (error) {
                console.error('Error fetching vendors:', error);
            }
        };

        fetchVendors();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await sendEmailToVendors(selectedVendors);
        console.log('Email sent Successfully');
        setSelectedVendors([]);
    };

    const handleVendorChange = (vendor, isChecked) => {
        if (isChecked) {
            setSelectedVendors([...selectedVendors, vendor]);
        } 
    };

    return (
        <div className="col-md-6 offset-md-3 border rounded  mt-2 shadow">
            <h4 className="text-dark m-2">List Of Emails</h4>
            <form onSubmit={handleSubmit}>
                <table className="table table-light table-striped">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {vendors.map((vendor) => (
                            <tr key={vendor.id}>
                                <td>
                                    <input
                                        type="checkbox"
                                        onChange={(e) => handleVendorChange(vendor, e.target.checked)}
                                    />
                                </td>
                                <td>{vendor.name}</td>
                                <td>{vendor.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button type="submit" className="btn btn-primary m-2">Send Emails</button>
            </form>
        </div>

    );
};

export default SendEmail;
