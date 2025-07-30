import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PostList from './components/PostList';
import AuthorProfile from './components/AuthorProfile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/author/:id" element={<AuthorProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
