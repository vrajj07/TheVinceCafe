// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './Components/Header/Header';
// import Home from './Components/Home/Home';
// import About from './Components/About/About';
// import Features from './Components/Features/Features';
// import Menu from './Components/Menu/Menu';
// import MenuPage from './Components/MenuPage/MenuPage';
// import Offers from './Components/Offers/Offers';
// import Reservation from './Components/Reservation/Reservation';
// import Reviews from './Components/Reviews/Reviews';
// import Footer from './Components/Footer/Footer';
// import Landing from './Components/Landing/Landing';
// import Cart from './Components/Cart/Cart';
// // import CheckoutPage from './Components/CheckoutPage/CheckoutPage';
// import './App.css';

// function App() {
//   const [cartItems, setCartItems] = useState([]); // Global cart state

//   // Function to add item to the cart
//   const addToCart = (item) => {
//     setCartItems((prevItems) => [...prevItems, item]);
//   };

//   return (
//     <Router>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Landing />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/features" element={<Features />} />
//         <Route path="/menu" element={<Menu />} />
//         <Route path="/menupage" element={<MenuPage addToCart={addToCart} />} />
//         <Route path="/offers" element={<Offers />} />
//         <Route path="/reservation" element={<Reservation />} />
//         <Route path="/reviews" element={<Reviews />} />
//         <Route path="/cart" element={<Cart cartItems={cartItems} />} /> {/* Pass cart items */}
//         {/* <Route path="/checkout" element={<CheckoutPage />} /> */}
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }

// export default App;


import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Features from './Components/Features/Features';
import Menu from './Components/Menu/Menu';
import MenuPage from './Components/MenuPage/MenuPage';
import Offers from './Components/Offers/Offers';
import Reservation from './Components/Reservation/Reservation';
import Reviews from './Components/Reviews/Reviews';
import Footer from './Components/Footer/Footer';
import Landing from './Components/Landing/Landing';
import Cart from './Components/Cart/Cart';
import CheckoutPage from './Components/CheckoutPage/CheckoutPage'; // Uncommented CheckoutPage import
import ReviewsPage from './Components/ReviewsPage/ReviewsPage';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]); // Global cart state

  // Function to add item to the cart
  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/menupage" element={<MenuPage addToCart={addToCart} />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/reviewspage" element={<ReviewsPage />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} />} /> {/* Pass cart items */}
        <Route path="/checkout" element={<CheckoutPage />} /> {/* Added CheckoutPage route */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
