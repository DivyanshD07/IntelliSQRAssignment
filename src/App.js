import React, { useState } from 'react';
import AddEmployeeForm from './templates/AddEmployee';
import EmployeeList from './templates/EmployeeList';
import EditEmployeeForm from './templates/EditEmployeeForm';
import './App.css';

function App() {
    const sampleData = [
        {
            "employee_id": 1,
            "name": "Atif Hussain",
            "position": "Data Analyst",
            "salary": 75000
        },
        {
            "employee_id": 2,
            "name": "Somitav Mishra",
            "position": "Business Analyst",
            "salary": 65000
        }
    ];

    const [employees, setEmployees] = useState(sampleData);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    const addEmployee = (employee) => {
        setEmployees([...employees, employee]);
    };

    const updateEmployee = (updatedEmployee) => {
        const updatedEmployees = employees.map(emp =>
            emp.employee_id === updatedEmployee.employee_id ? updatedEmployee : emp
        );
        setEmployees(updatedEmployees);
        setSelectedEmployee(null);
        setIsEditing(false);
    };

    const deleteEmployee = (employeeId) => {
        if (window.confirm(`Are you sure you want to delete ${employeeId}?`)) {
            const updatedEmployees = employees.filter(emp => emp.employee_id!== employeeId);
            setEmployees(updatedEmployees);
            setSelectedEmployee(null);
            setIsEditing(false);
        }
    };

    const editEmployee = (employee) => {
        setSelectedEmployee(employee);
        setIsEditing(true);
    };

    const cancelEdit = () => {
        setSelectedEmployee(null);
        setIsEditing(false);
    };

    return (
        <div>
            <h1 className='heading'>Employee Management - Admin Panel</h1>
            {isEditing ? (
                <EditEmployeeForm employee={selectedEmployee} updateEmployee={updateEmployee} cancelEdit={cancelEdit} />
            ) : (
                <div>
                    <AddEmployeeForm addEmployee={addEmployee} />
                    <EmployeeList employees={employees} editEmployee={editEmployee} deleteEmployee={deleteEmployee} />
                </div>
            )}
        </div>
    );
}

export default App;
