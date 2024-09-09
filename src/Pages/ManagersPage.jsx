import React, { useEffect, useState } from 'react';
import axios from 'axios'

const ManagersPage = () => {
    const API_URL = 'http://localhost:2000/api'//Use your own API URL
    const [managers, setManagers] = useState([])

    useEffect(()=>{
        axios.get(`${API_URL}/users`)
        .then(response => {
            console.log('API Response:', response.data)
            setManagers(response.data)
        })
        .catch(error => {
            console.error('Error Fetching users',error)
        })
    })

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-2xl">
                <h1 className="text-3xl font-bold text-center mb-8">Managers</h1>
                {managers.length > 0 ? (
                    managers.map(manager => (
                        <div key={manager.id} className="bg-gray-100 p-4 mb-4 rounded-lg shadow-sm text-center">
                            <p className="text-lg font-semibold">Name: <span className="font-normal">{manager.name}</span></p>
                            <p className="text-lg font-semibold">Email: <span className="font-normal">{manager.email}</span></p>
                            <p className="text-lg font-semibold">Contacts: <span className="font-normal">{manager.contacts}</span></p>
                            <p className="text-lg font-semibold">Age: <span className="font-normal">{manager.age}</span></p>
                            <p className="text-lg font-semibold">Is Active: <span className={`font-normal ${manager.isActive ? 'text-green-500' : 'text-red-500'}`}>
                                {manager.isActive ? "Yes, Active" : "Not Active"}
                            </span></p>
                        </div>
                    ))
                ) : (
                    <div className="text-center text-gray-500">No Managers found.</div>
                )}
            </div>
        </div>
    )
}

export default ManagersPage
