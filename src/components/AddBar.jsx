import React from 'react'
import { NavLink } from 'react-router-dom'

const AddBar = () => {
    return (
        <div className="flex justify-center space-x-4 p-4 bg-gray-100">
            <NavLink
                to={'/add_employee'}
                className="text-white bg-blue-500 font-semibold py-2 px-4 rounded transition duration-300"
            >
                Add Employee
            </NavLink>
            <NavLink
                to={'/add_manager'}
                className="text-white bg-blue-500 font-semibold py-2 px-4 rounded transition duration-300"
            >
                Add Manager
            </NavLink>
        </div>


    )
}

export default AddBar
