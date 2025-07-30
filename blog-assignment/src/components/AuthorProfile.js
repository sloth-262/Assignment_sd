import React from 'react';
import { useParams, Link } from 'react-router-dom';

const dummyAuthors = {
  1: {
    name: 'John Doe',
    bio: 'John is a passionate writer who loves sharing knowledge on web development.',
  },
  2: {
    name: 'Jane Smith',
    bio: 'Jane is a frontend engineer and part-time blogger who enjoys React and UI design.',
  },
};

export default function AuthorProfile() {
  const { id } = useParams();
  const author = dummyAuthors[id];

  if (!author) {
    return (
      <div style={styles.container}>
        <div style={styles.card}>
          <h2 style={styles.heading}>Author Not Found</h2>
          <Link to="/" style={styles.link}>← Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>{author.name}</h2>
        <p style={styles.bio}>{author.bio}</p>
        <Link to="/" style={styles.link}>← Back to Home</Link>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '50px 20px',
    display: 'flex',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#fdfdfd',
    padding: '30px',
    borderRadius: '12px',
    border: '1px solid #ddd',
    maxWidth: '600px',
    width: '100%',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
  },
  heading: {
    fontSize: '28px',
    color: '#2c3e50',
    marginBottom: '16px',
  },
  bio: {
    fontSize: '16px',
    color: '#4a4a4a',
    lineHeight: '1.6',
    marginBottom: '24px',
  },
  link: {
    color: '#1a73e8',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
};
