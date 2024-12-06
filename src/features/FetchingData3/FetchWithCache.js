import React, { useState, useEffect, useRef } from "react";

const FetchWithCache = () => {
    const [users, setUsers] = useState([]);
    const cache = useRef({});

    const fetchData = () => {
        if (cache.current.users) {
            setUsers(cache.current.users);
        } else {
            fetch("https://jsonplaceholder.typicode.com/users")
                .then((response) => response.json())
                .then((data) => {
                    cache.current.users = data;
                    setUsers(data);
                })
                .catch((error) => console.error("Error fetching users:", error));
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="container mt-5">
            <h2>Fetch Data and Cache Results</h2>
            <ul className="list-group">
                {users.map((user) => (
                    <li className="list-group-item" key={user.id}>
                        {user.name} - {user.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FetchWithCache;
