import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UserPage = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            const token = localStorage.getItem("token");

            if (!token) {
                navigate("/auth/login"); // Redirect to login if no token is found
                return;
            }

            try {
                const response = await axios.get("https://reqres.in/api/users/2", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setUser(response.data.data);
            } catch (err) {
                console.error("Error fetching user data:", err);
            }
        };

        fetchUserData();
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/auth/login");
    };

    if (!user) {
        return <div className="container mt-5">Loading user data...</div>;
    }

    return (
        <div className="container mt-5">
            <h2 className="text-center">User Information</h2>
            <div className="text-center">
                <img
                    src={user.avatar}
                    alt="User Avatar"
                    className="rounded-circle mb-3"
                    style={{ width: "150px", height: "150px" }}
                />
                <h4>{user.first_name} {user.last_name}</h4>
                <p>{user.email}</p>
                <button className="btn btn-danger" onClick={handleLogout}>
                    Logout
                </button>
            </div>
        </div>
    );
};

export default UserPage;
