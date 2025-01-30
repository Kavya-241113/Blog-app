

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const PostsList = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data.slice(0, 10))) // Limiting to 10 posts for demo
      .catch((error) => console.error('Error fetching posts:', error));
  }, []);

  const handleDelete = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        alert('Post deleted successfully');
        setPosts(posts.filter(post => post.id !== id));
      })
      .catch((error) => console.error('Error deleting post:', error));
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Posts List</h1>
      <div className="row">
        {posts.map((post) => (
          <div key={post.id} className="col-md-6 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.body}</p>
                <button
                  className="btn btn-primary me-2"
                  onClick={() => navigate(`/edit/${post.id}`)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(post.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostsList;
