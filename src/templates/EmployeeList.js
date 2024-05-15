import React from 'react';
import './add.css';

const EmployeeList = ({ employees, editEmployee, deleteEmployee }) => {
    return (
        <div className='employee-list'>
            <h2>Employee List</h2>
            <table>
                <thead className='list-header'>
                    <tr>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Salary</th>
                        <th>Actions</th> 
                    </tr>
                </thead>
                <tbody className='list-body'>
                    {employees.map(employee => (
                        <tr key={employee.employee_id}>
                            <td>{employee.name}</td>
                            <td>{employee.position}</td>
                            <td>{employee.salary}</td>
                            <td>
                                <button className='btn-action' onClick={() => editEmployee(employee)}>Edit</button>
                                <button className='btn-action' onClick={() => deleteEmployee(employee.employee_id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EmployeeList;
