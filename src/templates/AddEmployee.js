import React, { useState } from 'react';
import './add.css';

function AddEmployee({ addEmployee }) {
    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [salary, setSalary] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addEmployee({ name, position, salary });
        setName('');
        setPosition('');
        setSalary('');
    };

    return (
        <div className='add'>
            <h2 className='font-bold'>Add Employee</h2>
            <form onSubmit={handleSubmit}>
                <div className='form'>
                    <div className='form-line'>
                        <div>Name</div>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required className='input' />
                    </div>

                    <div className='form-line'>
                        <div>Position</div>
                        <input type="text" value={position} onChange={(e) => setPosition(e.target.value)} required className='input' />
                    </div>

                    <div className='form-line'>
                        <div>Salary</div>
                        <input type="number" value={salary} onChange={(e) => setSalary(e.target.value)} required className='input' />
                    </div>
                        <button className='btn' type="submit">Add Employee</button>
                </div>
            </form>
        </div>
    );
}

export default AddEmployee;
