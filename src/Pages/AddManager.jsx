import React, { useState } from 'react'
import AddBar from '../components/AddBar';

const AddManager = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [contacts, setContacts] = useState('');
    const [age, setAge] = useState('');
    const [isActive, setIsActive] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const HandleSubmit = async (e) =>{
        
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:2000/api/users',//Use your own API URL
                {
                    method: 'POST',
                    headers: {
                        'Content-Type' : 'application/json'
                    },
                    body: JSON.stringify({
                        name,
                        email,
                        password,
                        contacts: parseInt(contacts),
                        age: parseInt(age),
                        isActive: isActive === 'true'
                    })
                }
            );

            if(response.ok){
                setSuccess('Successfully added a new Manager!!');
                setName('');
                setAge('');
                setPassword('');
                setEmail('');
                setContacts('');
                setIsActive('');
            }else{
                setError('Failed to add a new Manager!!');
            }

        } catch (error) {
            setError('An Error has occured. Please try again.');
        }

    };
    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
            <AddBar/>
            <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Add Manager</h2>
                
                {error && <p className="text-red-500 text-center mb-4">{error}</p>}
                {success && <p className="text-green-500 text-center mb-4">{success}</p>}
                
                <form onSubmit={HandleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">Name:</label>
                        <input 
                            type='text' 
                            name='name' 
                            id='name'
                            value={name} 
                            onChange={(e) => setName(e.target.value)}
                            required 
                            placeholder='Your Name'
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">Email:</label>
                        <input 
                            type='email' 
                            name='email' 
                            id='email' 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required 
                            placeholder='Someone@gmail.com'
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="contacts">Contacts:</label>
                        <input 
                            type='text' 
                            name='contacts' 
                            id='contacts' 
                            value={contacts}
                            onChange={(e) => setContacts(e.target.value)}
                            required 
                            placeholder='0123456789'
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="age">Age:</label>
                        <input 
                            type='text' 
                            name='age' 
                            id='age' 
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            required 
                            placeholder='18'
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="isActive">Activate:</label>
                        <select 
                            name="isActive" 
                            id="isActive"
                            value={isActive}
                            onChange={(e) => setIsActive(e.target.value)}
                            required
                            className="w-full p-2 border border-gray-300 rounded-md"
                        >
                            <option value="">Select</option>
                            <option value="true">Yes</option>
                            <option value="false">Not Yet</option>
                        </select>
                    </div>
                    
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="password">Password:</label>
                        <input 
                            type='password' 
                            name='password' 
                            id='password' 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required 
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    
                    <div>
                        <button 
                            type="submit" 
                            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                        >
                            Add Employee
                        </button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default AddManager
