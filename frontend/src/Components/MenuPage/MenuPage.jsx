// export default MenuPage;
import React, { useState, useEffect } from 'react';
import './MenuPage.css';
import Header from '../Header/Header.jsx'; // Adjust path as necessary
import Footer from '../Footer/Footer.jsx'; // Adjust path as necessary
import FoodItemModal from '../FoodItemModal/FoodItemModal.jsx';
import axios from 'axios';

const MenuPage = () => {
  const [menuItems, setMenuItems] = useState([]); // State for storing menu items
  const [selectedItem, setSelectedItem] = useState(null); // State for selected menu item
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    // Fetch data from the API
    const fetchMenuItems = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/Menu/');
        setMenuItems(response.data); // Assuming the response is an array of menu items
        setLoading(false);
      } catch (error) {
        console.error('Error fetching menu items:', error);
        setError('Failed to load menu');
        setLoading(false);
      }
    };

    fetchMenuItems();
  }, []);

  const openModal = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  // Group items by category
  const groupedItems = menuItems.reduce((acc, item) => {
    (acc[item.category] = acc[item.category] || []).push(item);
    return acc;
  }, {});

  if (loading) return <div>Loading menu...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <main className="menu-page">
        <section className="menu-section">
        <h2 className="section_title" data-title="Our Menu">
          Let's Check Our Menu!
        </h2>
          {Object.entries(groupedItems).map(([category, items]) => (
            <div key={category} className="menu-category">
              <h3 className="category-title">{category}</h3>
              <div className="menu-grid">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="menu-item"
                    onClick={() => openModal(item)}
                  >
                    <div className="menu-img-wrapper">
                      <img src={item.image} alt={item.name} className="menu-img" />
                    </div>
                    <div className="menu-data">
                      <div>
                        <h3 className="menu-title">{item.name}</h3>
                        <p className="menu-description">{item.description}</p>
                      </div>
                      <span className="menu-price">{item.price}/-</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>
        {selectedItem && (
          <FoodItemModal
            isOpen={!!selectedItem}
            onClose={closeModal}
            item={selectedItem}
          />
        )}
      </main>
    </>
  );
};

export default MenuPage;
