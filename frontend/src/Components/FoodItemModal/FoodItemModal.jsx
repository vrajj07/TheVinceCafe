import React, { useState } from 'react';
import './FoodItemModal.css';
import { useNavigate } from 'react-router-dom';

const FoodItemModal = ({ isOpen, onClose, item }) => {
  const navigate = useNavigate();
  
  const [showNotification, setShowNotification] = useState(false); // State for notification visibility
  const [notificationMessage, setNotificationMessage] = useState(''); // State for the notification message

  if (!isOpen || !item) return null;

  const { image, name, description, price, calories, protein, fat, carbs } = item;

  // Function to handle adding item to cart
  const handleAddToCart = async () => {
    const cartItem = {
      item: name,                            // The name of the item to add
      price: parseFloat(price).toFixed(2),   // The price of the item
      image: image,
      quantity: 1,                           // Initialize quantity to 1
    };

    try {
      const response = await fetch('http://localhost:8000/api/Cart/', { // Ensure lowercase endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(cartItem)
      });

      if (response.ok) {
        setNotificationMessage('Item added to cart successfully');
        setShowNotification(true); // Show notification
        setTimeout(() => setShowNotification(false), 3000); // Hide notification after 3 seconds
        onClose(); // Close the modal after adding to cart
        navigate('/cart'); // Navigate to the cart page
      } else {
        const errorData = await response.json();
        setNotificationMessage(`Failed to add item to cart: ${errorData.error || response.statusText}`);
        setShowNotification(true); // Show notification
        setTimeout(() => setShowNotification(false), 3000); // Hide notification after 3 seconds
      }
    } catch (error) {
      setNotificationMessage(`Error: ${error.message}`);
      setShowNotification(true); // Show notification
      setTimeout(() => setShowNotification(false), 3000); // Hide notification after 3 seconds
      console.error('Error adding to cart:', error);
    }
  };

  return (
    <>
      <div className="modal_overlay">
        <div className="modal_content">
          <button className="close_button" onClick={onClose}>&times;</button>
          <div className="modal_header">
            <img src={image} alt={name} className="food_image" />
          </div>
          <div className="modal_body">
            <h2 className="food_name">{name}</h2>
            <p className="food_description">{description}</p>
            <p className="food_price">₹ {parseFloat(price).toFixed(2)}</p>

            <h3 className="nutritional_title">Nutritional Values</h3>
            <ul className="nutritional_list">
              <li className="nutritional_item">Calories: {calories}</li>
              <li className="nutritional_item">Protein: {protein}g</li>
              <li className="nutritional_item">Fat: {fat}g</li>
              <li className="nutritional_item">Carbs: {carbs}g</li>
            </ul>

            <button onClick={handleAddToCart} className="btn">Add To Cart</button>
          </div>
        </div>
      </div>

      {/* Notification Popup */}
      {showNotification && (
        <div className="notification-popup">
          {notificationMessage}
        </div>
      )}
    </>
  );
};

export default FoodItemModal;
