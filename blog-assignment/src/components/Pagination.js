import React from "react";

export default function Pagination({ totalPages, currentPage, onPageChange }) {
  return (
    <div style={{ marginTop: 20 }}>
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          onClick={() => onPageChange(i + 1)}
          style={{
            margin: 5,
            padding: 8,
            backgroundColor: currentPage === i + 1 ? "#007bff" : "#eee",
            color: currentPage === i + 1 ? "white" : "black",
            border: "none",
            borderRadius: 4,
            cursor: "pointer",
          }}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
}
