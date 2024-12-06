import React from "react";
import { Link } from "react-router-dom";

const FetchingData1Page = () => {
    return (
        <div className="container mt-5">
            <h2>Fetching Data 1 Tasks</h2>
            <div className="list-group">
                <Link to="/fetching-data-1/users" className="list-group-item list-group-item-action">Fetch and Display User Data</Link>
                <Link to="/fetching-data-1/loading-state" className="list-group-item list-group-item-action">Fetch Data and Loading State</Link>
                <Link to="/fetching-data-1/error-handling" className="list-group-item list-group-item-action">Handle API Errors Gracefully</Link>
            </div>
        </div>
    );
};

export default FetchingData1Page;
