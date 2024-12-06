import React, { useState, useEffect } from "react";

const FetchWithLoading = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((data) => {
                setPosts(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching posts:", error);
                setLoading(false);
            });
    }, []);

    return (
        <div className="container mt-5">
            <h2>Fetch Data and Loading State</h2>
            {loading ? (
                <div className="spinner-border text-primary" role="status"></div>
            ) : (
                <ul className="list-group">
                    {posts.map((post) => (
                        <li className="list-group-item" key={post.id}>
                            {post.title}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default FetchWithLoading;
