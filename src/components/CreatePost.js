// import React, { useState } from 'react';

// const CreatePost = () => {
//   const [title, setTitle] = useState('');
//   const [body, setBody] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const newPost = { title, body };

//     fetch('https://jsonplaceholder.typicode.com/posts', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(newPost),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         alert('Post created successfully');
//         console.log('Created Post:', data);
//         setTitle('');
//         setBody('');
//       })
//       .catch((error) => {
//         console.error('Error creating post:', error);
//       });
//   };

//   return (
//     <div style={{ maxWidth: '500px', margin: '0 auto', padding: '20px' }}>
//       <h1>Create a New Post</h1>
//       <form onSubmit={handleSubmit}>
//         <div style={{ marginBottom: '10px' }}>
//           <label style={{ display: 'block', marginBottom: '5px' }}>Title:</label>
//           <input
//             type="text"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             required
//             style={{ width: '100%', padding: '8px', borderRadius: '4px' }}
//           />
//         </div>
//         <div style={{ marginBottom: '10px' }}>
//           <label style={{ display: 'block', marginBottom: '5px' }}>Body:</label>
//           <textarea
//             value={body}
//             onChange={(e) => setBody(e.target.value)}
//             required
//             rows={5}
//             style={{ width: '100%', padding: '8px', borderRadius: '4px' }}
//           />
//         </div>
//         <button type="submit" style={{ padding: '10px 20px', cursor: 'pointer' }}>
//           Create Post
//         </button>
//       </form>
//     </div>
//   );
// };

// export default CreatePost;










import React, { useState } from 'react';
 // Bootstrap import

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = { title, body };

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPost),
    })
      .then((response) => response.json())
      .then((data) => {
        alert('Post created successfully');
        console.log('Created Post:', data);
        setTitle('');
        setBody('');
      })
      .catch((error) => {
        console.error('Error creating post:', error);
      });
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '600px' }}>
      <h1 className="text-center mb-4">Create a New Post</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
            placeholder="Enter post title"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Body:</label>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="form-control"
            rows={5}
            placeholder="Enter post body"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Create Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;

