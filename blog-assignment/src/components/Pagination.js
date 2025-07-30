import React from "react";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div style={{ marginTop: 20 }}>
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          style={{
            margin: "0 5px",
            padding: "5px 10px",
            cursor: "pointer",
            fontWeight: page === currentPage ? "bold" : "normal",
          }}
        >
          {page}
        </button>
      ))}
    </div>
  );
}
