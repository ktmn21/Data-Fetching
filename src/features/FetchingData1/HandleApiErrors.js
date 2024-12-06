import React, { useState } from "react";

const HandleApiErrors = () => {
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    const fetchData = () => {
        setError(null);
        fetch("https://jsonplaceholder.typicode.com/invalid-endpoint")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch data.");
                }
                return response.json();
            })
            .then((data) => setData(data))
            .catch((error) => setError(error.message));
    };

    return (
        <div className="container mt-5">
            <h2>Handle API Errors Gracefully</h2>
            <button className="btn btn-primary mb-3" onClick={fetchData}>
                Fetch Data
            </button>
            {error && <div className="alert alert-danger">{error}</div>}
            {data && <div>Data fetched successfully!</div>}
        </div>
    );
};

export default HandleApiErrors;
