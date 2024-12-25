import React, { useState } from 'react';
import './Footer.css';
import logo from '../../Assets/logo.png';
import { FaXTwitter } from "react-icons/fa6";
import { BsEnvelopeAt } from "react-icons/bs";
import { FaCaretRight, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { MdOutlinePhoneInTalk, MdOutlineLocationOn } from "react-icons/md";
import axios from 'axios';

const Footer = () => {
  const [email, setEmail] = useState(''); // State to store the email
  const [message, setMessage] = useState(''); // State to store response message
  const [showNotification, setShowNotification] = useState(false); // State for notification

  const handleSubscribe = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/subscribe', { email });
      const response1= await axios.post('http://localhost:8000/api/Subscribe/',{email})
      setMessage(`Email Sent To ${email}!!`);
    } catch (error) {
      console.error(error);
      setMessage('Error Sending Email');
    }

    setShowNotification(true); // Show notification
    setTimeout(() => setShowNotification(false), 3000); // Hide notification after 3 seconds
    setEmail(''); // Clear the email input field
  };

  return (
    <>
      <footer className="footer">
        <div className="footer_grid container grid">
          <div className="footer_content">
            <a href="/" className="footer_logo">
              <img src={logo} alt="" className="footer_logo-img" />
            </a>
            <p className="footer_description">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, repellendus.
            </p>
            <ul className="footer_contact">
              <li className="footer_contact-item"><MdOutlinePhoneInTalk className='icon'/> +91 9033498075</li>
              <li className="footer_contact-item"><MdOutlineLocationOn className='icon'/> SBR, Ahmedabad </li>
              <li className="footer_contact-item"><BsEnvelopeAt className='icon'/> info@vince.com</li>
            </ul>
          </div>

          <div className="footer_content">
            <h3 className="footer_title">Quick Links</h3>
            <ul className="footer_links">
              <li>
                <a href="#about" className="footer_link">
                  <FaCaretRight className='icon'/> About Us
                </a>
              </li>
              <li>
                <a href="#features" className="footer_link">
                  <FaCaretRight className='icon'/> Features
                </a>
              </li>
              <li>
                <a href="#menu" className="footer_link">
                  <FaCaretRight className='icon'/> Menu
                </a>
              </li>
              <li>
                <a href="#reservation" className="footer_link">
                  <FaCaretRight className='icon'/> Reservation
                </a>
              </li>
            </ul>

            <div className="footer_socials">
              <h3 className="footer_social-follow">Follow Us:</h3>
              <div className="footer_social-links">
                <a href="/" className="footer_social-link"><GrInstagram /></a>
                <a href="/" className="footer_social-link"><FaLinkedinIn /></a>
                <a href="/" className="footer_social-link"><FaXTwitter /></a>
                <a href="/" className="footer_social-link"><FaGithub /></a>
              </div>
            </div>
          </div>

          <div className="footer_content">
            <h3 className="footer_title">Newsletter</h3>
            <p className="footer_description">
              Subscribe to our Newsletter to get the latest updates and news.
            </p>
            <form className="subscribe_form" onSubmit={handleSubscribe}>
              <input 
                type="email" 
                placeholder="Your Email" 
                className="form_input subscribe_input" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} // Update email state
              />
              <button className="btn btn_flex subscribe_button">
                <BsEnvelopeAt/> Subscribe Now
              </button>
            </form>
          </div>
        </div>

        {/* Notification Popup */}
        {showNotification && (
          <div className="notification-popup">
            {message}
          </div>
        )}

        <p className="copyright_text">
          &copy; Copyright 2019 <span>The Vince</span> All Rights Reserved.
        </p>
      </footer>
    </>
  );
}

export default Footer;