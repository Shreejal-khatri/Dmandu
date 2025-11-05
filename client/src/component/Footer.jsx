import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log('Subscribed with email:', email);
    setEmail('');
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Menu Section */}
        <div style={styles.section}>
          <h3 style={styles.heading}>Menu</h3>
          <ul style={styles.list}>
            <li style={styles.listItem}><a href="/" style={styles.link}>Home</a></li>
            <li style={styles.listItem}><a href="/shop" style={styles.link}>Shop</a></li>
            <li style={styles.listItem}><a href="/vendors" style={styles.link}>Vendors</a></li>
            <li style={styles.listItem}><a href="/about" style={styles.link}>About</a></li>
          </ul>
        </div>

        {/* Contacts Section */}
        <div style={styles.section}>
          <h3 style={styles.heading}>Contacts</h3>
          <p style={styles.contactText}>email@email.com</p>
          <p style={styles.contactText}>+123456789</p>
          <h3 style={{...styles.heading, marginTop: '30px'}}>Socials</h3>
          <div style={styles.socialIcons}>
            <a href="#" style={styles.iconLink}><FaFacebook style={styles.icon} /></a>
            <a href="#" style={styles.iconLink}><FaInstagram style={styles.icon} /></a>
            <a href="#" style={styles.iconLink}><FaXTwitter style={styles.icon} /></a>
            <a href="#" style={styles.iconLink}><FaTiktok style={styles.icon} /></a>
          </div>
        </div>

        {/* Newsletter Section */}
        <div style={styles.section}>
          <h3 style={styles.heading}>Subscribe to our newsletter</h3>
          <form onSubmit={handleSubscribe} style={styles.form}>
            <label style={styles.label}>EMAIL *</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={styles.input}
              placeholder=""
            />
            <button type="submit" style={styles.button}>Subscribe</button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div style={styles.copyright}>
        <p style={styles.copyrightText}>© 2025 Dmandu. All rights reserved.</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#2b3144',
    color: 'white',
    padding: '60px 40px 20px 40px',
    marginTop: '100px',
  },
  container: {
    maxWidth: '1400px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '80px',
    paddingBottom: '40px',
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
  },
  heading: {
    fontSize: '1.3rem',
    fontWeight: 'bold',
    marginBottom: '25px',
    color: 'white',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  listItem: {
    marginBottom: '15px',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1rem',
    transition: 'opacity 0.3s',
  },
  contactText: {
    color: 'white',
    fontSize: '1rem',
    marginBottom: '10px',
  },
  socialIcons: {
    display: 'flex',
    gap: '20px',
    marginTop: '15px',
  },
  iconLink: {
    color: 'white',
    transition: 'opacity 0.3s',
  },
  icon: {
    fontSize: '1.5rem',
    cursor: 'pointer',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    fontSize: '0.85rem',
    marginBottom: '10px',
    color: 'white',
    fontWeight: '500',
  },
  input: {
    padding: '12px 15px',
    borderRadius: '8px',
    border: 'none',
    fontSize: '1rem',
    marginBottom: '15px',
    outline: 'none',
  },
  button: {
    backgroundColor: 'white',
    color: '#2b3144',
    padding: '12px 30px',
    borderRadius: '50px',
    border: 'none',
    fontSize: '1rem',
    cursor: 'pointer',
    fontWeight: '600',
    transition: 'opacity 0.3s',
  },
  copyright: {
    borderTop: '1px solid rgba(255, 255, 255, 0.2)',
    paddingTop: '25px',
    textAlign: 'center',
  },
  copyrightText: {
    fontSize: '0.9rem',
    color: 'rgba(255, 255, 255, 0.8)',
  },
};

export default Footer;