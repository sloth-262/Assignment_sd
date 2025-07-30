import React, { useState } from 'react';

const reactions = ['BuraAngul', 'Valobasa', 'Hehehehe', 'uauuuuu', 'kostoPaichi'];

export default function Reaction() {
  const [selected, setSelected] = useState(null);

  return (
    <div style={{ display: 'flex', gap: 10, marginTop: 5 }}>
      {reactions.map((emoji, index) => (
        <span
          key={index}
          onClick={() => setSelected(index)}
          style={{
            fontSize: 20,
            cursor: 'pointer',
            opacity: selected === index ? 1 : 0.4,
          }}
        >
          {emoji}
        </span>
      ))}
    </div>
  );
}
