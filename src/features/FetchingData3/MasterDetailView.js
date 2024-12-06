import React, { useState, useEffect } from "react";

const MasterDetailView = () => {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => setUsers(data))
            .catch((error) => console.error("Error fetching users:", error));
    }, []);

    const fetchUserDetails = (userId) => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then((response) => response.json())
            .then((data) => setSelectedUser(data))
            .catch((error) => console.error("Error fetching user details:", error));
    };

    return (
        <div className="container mt-5">
            <h2>Master-Detail View</h2>
            <table className="table">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>
                            <button
                                className="btn btn-primary"
                                onClick={() => fetchUserDetails(user.id)}
                            >
                                View Details
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            {selectedUser && (
                <div className="mt-4">
                    <h4>Details for {selectedUser.name}</h4>
                    <p>
                        <strong>Email:</strong> {selectedUser.email}
                    </p>
                    <p>
                        <strong>Phone:</strong> {selectedUser.phone}
                    </p>
                    <p>
                        <strong>Website:</strong> {selectedUser.website}
                    </p>
                </div>
            )}
        </div>
    );
};

export default MasterDetailView;
