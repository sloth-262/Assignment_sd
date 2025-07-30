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
        backgroundColor: '#fdfdfd',
        border: '1px solid #ddd',
        borderRadius: '12px',
        padding: '24px',
        marginBottom: '40px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.05)',
      }}
    >
      {/* Post Title & Content */}
      <div
        style={{
          backgroundColor: '#f7f7f7',
          borderRadius: '8px',
          padding: '16px',
          marginBottom: '20px',
        }}
      >
        <h2 style={{ color: '#2c3e50' }}>{post.title}</h2>
        <p style={{ color: '#4d4d4d', lineHeight: '1.6' }}>{post.content}</p>
      </div>

      {/* Author Info */}
      <div
        style={{
          backgroundColor: '#eef1f5',
          borderRadius: '8px',
          padding: '12px 16px',
          marginBottom: '20px',
        }}
      >
        <strong style={{ color: '#555' }}>Author: </strong>
        <Link
          to={`/author/${post.author.id}`}
          style={{
            color: '#1a73e8',
            fontWeight: 'bold',
            textDecoration: 'none',
          }}
        >
          {post.author.name}
        </Link>
      </div>

      {/* Post Reactions */}
      <div
        style={{
          backgroundColor: '#f0f4f8',
          borderRadius: '8px',
          padding: '12px 16px',
          marginBottom: '20px',
        }}
      >
        <h4 style={{ color: '#333', marginBottom: 8 }}>Post Reactions</h4>
        <Reaction />
      </div>

      {/* Comments */}
      <div
        style={{
          backgroundColor: '#f8f9fa',
          borderRadius: '8px',
          padding: '16px',
          marginBottom: '20px',
        }}
      >
        <h4 style={{ marginBottom: 10, color: '#333' }}>Comments</h4>

        {post.comments.length === 0 && <p style={{ color: '#666' }}>No comments yet.</p>}

        {post.comments.map((comment) => (
          <div
            key={comment.id}
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid #e0e0e0',
              borderRadius: '6px',
              padding: '10px',
              marginTop: '10px',
            }}
          >
            <p style={{ margin: 0 }}>
              <strong>{comment.author}</strong>: {comment.text}
            </p>
            <div style={{ marginTop: 6 }}>
              <span style={{ fontSize: '14px' }}>Reactions:</span> <Reaction />
            </div>
          </div>
        ))}
      </div>

      {/* Comment Input */}
      <div
        style={{
          backgroundColor: '#f7f7f7',
          borderRadius: '8px',
          padding: '16px',
        }}
      >
        <h4 style={{ marginBottom: 10, color: '#333' }}>Add a Comment</h4>
        <textarea
          placeholder="Write your comment..."
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          rows={3}
          style={{
            width: '100%',
            padding: '10px',
            borderRadius: '6px',
            border: '1px solid #ccc',
            resize: 'vertical',
            marginBottom: '10px',
          }}
        />
        <button
          onClick={handleCommentSubmit}
          style={{
            padding: '8px 16px',
            backgroundColor: '#2c7be5',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
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
