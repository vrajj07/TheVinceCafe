import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom'; // Use Link for internal routing
import logo from '../../Assets/logo.png';
import { links } from '../../Data';
import { CgMenuLeftAlt } from "react-icons/cg";
import { IoMdClose } from "react-icons/io"; // Import close icon
import './Header.css';

const Header = () => {
    const [scrollHeader, setScrollHeader] = useState(false); // State that determine whether header is scrolled 80px or not 
    const [menuOpen, setMenuOpen] = useState(false); // State to track menu open/close(For responsive)

    const changeHeader = () => {  //For scroll 80px/Not
        if (window.scrollY >= 80) {
            setScrollHeader(true);
        } else {
            setScrollHeader(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeHeader);
        return () => window.removeEventListener('scroll', changeHeader); // Clean up the listener on unmount
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <>
            <header className={`${scrollHeader ? 'scroll-header' : ''} header`}>
                <nav className="nav container">
                    <a href="/" className="nav_logo" onClick={closeMenu}>
                        <img src={logo} alt="Logo" className="nav_logo-img" />
                    </a>

                    <div className={`nav_menu ${menuOpen ? 'active' : ''}`}>
                        <ul className="nav_list">
                            {links.map(({ name, path }, index) => (
                                <li className="nav_item" key={index}>
                                    <a
                                        href={path} // Use Link for routing
                                        className="nav_link"
                                        onClick={closeMenu} // Close menu when link is clicked
                                    >
                                        {name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="nav_toggle" onClick={toggleMenu}>
                        {menuOpen ? <IoMdClose /> : <CgMenuLeftAlt />}
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Header;
