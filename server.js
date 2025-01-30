const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // Allow cross-origin requests
app.use(express.json()); // Parse JSON request body

// Route for handling post requests
app.post('/posts', (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ error: 'Title and content are required' });
  }

  // Example response (replace this with DB logic if needed)
  res.status(201).json({ message: 'Post created successfully', post: { title, content } });
});

app.listen(5000, () => console.log('Server is running on http://localhost:5000'));
