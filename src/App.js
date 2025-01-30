import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage.js';
import PostList from './components/PostsList.js';
import CreatePost from './components/CreatePost.js';
import EditPost from './components/EditPost.js'; 
const App = () => {
  return (
    <Router>
      <div>
        <Routes>

        <Route path="/" element={<PostList />} />      
        <Route path="/create" element={<CreatePost />} />
        {/* <Route path="/edit/:id" element={<EditPost />} /> */}
        <Route path="/edit/:id" element={<EditPost />} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;
