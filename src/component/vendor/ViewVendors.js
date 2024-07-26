import React, { useEffect, useState } from 'react';
import { getAllVendors } from '../../service/VendorService';
import { Link } from 'react-router-dom';

const ViewVendors = () => {
    const [vendors, setVendors] = useState([]);

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

    return (
        <div className="container">
            <div className="d-flex justify-content-end">
                <Link type="button" className="btn btn-info" to={`/add-vendor`}>AddVendor</Link>
            </div>
            <h4 className="text-dark">List Of Vendors</h4>
            <table className="table table-light table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>UPI</th>
                    </tr>
                </thead>
                <tbody>
                    {vendors.map((vendor) => (
                        <tr key={vendor.id}>
                            <td>{vendor.name}</td>
                            <td>{vendor.email}</td>
                            <td>{vendor.upi}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ViewVendors;
