import React, { useState } from 'react';
import { menu } from '../../Data';
import './Menu.css';
import FoodItemModal from '../FoodItemModal/FoodItemModal.jsx';

const Menu = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    setSelectedItem(item); // Set the clicked item as the selected item
  };

  const closeModal = () => {
    setSelectedItem(null); // Close the modal by setting selectedItem to null
  };

  return (
    <>
      <section className="menu section" id="menu">
        <h2 className="section_title" data-title="Specials">
          Today's Special!
        </h2>
        <div className="menu_grid container grid">
          {menu.map(({ img, title, description, price, nutritionalValues }, index) => (
            <div className="menu_item grid" key={index} onClick={() => openModal({ img, title, description, price, nutritionalValues })}>
              <div className="menu_img-wrapper">
                <img src={img} alt={title} className="menu_img" />
              </div>
              <div className="menu_data">
                <div>
                  <h3 className="menu_title">{title}</h3>
                  <p className="menu_description">{description}</p>
                </div>
                <span className="menu_price">{price}/-</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Render the modal and pass the selected food item details */}
      <FoodItemModal isOpen={!!selectedItem} onClose={closeModal} item={selectedItem} />
    </>
  );
};

export default Menu;
