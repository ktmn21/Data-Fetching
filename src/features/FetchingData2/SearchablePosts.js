import React, { useState, useEffect } from "react";

const SearchablePosts = () => {
    const [posts, setPosts] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((data) => setPosts(data))
            .catch((error) => console.error("Error fetching posts:", error));
    }, []);

    const filteredPosts = posts.filter((post) =>
        post.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="container mt-5">
            <h2>Searchable Posts</h2>
            <input
                type="text"
                className="form-control mb-3"
                placeholder="Search by title"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <ul className="list-group">
                {filteredPosts.map((post) => (
                    <li className="list-group-item" key={post.id}>
                        {post.title}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SearchablePosts;
