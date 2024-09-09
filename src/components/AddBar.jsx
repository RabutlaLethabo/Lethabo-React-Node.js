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
            <NavLink
                to={'/update_employee'}
                className="text-white bg-orange-500 font-semibold py-2 px-4 rounded transition duration-300"
            >
                Update Employee
            </NavLink>

            <NavLink
                to={'/update_manager'}
                className="text-white bg-orange-500 font-semibold py-2 px-4 rounded transition duration-300"
            >
                Update Manager
            </NavLink>

            <NavLink
                to={'/delete_employee'}
                className="text-white bg-red-500 font-semibold py-2 px-4 rounded transition duration-300"
            >
                Delete Employee
            </NavLink>
            <NavLink
                to={'/delete_manager'}
                className="text-white bg-red-500 font-semibold py-2 px-4 rounded transition duration-300"
            >
                Delete Manager
            </NavLink>
        </div>


    )
}

export default AddBar
