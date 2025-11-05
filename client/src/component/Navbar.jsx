import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiUser, FiShoppingCart } from 'react-icons/fi';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLinkHover = (e) => {
    e.target.style.color = '#666';
  };

  const handleLinkLeave = (e) => {
    e.target.style.color = 'black';
  };

  const handleIconHover = (e) => {
    e.target.style.transform = 'scale(1.1)';
  };

  const handleIconLeave = (e) => {
    e.target.style.transform = 'scale(1)';
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.container}>
        {/* Logo */}
        <div 
          style={styles.logo} 
          onClick={() => navigate('/')}
          onMouseEnter={handleLinkHover}
          onMouseLeave={handleLinkLeave}
        >
          Dmandu
        </div>

        {/* Navigation Links */}
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

        {/* Icons */}
        <div style={styles.icons}>
          <FiUser 
            style={styles.icon} 
            onClick={() => navigate('/profile')}
            onMouseEnter={handleIconHover}
            onMouseLeave={handleIconLeave}
          />
          <FiShoppingCart 
            style={styles.icon} 
            onClick={() => navigate('/cart')}
            onMouseEnter={handleIconHover}
            onMouseLeave={handleIconLeave}
          />
        </div>
      </div>
    </nav>
  );
};

const styles = {
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
  container: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '0 50px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    color: 'black',
    letterSpacing: '0.5px',
    transition: 'color 0.3s ease',
  },
  navLinks: {
    display: 'flex',
    gap: '60px',
    alignItems: 'center',
  },
  link: {
    fontSize: '1.1rem',
    color: 'black',
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'color 0.3s ease',
    fontWeight: '500',
    position: 'relative',
  },
  icons: {
    display: 'flex',
    gap: '30px',
    alignItems: 'center',
  },
  icon: {
    fontSize: '1.5rem',
    cursor: 'pointer',
    color: 'black',
    transition: 'transform 0.2s ease, color 0.3s ease',
    strokeWidth: '2',
  },
};

export default Navbar;