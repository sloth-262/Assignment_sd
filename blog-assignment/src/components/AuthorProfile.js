import React from 'react';
import { useParams, Link } from 'react-router-dom';

const dummyAuthors = {
  1: {
    name: 'Partha sharma',
    bio: 'dept of CSE, AUST',
    location: 'Barishal',
    postsCount: 12,
    interests: ['sleep', 'kacchi', 'Biriani', 'Tea'],
    profileImage: 'https://via.placeholder.com/120x120.png?text=JD'
  },
  2: {
    name: 'Aaheed Bin Ashraf',
    bio: 'dept of CSE, AUST',
    location: 'Rangpur',
    postsCount: 8,
    interests: ['Alur vorta', 'Vat', 'kichu na'],
    profileImage: 'https://via.placeholder.com/120x120.png?text=JS'
  },
  3: {
    name: 'Rakey Thouhid',
    bio: 'dept of CSE, AUST',
    location: 'Maymansing',
    postsCount: 8,
    interests: ['Alur vorta', 'Vat', 'kichu na'],
    profileImage: 'https://via.placeholder.com/120x120.png?text=JS'
  },
  4: {
    name: 'Partha Sharma',
    bio: 'dept of CSE, AUST',
    location: 'Barishal',
    postsCount: 8,
    interests: ['Alur vorta', 'Vat', 'kichu na'],
    profileImage: 'https://via.placeholder.com/120x120.png?text=JS'
  }
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
        <img src={author.profileImage} alt={author.name} style={styles.image} />
        <h2 style={styles.name}>{author.name}</h2>
        <p style={styles.bio}>{author.bio}</p>
        <p><strong>📍 Location:</strong> {author.location}</p>
        <p><strong>📝 Posts:</strong> {author.postsCount}</p>
        <p><strong>🎯 Interests:</strong> {author.interests.join(', ')}</p>
        <Link to="/" style={styles.link}>← Back to Home</Link>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '40px 20px',
    display: 'flex',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#f9f9f9',
    padding: '30px',
    borderRadius: '12px',
    border: '1px solid #ddd',
    maxWidth: '600px',
    width: '100%',
    textAlign: 'center',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
  },
  name: {
    fontSize: '24px',
    color: '#2c3e50',
    marginTop: '10px',
  },
  bio: {
    fontSize: '16px',
    color: '#4a4a4a',
    lineHeight: '1.5',
    margin: '15px 0',
  },
  link: {
    marginTop: '20px',
    display: 'inline-block',
    color: '#1a73e8',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  image: {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '3px solid #ccc',
  },
};
