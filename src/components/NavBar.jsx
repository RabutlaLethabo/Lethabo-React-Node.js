import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="bg-gray-800 p-4">
            <nav className="flex justify-around">
                
                <NavLink 
                    to={'/users'} 
                    className={({ isActive }) => 
                        isActive ? "text-white font-bold px-3 py-2 rounded-md bg-gray-900" : "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md"
                    }>
                    View Employees
                </NavLink>
                <NavLink 
                    to={'/managers'} 
                    className={({ isActive }) => 
                        isActive ? "text-white font-bold px-3 py-2 rounded-md bg-gray-900" : "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md"
                    }>
                    View Managers
                </NavLink>
                <NavLink
                    to={'/add'}
                    className={({ isActive }) => 
                        isActive ? "text-white font-bold px-3 py-2 rounded-md bg-gray-900" : "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md"
                    }
                >
                    Add
                </NavLink>
            </nav>
        </div>
    )
}

export default NavBar;
