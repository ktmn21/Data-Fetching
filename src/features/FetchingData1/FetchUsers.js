import React, { useEffect, useState } from "react";
import axios from "axios";

const FetchUsers = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                setUsers(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching users:", error);
                setLoading(false);
            });
    }, []);

    return (
        <div className="container mt-5">
            <h2>Fetch and Display User Data</h2>
            {loading ? <div className="spinner-border text-primary" role="status"></div> : (
                <ul className="list-group">
                    {users.map((user) => (
                        <li className="list-group-item" key={user.id}>
                            {user.name} - {user.email}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default FetchUsers;
