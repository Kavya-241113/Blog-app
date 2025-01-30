// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';

// const PostPage = () => {
//   const { id } = useParams();
//   const [post, setPost] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetch(`http://localhost:5000/posts/${id}`)
//       .then(response => response.json())
//       .then(data => setPost(data));
//   }, [id]);

//   const handleDelete = () => {
//     fetch(`http://localhost:5000/posts/${id}`, {
//       method: 'DELETE',
//     })
//       .then(() => {
//         alert('Post deleted!');
//         navigate('/');
//       })
//       .catch(err => alert('Error deleting post:', err));
//   };

//   return (
//     <div>
//       {post ? (
//         <>
//           <h1>{post.title}</h1>
//           <p>{post.content}</p>
//           <button onClick={handleDelete}>Delete Post</button>
//         </>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default PostPage;
