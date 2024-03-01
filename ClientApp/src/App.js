import React, { useState, useEffect } from 'react';
import AddStudentForm from './components/AddStudentForm';

const App = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetch("api/student/GetStudents")
            .then(response => response.json())
            .then(data => setStudents(data));
    }, []);

    return (
        <div className="container">
            <h1>Students</h1>
            <div className="row">
                <div className="col-sm-12">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map((student) => (
                                <tr key={student.studId}>
                                    <td>{student.studId}</td>
                                    <td>{student.studFname}</td>
                                    <td>{student.studLname}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <AddStudentForm />
            </div>
        </div>
    );
}

export default App;