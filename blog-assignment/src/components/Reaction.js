import React, { useState } from "react";

const icons = ["👍", "❤️", "😂"];

export default function Reaction() {
  const [active, setActive] = useState(null);

  return (
    <div>
      {icons.map((icon, index) => (
        <span
          key={index}
          style={{
            fontSize: "20px",
            margin: "0 5px",
            cursor: "pointer",
            opacity: active === index ? 1 : 0.4,
            userSelect: "none",
          }}
          onClick={() => setActive(index)}
        >
          {icon}
        </span>
      ))}
    </div>
  );
}
