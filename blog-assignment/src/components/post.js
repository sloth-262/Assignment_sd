import React from "react";
import { Link } from "react-router-dom";
import Reaction from "./Reaction";

export default function Post({ post }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: 15,
        marginBottom: 20,
        borderRadius: 6,
        backgroundColor: "#fafafa",
      }}
    >
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <p>
        Author: <Link to={`/author/${post.author.id}`}>{post.author.name}</Link>
      </p>

      <div style={{ marginTop: 10 }}>
        <b>Post Reactions:</b>
        <Reaction />
      </div>

      {/* Comments Section */}
      <div style={{ marginTop: 20 }}>
        <h4>Comments:</h4>
        {post.comments.length === 0 && <p>No comments yet.</p>}
        {post.comments.map((comment) => (
          <div
            key={comment.id}
            style={{
              borderTop: "1px solid #ddd",
              paddingTop: 8,
              paddingBottom: 8,
            }}
          >
            <p>
              <b>{comment.author}</b>: {comment.text}
            </p>
            <div>
              <b>Comment Reactions:</b>
              <Reaction />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
