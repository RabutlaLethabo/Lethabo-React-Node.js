import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UsersPage = () => {
    const API_URL = 'http://localhost:2000/api'//Use your own API URL
    const [employees, setEmployees] = useState([]);
    
    useEffect(() => {
        axios.get(`${API_URL}/employees`)
            .then(response => {
                console.log('API Response:', response.data); // Verify the data structure
                setEmployees(response.data); // Correctly set the data
            })
            .catch(error => {
                console.error('Error occurred fetching the data', error);
            });
    }, []);

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-6 bg-white shadow-md rounded-lg">
                <h1 className="text-3xl font-bold mb-6 text-center">Employees</h1>
                {employees.length > 0 ? (
                    employees.map(employee => (
                        <div key={employee.id} className="mb-4 p-4 bg-gray-50 shadow-md rounded-md">
                            <p className="text-xl font-semibold text-gray-800 text-center">Name: {employee.name}</p>
                            <p className="text-gray-600 text-center">Employee Code: {employee.employee_code}</p>
                            <p className="text-gray-600 text-center">
                                Salary: <span className="font-semibold text-green-600">R{employee.salary}</span>
                            </p>
                        </div>
                    ))
                ) : (
                    <div className="text-center text-lg text-gray-500">No employees found.</div>
                )}
            </div>
        </div>
    );
}

export default UsersPage;
