
// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';


// const EditPost = () => {
//   const { id } = useParams();
//   const [post, setPost] = useState({ title: '', body: '' });
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
//       .then((response) => response.json())
//       .then((data) => setPost(data))
//       .catch((error) => console.error('Error fetching post:', error));
//   }, [id]);

//   const handleUpdate = (e) => {
//     e.preventDefault();

//     fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(post),
//     })
//       .then((response) => response.json())
//       .then(() => {
//         alert('Post updated successfully');
//         navigate('/');
//       })
//       .catch((error) => console.error('Error updating post:', error));
//   };

//   return (
//     <div className="container mt-5" style={{ maxWidth: '600px' }}>
//       <h1 className="text-center mb-4">Edit Post</h1>
//       <form onSubmit={handleUpdate}>
//         <div className="mb-3">
//           <label className="form-label">Title:</label>
//           <input
//             type="text"
//             className="form-control"
//             value={post.title}
//             onChange={(e) => setPost({ ...post, title: e.target.value })}
//             required
//             placeholder="Enter post title"
//           />
//         </div>
//         <div className="mb-3">
//           <label className="form-label">Body:</label>
//           <textarea
//             className="form-control"
//             value={post.body}
//             onChange={(e) => setPost({ ...post, body: e.target.value })}
//             required
//             rows={5}
//             placeholder="Enter post body"
//           />
//         </div>
//         <button type="submit" className="btn btn-success w-100">
//           Update Post
//         </button>
//       </form>
//     </div>
//   );
// };

// export default EditPost;











import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditPost = () => {
  const { id } = useParams();  // This captures the id from the URL
  const [post, setPost] = useState({ title: '', body: '' });
  const navigate = useNavigate();

  // Log the id to ensure it's being captured correctly
  console.log('Fetched post ID:', id);

  useEffect(() => {
    if (id) {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => {
          if (!response.ok) throw new Error('Post not found');
          return response.json();
        })
        .then((data) => setPost(data))
        .catch((error) => {
          console.error('Error fetching post:', error);
          alert('Post not found! Redirecting to home.');
          navigate('/');  // Redirect to home if post not found
        });
    }
  }, [id, navigate]);

  const handleUpdate = (e) => {
    e.preventDefault();

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(post),
    })
      .then((response) => response.json())
      .then(() => {
        alert('Post updated successfully');
        navigate('/');
      })
      .catch((error) => console.error('Error updating post:', error));
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '600px' }}>
      <h1 className="text-center mb-4">Edit Post</h1>
      <form onSubmit={handleUpdate}>
        <div className="mb-3">
          <label className="form-label">Title:</label>
          <input
            type="text"
            className="form-control"
            value={post.title}
            onChange={(e) => setPost({ ...post, title: e.target.value })}
            required
            placeholder="Enter post title"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Body:</label>
          <textarea
            className="form-control"
            value={post.body}
            onChange={(e) => setPost({ ...post, body: e.target.value })}
            required
            rows={5}
            placeholder="Enter post body"
          />
        </div>
        <button type="submit" className="btn btn-success w-100">
          Update Post
        </button>
      </form>
    </div>
  );
};

export default EditPost;
