import React, { useState } from "react";

const DynamicDataFetch = () => {
    const [userId, setUserId] = useState("");
    const [posts, setPosts] = useState([]);

    const fetchPosts = () => {
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
            .then((response) => response.json())
            .then((data) => setPosts(data))
            .catch((error) => console.error("Error fetching posts:", error));
    };

    return (
        <div className="container mt-5">
            <h2>Dynamic Data Fetching</h2>
            <div className="mb-3">
                <input
                    type="text"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    className="form-control"
                    placeholder="Enter User ID"
                />
            </div>
            <button className="btn btn-primary mb-3" onClick={fetchPosts}>
                Fetch Posts
            </button>
            <ul className="list-group">
                {posts.map((post) => (
                    <li className="list-group-item" key={post.id}>
                        {post.title}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DynamicDataFetch;
