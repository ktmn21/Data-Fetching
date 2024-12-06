import React, { useState, useEffect } from "react";
import debounce from "lodash.debounce";

const DebouncedSearch = () => {
    const [posts, setPosts] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        if (search === "") {
            setPosts([]);
            return;
        }

        const fetchPosts = debounce(() => {
            fetch(`https://jsonplaceholder.typicode.com/posts?title_like=${search}`)
                .then((response) => response.json())
                .then((data) => setPosts(data))
                .catch((error) => console.error("Error fetching posts:", error));
        }, 300);

        fetchPosts();

        return () => fetchPosts.cancel();
    }, [search]);

    return (
        <div className="container mt-5">
            <h2>Debounced Search</h2>
            <input
                type="text"
                className="form-control mb-3"
                placeholder="Search posts by title"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
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

export default DebouncedSearch;
