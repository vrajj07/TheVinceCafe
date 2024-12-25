import React, { useState } from 'react';
import axios from 'axios'; // Import axios for making API calls
import './Reservation.css';
import { FaRegBookmark } from 'react-icons/fa';
import shapeTwo from '../../Assets/shape-2.png';
import shapeThree from '../../Assets/shape-3.png';

const Reservation = () => {
  const [formData, setFormData] = useState({
    resName: '',
    resEmail: '',
    resPhone: '',
    resDate: '',
    resTime: '',
    resPeople: '',
    resMessage: ''
  });
  const [message, setMessage] = useState(''); // State for the notification message
  const [showNotification, setShowNotification] = useState(false); // State for notification visibility

  // Get today's date and the date 7 days from now
  const today = new Date();
  const minDate = new Date(today);
  minDate.setDate(today.getDate() + 1);
  const maxDate = new Date(today);
  maxDate.setDate(today.getDate() + 7);

  const minDateString = minDate.toISOString().split('T')[0];
  const maxDateString = maxDate.toISOString().split('T')[0];

  // Handle form change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send data to the Django server
      await axios.post('http://localhost:8000/api/Reservation/', formData);
      await axios.post('http://localhost:5500/ReservationEmail', formData);

      setMessage(`Reservation Done For ${formData.resName}!`);
    } catch (error) {
      console.error('Error details:', error.response ? error.response.data : error.message);
      setMessage('Error submitting reservation');
    }

    setShowNotification(true); // Show notification
    setTimeout(() => setShowNotification(false), 3000); // Hide notification after 3 seconds

    // Clear form inputs
    setFormData({
      resName: '',
      resEmail: '',
      resPhone: '',
      resDate: '',
      resTime: '',
      resPeople: '',
      resMessage: ''
    });
  };

  return (
    <>
      <section className="reservation container" id="reservation">
        <h2 className="section_title" data-title="Reservation">
          Book A Table!
        </h2>
        <form onSubmit={handleSubmit} className="reservation_form grid">
          <div className="form_input-div">
            <input
              type="text"
              name="resName"
              className="form_input"
              placeholder="Your Name"
              value={formData.resName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form_input-div">
            <input
              type="email"
              name="resEmail"
              className="form_input"
              placeholder="Your Email"
              value={formData.resEmail}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form_input-div">
            <input
              type="text"
              name="resPhone"
              className="form_input"
              placeholder="Your Phone Number"
              value={formData.resPhone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form_input-div">
            <input
              type="date"
              name="resDate"
              className="form_input date-input"
              placeholder="Date"
              min={minDateString}
              max={maxDateString}
              value={formData.resDate}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form_input-div">
            <input
              type="time"
              name="resTime"
              className="form_input time-input"
              placeholder="Time"
              min="11:00"
              max="23:00"
              value={formData.resTime}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form_input-div">
            <input
              type="number"
              name="resPeople"
              className="form_input"
              placeholder="Number Of People"
              min="2"
              max="6"
              value={formData.resPeople}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form_input-div form_input-textarea">
            <textarea
              name="resMessage"
              className="form_input"
              placeholder="Your Message"
              value={formData.resMessage}
              onChange={handleChange}
            />
          </div>

          <button className="btn reservation_btn" type="submit">
            <FaRegBookmark /> Book A Table
          </button>
        </form>

        {/* Notification Popup */}
        {showNotification && (
          <div className="notification-popup">
            {message}
          </div>
        )}

        <img src={shapeTwo} alt="" className="shape_two" />
        <img src={shapeThree} alt="" className="shape_three" />
      </section>
    </>
  );
};

export default Reservation;
