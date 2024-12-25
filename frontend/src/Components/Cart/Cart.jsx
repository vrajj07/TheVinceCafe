import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import axios from 'axios';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/Cart/');
        setCartItems(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching cart items:', error);
        setError('Failed to load cart items');
        setLoading(false);
      }
    };

    fetchCartItems();
  }, []);

  const totalAmount = cartItems.reduce((acc, item) => acc + parseFloat(item.price) * item.quantity, 0);

  const handleRemoveFromCart = async (itemId) => {
    try {
      const response = await axios.delete(`http://localhost:8000/api/Cart/${itemId}/`);
      if (response.status === 204) {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
      } else {
        alert('Failed to remove item from cart');
      }
    } catch (error) {
      console.error('Error removing item from cart:', error);
      alert('Error removing item from cart');
    }
  };

  const handleQuantityChange = async (itemId, newQuantity) => {
    if (newQuantity < 1) return;
    try {
      const response = await axios.patch(`http://localhost:8000/api/Cart/${itemId}/`, { quantity: newQuantity });
      if (response.status === 200) {
        setCartItems((prevItems) =>
          prevItems.map((item) => (item.id === itemId ? { ...item, quantity: newQuantity } : item))
        );
      }
    } catch (error) {
      console.error('Error updating quantity:', error);
    }
  };

  if (loading) {
    return (
      <>
        {/* <Header /> */}
        <main className="cart-page container section">
          <p>Loading cart...</p>
        </main>
        {/* <Footer /> */}
      </>
    );
  }

  if (error) {
    return (
      <>
        {/* <Header /> */}
        <main className="cart-page container section">
          <p className="error-message">{error}</p>
          <Link to="/menupage" className="btn btn_flex back-to-menu-btn">
            &larr; Back to Menu
          </Link>
        </main>
        {/* <Footer /> */}
      </>
    );
  }

  return (
    <>
      <main className="cart-page container section">
        <h2 className="section_title" data-title="My Cart">
          Let's Check Out The Cart!
        </h2>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <h1>No Items To Display!!</h1>
            <Link to="/menupage" className="btn btn_flex back-to-menu-btn">
              &larr; Back to Menu
            </Link>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.item} className="cart-item-image" />
                  <div className="cart-item-details">
                    <h3 className="cart-item-title">{item.item || 'Unnamed Item'}</h3>
                    <div className="cart-item-price">₹ {parseFloat(item.price).toFixed(2)}</div>
                  </div>
                  <div className="cart-item-quantity-section">
                    <div className="dashed-line"></div>
                    <div className="quantity-controls">
                      <button
                        className="quantity-button"
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        className="quantity-button"
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      >
                        +
                      </button>
                      <button className="close-button" onClick={() => handleRemoveFromCart(item.id)}>
                        &times;
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-total">
              <span>Total Amount:</span>
              <span>₹ {totalAmount.toFixed(2)}</span>
            </div>

            <div className="cart-buttons">
              
              <Link to="/menupage" className="btn cart-close-btn">
                &larr; Back to Menu
              </Link>

              <Link to="/checkout" className="btn cart-checkout-btn">
                Proceed to Checkout &rarr;
              </Link>
            </div>
          </>
        )}
      </main>
    </>
  );
};

export default Cart;
