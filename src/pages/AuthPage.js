import React from "react";
import { Link } from "react-router-dom";

const AuthPage = () => {
    return (
        <div className="container mt-5">
            <h2 className="text-center">Authentication</h2>
            <div className="list-group">
                <Link to="/auth/login" className="list-group-item list-group-item-action">
                    Login
                </Link>
                <Link to="/auth/register" className="list-group-item list-group-item-action">
                    Register
                </Link>
            </div>
        </div>
    );
};

export default AuthPage;
