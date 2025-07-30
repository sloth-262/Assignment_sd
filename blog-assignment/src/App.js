import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import posts from "./data/posts";
import Post from "./components/post";
import AuthorProfile from "./components/AuthorProfile";
import Pagination from "./components/Pagination";

function HomePage() {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 2;

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = posts.slice(indexOfFirst, indexOfLast);

  return (
    <div style={{ padding: 20 }}>
      <h1>Post Feed</h1>
      {currentPosts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(posts.length / postsPerPage)}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/author/:id" element={<AuthorProfile />} />
      </Routes>
    </Router>
  );
}
