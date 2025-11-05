import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiUser, FiShoppingCart } from 'react-icons/fi';
import Cart from './Cart'; 

//Navbar component with navigation links, logo, and cart/profile icons
const Navbar = () => {
  //Hook for programmatic navigation
  const navigate = useNavigate();
  //State to manage cart sidebar visibility
  const [isCartOpen, setIsCartOpen] = useState(false);

  //Hover effect for navigation links - changes color on hover
  const handleLinkHover = (e) => {
    e.target.style.color = '#666';
  };

  //Removes hover effect when mouse leaves the link
  const handleLinkLeave = (e) => {
    e.target.style.color = 'black';
  };

  //Hover effect for icons - scales up on hover
  const handleIconHover = (e) => {
    e.target.style.transform = 'scale(1.1)';
  };

  //Removes scale effect when mouse leaves the icon
  const handleIconLeave = (e) => {
    e.target.style.transform = 'scale(1)';
  };

  return (
    <>
      {/* Main navigation bar */}
      <nav style={styles.navbar}>
        <div style={styles.container}>
          {/* Logo - Clickable, navigates to home page */}
          <div 
            style={styles.logo} 
            onClick={() => navigate('/')}
            onMouseEnter={handleLinkHover}
            onMouseLeave={handleLinkLeave}
          >
            Dmandu
          </div>

          {/* Navigation Links - Main menu items */}
          <div style={styles.navLinks}>
            <a 
              href="/" 
              style={styles.link}
              onMouseEnter={handleLinkHover}
              onMouseLeave={handleLinkLeave}
            >
              Home
            </a>
            <a 
              href="/shop" 
              style={styles.link}
              onMouseEnter={handleLinkHover}
              onMouseLeave={handleLinkLeave}
            >
              Shop
            </a>
            <a 
              href="/vendors" 
              style={styles.link}
              onMouseEnter={handleLinkHover}
              onMouseLeave={handleLinkLeave}
            >
              Vendors
            </a>
            <a 
              href="/about" 
              style={styles.link}
              onMouseEnter={handleLinkHover}
              onMouseLeave={handleLinkLeave}
            >
              About
            </a>
          </div>

          {/* Icons - User profile and shopping cart */}
          <div style={styles.icons}>
            {/* User Profile Icon - Navigates to profile page */}
            <FiUser 
              style={styles.icon} 
              onClick={() => navigate('/profile')}
              onMouseEnter={handleIconHover}
              onMouseLeave={handleIconLeave}
            />
            {/* Shopping Cart Icon - Opens cart sidebar */}
            <FiShoppingCart 
              style={styles.icon} 
              onClick={() => setIsCartOpen(true)}
              onMouseEnter={handleIconHover}
              onMouseLeave={handleIconLeave}
            />
          </div>
        </div>
      </nav>

      {/* Cart Sidebar Component - Slides in from right when opened */}
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

const styles = {
  //Main navbar container styles - Sticky positioning with shadow
  navbar: {
    width: '100%',
    backgroundColor: 'white',
    borderBottom: '1px solid #e0e0e0',
    padding: '25px 0',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
  },
  //Inner container styles - Centers content with max width
  container: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '0 50px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  //Logo styles - Bold, clickable brand name
  logo: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    color: 'black',
    letterSpacing: '0.5px',
    transition: 'color 0.3s ease',
  },
  //Navigation links container styles - Horizontal layout with spacing
  navLinks: {
    display: 'flex',
    gap: '60px',
    alignItems: 'center',
  },
  //Individual link styles - Clean, hover-able menu items
  link: {
    fontSize: '1.1rem',
    color: 'black',
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'color 0.3s ease',
    fontWeight: '500',
    position: 'relative',
  },
  //Icons container styles - Right-aligned user and cart icons
  icons: {
    display: 'flex',
    gap: '30px',
    alignItems: 'center',
  },
  //Individual icon styles - Clickable icons with hover effects
  icon: {
    fontSize: '1.5rem',
    cursor: 'pointer',
    color: 'black',
    transition: 'transform 0.2s ease, color 0.3s ease',
    strokeWidth: '2',
  },
};

export default Navbar;