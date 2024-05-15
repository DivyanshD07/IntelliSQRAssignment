import React, { useState } from 'react';
import './add.css'

const EditEmployeeForm = ({ employee, updateEmployee, cancelEdit }) => {
    const [name, setName] = useState(employee.name);
    const [position, setPosition] = useState(employee.position);
    const [salary, setSalary] = useState(employee.salary);

    const handleSubmit = e => {
        e.preventDefault();
        if (!name || !position || !salary) return;
        updateEmployee({ ...employee, name, position, salary });
    };

    return (
        <div className='edit-section'>
            <h2>Edit Employee</h2>
            <form onSubmit={handleSubmit}>
                <div className='form'>
                    <div className='form-line'>
                        <div>Name</div>
                        <input type="text" value={name} onChange={e => setName(e.target.value)} required className='input' /><br />
                    </div>
                    <div className='form-line'>
                        <div>Position</div>
                        <input type="text" value={position} onChange={e => setPosition(e.target.value)} required className='input' /><br />
                    </div>
                    <div className='form-line'>
                        <div>Salary</div>
                        <input type="number" value={salary} onChange={e => setSalary(e.target.value)} required className='input' /><br />
                    </div>
                    <button className='btn' type="submit">Update Employee</button>
                    <button className='btn' onClick={cancelEdit}>Cancel</button>
                </div>
            </form>
        </div>
    );
};

export default EditEmployeeForm;
