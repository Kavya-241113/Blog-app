import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [posts, setPosts] = useState([]);


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data.slice(0, 10))) // Limit to 10 posts for display
      .catch(error => console.error('Fetch error:', error));
  }, []);
  
  return (
    <div>
      <h1>Blog Posts</h1>
      <Link to="/create">Create a New Post</Link>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
            <Link to={`/edit/${post.id}`}>Edit</Link> {/* Edit link */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
