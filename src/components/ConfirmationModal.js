import React from 'react';

function ConfirmationModal({ show, onClose, onConfirm, details }) {
  if (!show) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          background: 'white',
          padding: '20px',
          borderRadius: '8px',
          width: '400px',
          textAlign: 'center',
        }}
      >
        <h3>Confirm Your Appointment</h3>
        <p>Service: {details.service}</p>
        <p>Date: {details.date}</p>
        <p>Time: {details.time}</p>
        <div style={{ marginTop: '20px' }}>
          <button
            onClick={onConfirm}
            style={{ marginRight: '10px', padding: '8px 16px', cursor: 'pointer' }}
          >
            Confirm
          </button>
          <button onClick={onClose} style={{ padding: '8px 16px', cursor: 'pointer' }}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationModal;
