import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">React Tasks</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/fetching-data-1">Fetching Data 1</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/fetching-data-2">Fetching Data 2</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/fetching-data-3">Fetching Data 3</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/auth">Authorization</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
