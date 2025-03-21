// src/Components/CheckoutPage/CheckoutPage.jsx
import React, { useState } from 'react';
import './CheckoutPage.css';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for navigation after submission
import axios from 'axios'; // Import axios for making API calls

const CheckoutPage = () => {
  const navigate = useNavigate(); // Initialize navigate
  const [formData, setFormData] = useState({
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    tableNumber: '',
    specialInstructions: ''
  });

  const [message, setMessage] = useState(''); // State for notification message
  const [showNotification, setShowNotification] = useState(false); // State for notification visibility

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare data in the format expected by the backend
    const payload = {
      customer_name: formData.customerName,
      customer_email: formData.customerEmail,
      customer_phone: formData.customerPhone,
      table_number: parseInt(formData.tableNumber, 10),
      special_instructions: formData.specialInstructions
    };

    try {
      // Make a POST request to the Django API
      const response = await axios.post(`${process.env.VITE_API_URL}checkout/`, payload);

      if (response.status === 201) { // HTTP 201 Created
        setMessage('Checkout successful! Redirecting to payment...');
        setShowNotification(true);

        // Optionally, you can reset the form
        setFormData({
          customerName: '',
          customerEmail: '',
          customerPhone: '',
          tableNumber: '',
          specialInstructions: ''
        });

        // Redirect to the payment page after a short delay
        setTimeout(() => {
          setShowNotification(false);
          navigate('/payment');
        }, 3000); // 3 seconds delay
      } else {
        setMessage('An unexpected error occurred. Please try again.');
        setShowNotification(true);
      }
    } catch (error) {
      console.error('Error submitting checkout form:', error);

      // Handle different error scenarios
      if (error.response) {
        // Server responded with a status other than 2xx
        setMessage(`Error: ${error.response.data.customer_email || 'Failed to submit form.'}`);
      } else if (error.request) {
        // Request was made but no response received
        setMessage('No response from server. Please try again later.');
      } else {
        // Something else happened while setting up the request
        setMessage('Error: Unable to submit form.');
      }

      setShowNotification(true);
    }

    // Hide the notification after 3 seconds
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  return (
    <div className="checkout container section">
      <h2 className="section_title" data-title="Complete Your Order">Let's Move A Step Forward!</h2>

      <form onSubmit={handleSubmit} className="checkout_form grid">
        <div className="form_input-div">
          <input
            type="text"
            name="customerName"
            className="form_input"
            placeholder="Your Name"
            value={formData.customerName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form_input-div">
          <input
            type="email"
            name="customerEmail"
            className="form_input"
            placeholder="Your Email"
            value={formData.customerEmail}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form_input-div">
          <input
            type="text"
            name="customerPhone"
            className="form_input"
            placeholder="Your Phone Number"
            value={formData.customerPhone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form_input-div">
          <input
            type="number"
            name="tableNumber"
            className="form_input"
            placeholder="Table Number"
            min="1"
            value={formData.tableNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form_input-div form_input-textarea">
          <textarea
            name="specialInstructions"
            className="form_input"
            placeholder="Special Preparation Instructions"
            value={formData.specialInstructions}
            onChange={handleChange}
          />
        </div>

        <div className="checkout_buttons">
          <Link
            to='/cart'
            type="button"
            className="btn"
          >
           &larr; Back To Cart
          </Link>

          <button
            type="submit"
            className="btn"
          >
            Proceed To Payment &rarr;
          </button>
        </div>
      </form>

      {/* Notification Popup */}
      {showNotification && (
        <div className="notification-popup">
          {message}
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
