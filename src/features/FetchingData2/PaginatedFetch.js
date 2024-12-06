import React, { useState, useEffect } from "react";

const PaginatedFetch = () => {
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => setUsers(data))
            .catch((error) => console.error("Error fetching users:", error));
    }, []);

    const usersPerPage = 2;
    const startIndex = (page - 1) * usersPerPage;
    const displayedUsers = users.slice(startIndex, startIndex + usersPerPage);

    return (
        <div className="container mt-5">
            <h2>Paginated Fetch</h2>
            <ul className="list-group">
                {displayedUsers.map((user) => (
                    <li className="list-group-item" key={user.id}>
                        {user.name} - {user.email}
                    </li>
                ))}
            </ul>
            <div className="mt-3">
                <button
                    className="btn btn-secondary me-2"
                    onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                    disabled={page === 1}
                >
                    Previous
                </button>
                <button
                    className="btn btn-secondary"
                    onClick={() =>
                        setPage((prev) => (page * usersPerPage < users.length ? prev + 1 : prev))
                    }
                    disabled={page * usersPerPage >= users.length}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default PaginatedFetch;
