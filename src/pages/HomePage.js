import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div className="container text-center mt-5">
            <h1>React Tasks</h1>
            <p>Select a category to explore:</p>
            <div className="list-group">
                <Link to="/fetching-data-1" className="list-group-item list-group-item-action">Fetching Data 1</Link>
                <Link to="/fetching-data-2" className="list-group-item list-group-item-action">Fetching Data 2</Link>
                <Link to="/fetching-data-3" className="list-group-item list-group-item-action">Fetching Data 3</Link>
                <Link to="/auth" className="list-group-item list-group-item-action">Authorization</Link>
            </div>
        </div>
    );
};

export default HomePage;
