import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Reaction from './Reaction';

export default function Post({ post }) {
  const [commentText, setCommentText] = useState('');

  const handleCommentSubmit = () => {
    if (commentText.trim() === '') return;
    console.log(`New comment on post ${post.id}:`, commentText);
    setCommentText('');
  };

  return (
    <div
      style={{
        backgroundColor: '#fff',
        border: '1px solid #ddd',
        borderRadius: 12,
        padding: 24,
        marginBottom: 40,
        boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}
    >
      {/* Post Title & Content */}
      <div style={{ borderBottom: '1px solid #eee', paddingBottom: 10 }}>
        <h2 style={{ color: '#222', marginBottom: 10 }}>{post.title}</h2>
        <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#444' }}>{post.content}</p>
      </div>

      {/* Author Info */}
      <div style={{ borderBottom: '1px solid #eee', paddingBottom: 10 }}>
        <strong style={{ fontSize: '14px', color: '#777' }}> Author: </strong>
        <Link to={`/author/${post.author.id}`} style={{ color: '#0056b3', textDecoration: 'none', fontWeight: 'bold' }}>
          {post.author.name}
        </Link>
      </div>

      {/* Post Reactions */}
      <div style={{ backgroundColor: '#f5faff', padding: 12, borderRadius: 8 }}>
        <h4 style={{ marginBottom: 8, color: '#0077cc' }}> Post Reactions</h4>
        <Reaction />
      </div>

      {/* Comments Section */}
      <div style={{ backgroundColor: '#fdfdfd', padding: 16, borderRadius: 8, border: '1px solid #eaeaea' }}>
        <h4 style={{ marginBottom: 12, color: '#333' }}> Comments</h4>

        {post.comments.length === 0 && <p>No comments yet.</p>}

        {post.comments.map((comment) => (
          <div
            key={comment.id}
            style={{
              borderTop: '1px solid #e0e0e0',
              paddingTop: 10,
              marginTop: 10,
              paddingLeft: 8,
            }}
          >
            <p style={{ margin: 0 }}>
              <strong>{comment.author}</strong>: {comment.text}
            </p>
            <div style={{ marginTop: 4 }}>
              <span style={{ fontSize: '14px' }}> Reactions:</span> <Reaction />
            </div>
          </div>
        ))}
      </div>

      {/* Comment Input Section */}
      <div style={{ marginTop: 10 }}>
        <h4 style={{ color: '#333' }}> Add a Comment</h4>
        <textarea
          placeholder="Type your comment here..."
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          rows={3}
          style={{
            width: '100%',
            padding: 10,
            borderRadius: 8,
            border: '1px solid #ccc',
            resize: 'vertical',
            marginTop: 8,
          }}
        />
        <button
          onClick={handleCommentSubmit}
          style={{
            marginTop: 10,
            padding: '8px 16px',
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: 6,
            cursor: 'pointer',
            fontWeight: 'bold',
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
