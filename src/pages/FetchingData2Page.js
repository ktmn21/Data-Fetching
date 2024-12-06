import React from "react";
import { Link } from "react-router-dom";

const FetchingData2Page = () => {
    return (
        <div className="container mt-5">
            <h2>Fetching Data 2 Tasks</h2>
            <div className="list-group">
                <Link to="/fetching-data-2/dynamic-fetch" className="list-group-item list-group-item-action">
                    Dynamic Data Fetch
                </Link>
                <Link to="/fetching-data-2/paginated-fetch" className="list-group-item list-group-item-action">
                    Paginated API Fetch
                </Link>
                <Link to="/fetching-data-2/searchable-data" className="list-group-item list-group-item-action">
                    Searchable API Data
                </Link>
            </div>
        </div>
    );
};

export default FetchingData2Page;
