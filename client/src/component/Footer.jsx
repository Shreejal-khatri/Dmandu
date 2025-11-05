import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

//Footer component with three main sections: Menu, Contacts, and Newsletter subscription
const Footer = () => {
  //State to manage email input for newsletter subscription
  const [email, setEmail] = useState('');

  //Handle newsletter subscription form submission
  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log('Subscribed with email:', email);
    setEmail('');
  };

  return (
    <footer style={styles.footer}>
      {/* Main footer container with three columns */}
      <div style={styles.container}>
        {/* Menu Section - Navigation links */}
        <div style={styles.section}>
          <h3 style={styles.heading}>Menu</h3>
          <ul style={styles.list}>
            <li style={styles.listItem}><a href="/" style={styles.link}>Home</a></li>
            <li style={styles.listItem}><a href="/shop" style={styles.link}>Shop</a></li>
            <li style={styles.listItem}><a href="/vendors" style={styles.link}>Vendors</a></li>
            <li style={styles.listItem}><a href="/about" style={styles.link}>About</a></li>
          </ul>
        </div>

        {/* Contacts Section - Contact information and social media links */}
        <div style={styles.section}>
          <h3 style={styles.heading}>Contacts</h3>
          <p style={styles.contactText}>email@email.com</p>
          <p style={styles.contactText}>+123456789</p>
          <h3 style={{...styles.heading, marginTop: '30px'}}>Socials</h3>
          {/* Social Media Icons */}
          <div style={styles.socialIcons}>
            <a href="#" style={styles.iconLink}><FaFacebook style={styles.icon} /></a>
            <a href="#" style={styles.iconLink}><FaInstagram style={styles.icon} /></a>
            <a href="#" style={styles.iconLink}><FaXTwitter style={styles.icon} /></a>
            <a href="#" style={styles.iconLink}><FaTiktok style={styles.icon} /></a>
          </div>
        </div>

        {/* Newsletter Section - Email subscription form */}
        <div style={styles.section}>
          <h3 style={styles.heading}>Subscribe to our newsletter</h3>
          <form onSubmit={handleSubscribe} style={styles.form}>
            <label style={styles.label}>EMAIL *</label>
            {/* Email input field */}
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={styles.input}
              placeholder=""
            />
            {/* Subscribe button */}
            <button type="submit" style={styles.button}>Subscribe</button>
          </form>
        </div>
      </div>

      {/* Copyright Section - Bottom of footer with copyright notice */}
      <div style={styles.copyright}>
        <p style={styles.copyrightText}>© 2025 Dmandu. All rights reserved.</p>
      </div>
    </footer>
  );
};

const styles = {
  //Main footer container styles - Dark background with padding
  footer: {
    backgroundColor: '#2b3144',
    color: 'white',
    padding: '60px 40px 20px 40px',
    marginTop: '100px',
  },
  //Container styles - Three column grid layout
  container: {
    maxWidth: '1400px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '80px',
    paddingBottom: '40px',
  },
  //Section styles - Each column in the footer
  section: {
    display: 'flex',
    flexDirection: 'column',
  },
  //Heading styles - Section titles
  heading: {
    fontSize: '1.3rem',
    fontWeight: 'bold',
    marginBottom: '25px',
    color: 'white',
  },
  //List styles - Removes default list styling
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  //List item styles - Spacing between menu items
  listItem: {
    marginBottom: '15px',
  },
  //Link styles - Menu and social media links
  link: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1rem',
    transition: 'opacity 0.3s',
  },
  //Contact text styles - Email and phone number
  contactText: {
    color: 'white',
    fontSize: '1rem',
    marginBottom: '10px',
  },
  //Social icons container styles - Horizontal layout for social icons
  socialIcons: {
    display: 'flex',
    gap: '20px',
    marginTop: '15px',
  },
  //Social icon link styles - Individual icon wrapper
  iconLink: {
    color: 'white',
    transition: 'opacity 0.3s',
  },
  //Icon styles - Size and cursor for social media icons
  icon: {
    fontSize: '1.5rem',
    cursor: 'pointer',
  },
  //Form styles - Newsletter subscription form layout
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  //Label styles - "EMAIL *" label above input
  label: {
    fontSize: '0.85rem',
    marginBottom: '10px',
    color: 'white',
    fontWeight: '500',
  },
  //Input styles - Email input field
  input: {
    padding: '12px 15px',
    borderRadius: '8px',
    border: 'none',
    fontSize: '1rem',
    marginBottom: '15px',
    outline: 'none',
  },
  //Button styles - Subscribe button
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
  //Copyright container styles - Bottom section with border
  copyright: {
    borderTop: '1px solid rgba(255, 255, 255, 0.2)',
    paddingTop: '25px',
    textAlign: 'center',
  },
  //Copyright text styles - Small, slightly transparent text
  copyrightText: {
    fontSize: '0.9rem',
    color: 'rgba(255, 255, 255, 0.8)',
  },
};

export default Footer;