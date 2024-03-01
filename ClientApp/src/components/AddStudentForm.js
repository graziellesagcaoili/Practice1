import React, { useState } from 'react';

function AddStudentForm() {
    // Define the state for the student form
    const [student, setStudent] = useState({
        StudFName: '',
        StudLName: '',
        Status: ''
    });

    // Handle form field changes
    function handleChange(event) {
        const { name, value } = event.target;
        setStudent(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    // Handle form submission
    function handleSubmit(event) {
        event.preventDefault();
        // Call the API to insert a new student
        insertStudent(student);
    }

    // Function to insert a student by sending a POST request to the server
    function insertStudent(studentData) {
        console.log(studentData);
        fetch("api/student/InsertStudent", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(studentData)
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    response.json().then(json => console.error('Error response:', json));
                    throw new Error('Something went wrong');
                }
            })
            .then(data => {
                console.log('Student added:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    // The form for adding a student
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="StudFName"
                value={student.STUD_FNAME}
                onChange={handleChange}
                placeholder="First Name"
            />
            <input
                type="text"
                name="StudLName"
                value={student.STUD_LNAME}
                onChange={handleChange}
                placeholder="Last Name"
            />
            <select
                name="Status"
                value={student.Status}
                onChange={handleChange}
            >
                <option value="" disabled>Select Status</option>
                <option value="0">Inactive</option>
                <option value="1">Active</option>
            </select>
            <button type="submit">Add Student</button>
        </form>
    );
}

export default AddStudentForm;
