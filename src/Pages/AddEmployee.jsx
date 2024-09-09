import React from 'react';
import AddBar from '../components/AddBar';

const AddEmployee = () => {
    const [name, setName] = React.useState('');
    const [employee_code, setEmployee_code] = React.useState('');
    const [salary, setSalary] = React.useState('');
    const [error, setError] = React.useState(null);
    const [success, setSuccess] = React.useState(null);

    const HandlingSubmit = async (e) => {
        e.preventDefault();

        setError(null);
        setSuccess(null);

        try {
            const response = await fetch('http://localhost:2000/api/employees/'//Use your own API URL
                , {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    employee_code,
                    salary: parseFloat(salary),
                }),
            });

            if (response.ok) {
                setSuccess('Employee added successfully.');
                setName('');
                setEmployee_code('');
                setSalary('');
            } else {
                setError('Failed to add employee. Please try again');
            }
        } catch (error) {
            setError('An Error Occurred, please try again');
        }
    };

    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
            <AddBar/>
            <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6 text-center">Add Employee</h1>
                
                {error && <p className="text-red-500 text-center mb-4">{error}</p>}
                {success && <p className="text-green-500 text-center mb-4">{success}</p>}
                
                <form onSubmit={HandlingSubmit} className="space-y-4">
                    <div>
                        <label 
                            htmlFor="name" 
                            className="block text-gray-700 font-semibold mb-2"
                        >
                            Employee Name
                        </label>
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter employee's name" 
                            required
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    
                    <div>
                        <label 
                            htmlFor="employee_code" 
                            className="block text-gray-700 font-semibold mb-2"
                        >
                            Employee Code
                        </label>
                        <input 
                            type="text" 
                            id="employee_code" 
                            name="employee_code" 
                            value={employee_code}
                            onChange={(e) => setEmployee_code(e.target.value)}
                            placeholder="Enter employee code" 
                            required
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    
                    <div>
                        <label 
                            htmlFor="salary" 
                            className="block text-gray-700 font-semibold mb-2"
                        >
                            Salary
                        </label>
                        <input 
                            type="number" 
                            id="salary" 
                            name="salary" 
                            value={salary}
                            onChange={(e) => setSalary(e.target.value)}
                            placeholder="Enter salary" 
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

    );
};

export default AddEmployee;
