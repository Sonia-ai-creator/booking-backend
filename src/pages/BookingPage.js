import React, { useState } from 'react';
import './BookingPage.css'; // Import custom CSS for styling

const BookingPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setPhone('');
    setService('');
    setDate('');
    setTime('');
    setSubmitted(false);
  };

  return (
    <div className="booking-page">
      <h1 className="heading">Salon Appointment Booking</h1>
      {!submitted ? (
        <form onSubmit={handleSubmit} className="booking-form">
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Phone</label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Service</label>
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              required
            >
              <option value="">Select a service</option>
              <option value="Haircut">Haircut</option>
              <option value="Manicure">Manicure</option>
              <option value="Pedicure">Pedicure</option>
              <option value="Facial">Facial</option>
            </select>
          </div>

          <div className="form-group">
            <label>Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Time</label>
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="submit-button">
            Book Appointment
          </button>
        </form>
      ) : (
        <div className="confirmation-section">
          <h2 className="confirmation-heading">Thank You!</h2>
          <p className="confirmation-message">
            Your appointment for <strong>{service}</strong> is confirmed on <strong>{date}</strong> at <strong>{time}</strong>.
          </p>
          <button onClick={handleReset} className="reset-button">
            Book Another Appointment
          </button>
        </div>
      )}
    </div>
  );
};

export default BookingPage;
