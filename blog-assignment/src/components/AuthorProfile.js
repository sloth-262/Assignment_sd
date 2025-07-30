import React from 'react';
import { useParams } from 'react-router-dom';

export default function AuthorProfile() {
  const { id } = useParams();

  return (
    <div
      style={{
        padding: '30px',
        maxWidth: '600px',
        margin: '0 auto',
        backgroundColor: '#fff',
        borderRadius: 12,
        boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
        textAlign: 'center',
      }}
    >
      <h2>👤 Author Profile</h2>
      <p>Welcome to author page with ID: <strong>{id}</strong></p>
      <p>This is a placeholder. You can add author bio, posts, etc. here.</p>
    </div>
  );
}
