import React from "react";
import { useParams } from "react-router-dom";

export default function AuthorProfile() {
  const { id } = useParams();

  return (
    <div style={{ padding: 20 }}>
      <h2>Author Profile</h2>
      <p>Author ID: {id}</p>
      <p>Name: Dummy Author Name</p>
      <p>Bio: This is a sample author profile.</p>
    </div>
  );
}
