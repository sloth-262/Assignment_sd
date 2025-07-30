import React, { useState } from 'react';
import postsData from '../data/posts';
import Post from './Posts';
import Pagination from './Pagination';

const POSTS_PER_PAGE = 2;

export default function PostList() {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(postsData.length / POSTS_PER_PAGE);

  const start = (page - 1) * POSTS_PER_PAGE;
  const currentPosts = postsData.slice(start, start + POSTS_PER_PAGE);

  return (
    <div style={{ padding: 20 }}>
      <h1>Blog Posts</h1>
      {currentPosts.map(post => (
        <Post key={post.id} post={post} />
      ))}
      <Pagination totalPages={totalPages} currentPage={page} onPageChange={setPage} />
    </div>
  );
}
