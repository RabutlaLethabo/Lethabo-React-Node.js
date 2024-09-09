import React, { useState } from 'react';
import axios from 'axios';

const DeleteManagerPage = () => {
    const [userId, setUserId] = useState(''); // Change to userId if you're deleting users
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!userId) {
            setError('User ID is required.');
            return;
        }

        try {
            const response = await axios.delete(`http://localhost:2000/api/users/${userId}`); // Correct endpoint
            setMessage(response.data); // Assuming response.data contains a success message
            setError('');
        } catch (err) {
            console.error(err); // Log the error for debugging
            setMessage('');
            setError(err.response?.data || 'An error occurred');
        }
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Delete Managers</h1> {/* Change text to reflect the correct entity */}
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="user_id" className="block text-gray-700 font-semibold mb-1">anager ID</label>
                    <input
                        type="text"
                        id="user_id"
                        name="user_id"
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder="Enter User ID"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-red-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                    Delete
                </button>
                {message && <p className="text-green-500 mt-4">{message}</p>}
                {error && <p className="text-red-500 mt-4">{error}</p>}
            </form>
        </div>
    );
};

export default DeleteManagerPage;
