import React from "react";
import { Link } from "react-router-dom";

const FetchingData3Page = () => {
    return (
        <div className="container mt-5">
            <h2>Fetching Data 3 Tasks</h2>
            <div className="list-group">
                <Link to="/fetching-data-3/fetch-with-cache" className="list-group-item list-group-item-action">
                    Fetch Data and Cache Results
                </Link>
                <Link to="/fetching-data-3/master-detail" className="list-group-item list-group-item-action">
                    Master-Detail View
                </Link>
                <Link to="/fetching-data-3/debounced-search" className="list-group-item list-group-item-action">
                    Debounced Search
                </Link>
                <Link to="/fetching-data-3/infinite-scroll" className="list-group-item list-group-item-action">
                    Infinite Scrolling
                </Link>
            </div>
        </div>
    );
};

export default FetchingData3Page;
