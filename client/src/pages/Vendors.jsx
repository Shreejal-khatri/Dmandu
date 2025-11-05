import React, { useState, useEffect } from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';

const Vendors = () => {
  //State to control visibility for fade-in animations
  const [isVisible, setIsVisible] = useState(false);

  /**
   * Trigger fade-in animation after component mounts
   * Sets isVisible to true after a short delay for smooth entrance effect
   */
  useEffect(() => {
    //Trigger fade-in animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    //Cleanup timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={styles.wrapper}>
      {/* Navigation Bar */}
      <Navbar />
      
      {/* Main Content Container */}
      <div style={styles.container}>
        {/* Page Title */}
        <h1 style={styles.mainTitle}>Vendors</h1>

        {/* Two-Column Content Section */}
        <div style={styles.contentSection}>
          {/* Left Column - Hero Image */}
          <div 
            style={{
              ...styles.imageContainer,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
            }}
          >
            <img 
              src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&q=80" 
              alt="Vendor shop with colorful clothing"
              style={styles.image}
            />
          </div>

          {/* Right Column - Content */}
          <div style={styles.rightContent}>
            <h2 
              style={{
                ...styles.subtitle,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
              }}
            >
              Vendor Partnership
            </h2>
            <p 
              style={{
                ...styles.description,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
              }}
            >
              Join our marketplace to connect with customers and showcase your authentic branded apparel.
            </p>
          </div>
        </div>

        {/* Trusted Vendors Gallery Section */}
        <div style={styles.trustedVendorsSection}>
          <h2 style={styles.trustedVendorsTitle}>Trusted Vendors</h2>
          <p style={styles.trustedVendorsDescription}>
            Connecting you with verified vendors for authentic branded fashion at competitive prices.
          </p>

          {/* Vendor Images Grid - Masonry Layout */}
          <div style={styles.vendorImagesGrid}>
            {/* Large Image - Spans 2 columns */}
            <div 
              style={{
                ...styles.vendorImageContainer,
                ...styles.largeImage,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: '0.4s'
              }}
            >
              <img 
                src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&q=80" 
                alt="Vendor shop interior"
                style={styles.vendorImage}
              />
            </div>
            
            {/* Standard Image */}
            <div 
              style={{
                ...styles.vendorImageContainer,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: '0.5s'
              }}
            >
              <img 
                src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800&q=80" 
                alt="Clothing store"
                style={styles.vendorImage}
              />
            </div>
            
            {/* Standard Image */}
            <div 
              style={{
                ...styles.vendorImageContainer,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: '0.6s'
              }}
            >
              <img 
                src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&q=80" 
                alt="Store lights"
                style={styles.vendorImage}
              />
            </div>
            
            {/* Standard Image */}
            <div 
              style={{
                ...styles.vendorImageContainer,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: '0.7s'
              }}
            >
              <img 
                src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&q=80"
                alt="Fashion retail"
                style={styles.vendorImage}
              />
            </div>
            
            {/* Standard Image */}
            <div 
              style={{
                ...styles.vendorImageContainer,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: '0.8s'
              }}
            >
              <img 
                src="https://images.unsplash.com/photo-1555529902-5261145633bf?w=800&q=80" 
                alt="Market stall"
                style={styles.vendorImage}
              />
            </div>
            
            {/* Wide Image - Spans 2 columns */}
            <div 
              style={{
                ...styles.vendorImageContainer,
                ...styles.wideImage,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: '0.9s'
              }}
            >
              <img 
                src="https://images.unsplash.com/photo-1560393464-5c69a73c5770?w=800&q=80" 
                alt="Shopping arcade"
                style={styles.vendorImage}
              />
            </div>
            
            {/* Standard Image */}
            <div 
              style={{
                ...styles.vendorImageContainer,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: '1.0s'
              }}
            >
              <img 
                src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800&q=80" 
                alt="Vendor marketplace"
                style={styles.vendorImage}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Vendor Partnership Form Section - Full Width */}
      <div 
        style={{
          ...styles.formSection,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
        }}
      >
        <div style={styles.formContainer}>
          <h2 style={styles.formTitle}>Vendor Partnership</h2>
          
          {/* Contact Form */}
          <form style={styles.form}>
            {/* Name Input Field */}
            <div style={styles.formGroup}>
              <label style={styles.label}>Name</label>
              <input 
                type="text" 
                placeholder="What's your name?" 
                style={styles.input}
              />
            </div>

            {/* Email Input Field */}
            <div style={styles.formGroup}>
              <label style={styles.label}>Email</label>
              <input 
                type="email" 
                placeholder="What's your email?" 
                style={styles.input}
              />
            </div>

            {/* Message Textarea Field */}
            <div style={styles.formGroup}>
              <label style={styles.label}>Message</label>
              <textarea 
                placeholder="Write your message..." 
                style={styles.textarea}
                rows="5"
              />
            </div>

            {/* Privacy Consent Checkbox */}
            <div style={styles.consentGroup}>
              <input 
                type="checkbox" 
                id="consent" 
                style={styles.checkbox}
              />
              <label htmlFor="consent" style={styles.consentLabel}>
                I consent to use of provided personal data for the purpose of responding to the request as described in <span style={styles.privacyLink}>Privacy Policy</span> which I have read. I may withdraw my consent at any time.
              </label>
            </div>

            {/* Submit Button */}
            <button type="submit" style={styles.submitButton}>
              Send Message
            </button>
          </form>
        </div>
      </div>
      
      {/* Footer Component */}
      <Footer />
    </div>
  );
};

/**
 * Inline styles object
 * Contains all component styling organized by section
 */
const styles = {
  //Main page wrapper
  wrapper: {
    minHeight: '100vh',
    backgroundColor: '#ffffff',
    padding: '0',
    width: '100%'
  },
  
  //Main content container
  container: {
    width: '100%',
    margin: '0 auto',
    padding: '80px 60px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    backgroundColor: '#ffffff',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  
  //Main page title
  mainTitle: {
    fontSize: '48px',
    fontWeight: '700',
    textAlign: 'center',
    color: '#000000',
    marginBottom: '80px',
    marginTop: '0',
    width: '100%'
  },
  
  //Two-column grid for content section
  contentSection: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '60px',
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    alignItems: 'center'
  },
  
  //Hero image container
  imageContainer: {
    width: '100%',
    height: '500px',
    overflow: 'hidden',
    borderRadius: '16px',
    transition: 'opacity 0.8s ease, transform 0.8s ease',
    backgroundColor: '#f5f5f5',
    transitionDelay: '0.1s'
  },
  
  //Image element styling
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  
  //Right column content container
  rightContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
    alignItems: 'flex-start',
    width: '100%'
  },
  
  //Section subtitle
  subtitle: {
    fontSize: '42px',
    fontWeight: '700',
    color: '#000000',
    margin: '0',
    lineHeight: '1.2',
    textAlign: 'left',
    width: '100%',
    transition: 'opacity 0.8s ease, transform 0.8s ease',
    transitionDelay: '0.2s'
  },
  
  //Description text
  description: {
    fontSize: '18px',
    lineHeight: '1.6',
    color: '#333333',
    margin: '0',
    width: '100%',
    transition: 'opacity 0.8s ease, transform 0.8s ease',
    transitionDelay: '0.3s'
  },
  
  //Trusted vendors section wrapper
  trustedVendorsSection: {
    width: '100%',
    maxWidth: '1400px',
    margin: '100px auto 0 auto',
    textAlign: 'center'
  },
  
  //Trusted vendors title
  trustedVendorsTitle: {
    fontSize: '48px',
    fontWeight: '700',
    color: '#000000',
    marginBottom: '20px',
    margin: '0 0 20px 0'
  },
  
  //Trusted vendors description
  trustedVendorsDescription: {
    fontSize: '18px',
    lineHeight: '1.6',
    color: '#333333',
    marginBottom: '60px',
    margin: '0 0 60px 0'
  },
  
  //3-column grid for vendor images
  vendorImagesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px',
    width: '100%'
  },
  
  //Base vendor image container
  vendorImageContainer: {
    width: '100%',
    height: '350px',
    overflow: 'hidden',
    borderRadius: '16px',
    backgroundColor: '#f5f5f5',
    transition: 'opacity 0.8s ease, transform 0.8s ease'
  },
  
  //Large image variant - spans 2 columns
  largeImage: {
    gridColumn: 'span 2',
    height: '350px'
  },
  
  //Wide image variant - spans 2 columns
  wideImage: {
    gridColumn: 'span 2',
    height: '350px'
  },
  
  //Vendor image element with zoom effect
  vendorImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.3s ease'
  },
  
  //Full-width form section with background
  formSection: {
    width: '100%',
    backgroundColor: '#f8f8f8',
    padding: '80px 0',
    margin: '100px 0 0 0',
    transition: 'opacity 0.8s ease, transform 0.8s ease',
    transitionDelay: '1.1s'
  },
  
  //Centered form container
  formContainer: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '0 60px'
  },
  
  //Form section title
  formTitle: {
    fontSize: '42px',
    fontWeight: '700',
    color: '#000000',
    textAlign: 'center',
    marginBottom: '40px',
    margin: '0 0 40px 0'
  },
  
  //Form element container
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '25px'
  },
  
  //Individual form field group
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  },
  
  //Form field label
  label: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#000000'
  },
  
  //Text input field styling
  input: {
    padding: '14px 20px',
    fontSize: '16px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#ffffff',
    color: '#333333',
    fontFamily: 'inherit',
    outline: 'none',
    transition: 'border-color 0.3s ease'
  },
  
  //Textarea field styling
  textarea: {
    padding: '14px 20px',
    fontSize: '16px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#ffffff',
    color: '#333333',
    fontFamily: 'inherit',
    outline: 'none',
    resize: 'vertical',
    minHeight: '120px',
    transition: 'border-color 0.3s ease'
  },
  
  //Consent checkbox group container
  consentGroup: {
    display: 'flex',
    gap: '12px',
    alignItems: 'flex-start',
    marginTop: '10px'
  },
  
  //Checkbox input styling
  checkbox: {
    width: '18px',
    height: '18px',
    marginTop: '3px',
    cursor: 'pointer',
    flexShrink: 0
  },
  
  //Consent text label
  consentLabel: {
    fontSize: '14px',
    lineHeight: '1.6',
    color: '#333333'
  },
  
  //Privacy policy link styling
  privacyLink: {
    fontWeight: '700',
    color: '#000000',
    textDecoration: 'underline',
    cursor: 'pointer'
  },
  
  //Form submit button (outline style)
  submitButton: {
    padding: '16px 50px',
    fontSize: '16px',
    fontWeight: '500',
    color: '#000000',
    backgroundColor: 'transparent',
    border: '2px solid #000000',
    borderRadius: '50px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    width: 'fit-content',
    fontFamily: 'inherit',
    alignSelf: 'center',
    marginTop: '10px'
  }
};

/**
 * Dynamic stylesheet injection for enhanced effects and responsive design
 * Adds hover effects and media queries
 */
//Added hover effect and responsive styles
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  /* Global body and root element styles */
  body {
    background-color: #ffffff !important;
    color: #000000 !important;
    margin: 0 !important;
    padding: 0 !important;
    overflow-x: hidden !important;
  }
  
  /* Ensure full width and no margins */
  html, body, #root {
    width: 100% !important;
    margin: 0 !important;
    padding: 0 !important;
  }
  
  /* Hero image container hover effect - lift and shadow */
  div[style*="imageContainer"]:hover {
    transform: translateY(-5px) !important;
    box-shadow: 0 10px 30px rgba(0,0,0,0.15) !important;
  }
  
  /* Vendor image zoom on hover */
  div[style*="vendorImageContainer"]:hover img {
    transform: scale(1.05) !important;
  }
  
  /* Form input focus state */
  input:focus, textarea:focus {
    border-color: #000000 !important;
  }
  
  /* Submit button hover effect - filled state */
  button[type="submit"]:hover {
    background-color: #000000 !important;
    color: #ffffff !important;
  }
  
  /* Tablet Responsive Design - 1024px breakpoint */
  @media (max-width: 1024px) {
    /* Stack content section vertically */
    div[style*="contentSection"] {
      grid-template-columns: 1fr !important;
      gap: 40px !important;
    }
    
    /* Reduce main container padding */
    div[style*="container"] {
      padding: 60px 40px !important;
    }
    
    /* 2-column grid for vendor images */
    div[style*="vendorImagesGrid"] {
      grid-template-columns: repeat(2, 1fr) !important;
    }
    
    /* Large images span 2 columns */
    div[style*="largeImage"] {
      grid-column: span 2 !important;
    }
    
    /* Wide images span 2 columns */
    div[style*="wideImage"] {
      grid-column: span 2 !important;
    }
    
    /* Reduce form container padding */
    div[style*="formContainer"] {
      padding: 0 40px !important;
    }
  }
  
  /* Mobile Responsive Design - 768px breakpoint */
  @media (max-width: 768px) {
    /* Reduce h1 title size */
    h1 {
      font-size: 36px !important;
    }
    
    /* Reduce h2 subtitle size */
    h2 {
      font-size: 32px !important;
    }
    
    /* Reduce main container padding */
    div[style*="container"] {
      padding: 40px 20px !important;
    }
    
    /* Reduce hero image height */
    div[style*="imageContainer"] {
      height: 350px !important;
    }
    
    /* Single column grid for vendor images */
    div[style*="vendorImagesGrid"] {
      grid-template-columns: 1fr !important;
      gap: 15px !important;
    }
    
    /* Large images single column */
    div[style*="largeImage"] {
      grid-column: span 1 !important;
      height: 300px !important;
    }
    
    /* Wide images single column */
    div[style*="wideImage"] {
      grid-column: span 1 !important;
      height: 300px !important;
    }
    
    /* Reduce vendor image height */
    div[style*="vendorImageContainer"] {
      height: 300px !important;
    }
    
    /* Reduce form section padding */
    div[style*="formSection"] {
      padding: 60px 0 !important;
    }
    
    /* Reduce form container padding */
    div[style*="formContainer"] {
      padding: 0 20px !important;
    }
  }
  
  /* Small Mobile Responsive Design - 480px breakpoint */
  @media (max-width: 480px) {
    /* Further reduce h1 title size */
    h1 {
      font-size: 32px !important;
    }
    
    /* Further reduce h2 subtitle size */
    h2 {
      font-size: 28px !important;
    }
    
    /* Further reduce hero image height */
    div[style*="imageContainer"] {
      height: 250px !important;
    }
    
    /* Further reduce vendor image height */
    div[style*="vendorImageContainer"] {
      height: 250px !important;
    }
    
    /* Further reduce large image height */
    div[style*="largeImage"] {
      height: 250px !important;
    }
    
    /* Further reduce wide image height */
    div[style*="wideImage"] {
      height: 250px !important;
    }
  }
`;

//Inject stylesheet into document head
document.head.appendChild(styleSheet);

export default Vendors;