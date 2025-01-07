import React from 'react';
import './SlotCard.css'; // Optional: Add styles if needed

function SlotCard({ time, selected, onSelect }) {
  return (
    <div
      className={`slot-card ${selected ? 'selected' : ''}`}
      onClick={() => onSelect(time)}
    >
      {time}
    </div>
  );
}

export default SlotCard;
