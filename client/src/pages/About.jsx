// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Navbar from '../component/Navbar';
// import Footer from '../component/Footer';

// const About = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     //Trigger fade-in animation after component mounts
//     const timer = setTimeout(() => {
//       setIsVisible(true);
//     }, 100);

//     return () => clearTimeout(timer);
//   }, []);

//   const handleShopNow = () => {
//     navigate('/shop');
//   };

//   return (
//     <div style={styles.wrapper}>
//       <Navbar />
//       <div style={styles.container}>
//         {/* About Title */}
//         <h1 style={styles.mainTitle}>About</h1>

//         {/* Content Section */}
//         <div style={styles.contentSection}>
//           {/* Left Side - About Dmandu */}
//           <div style={styles.leftContent}>
//             <h2 style={styles.subtitle}>About Dmandu</h2>
//           </div>

//           {/* Right Side - Description and Button */}
//           <div style={styles.rightContent}>
//             <p style={styles.description}>
//               Dmandu is an online fashion marketplace connecting trusted vendors to offer a wide selection of authentic branded clothing at competitive prices.
//             </p>
//             <button 
//               style={styles.shopButton}
//               onClick={handleShopNow}
//               className="shop-now-btn"
//             >
//               Shop Now
//             </button>
//           </div>
//         </div>

//         {/* Images Section */}
//         <div style={styles.imagesSection}>
//           <div 
//             style={{
//               ...styles.imageContainer,
//               ...styles.imageLeft,
//               opacity: isVisible ? 1 : 0,
//               transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
//             }}
//           >
//             <img 
//               src="https://images.unsplash.com/photo-1555529902-5261145633bf?w=800&q=80" 
//               alt="Market scene"
//               style={styles.image}
//             />
//           </div>
//           <div 
//             style={{
//               ...styles.imageContainer,
//               ...styles.imageRight,
//               opacity: isVisible ? 1 : 0,
//               transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
//             }}
//           >
//             <img 
//               src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&q=80" 
//               alt="Street market"
//               style={styles.image}
//             />
//           </div>
//         </div>
//       </div>

//       {/* Customer Feedback Section - Full Width */}
//       <div 
//         style={{
//           ...styles.feedbackSection,
//           opacity: isVisible ? 1 : 0,
//           transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
//         }}
//       >
//         <div style={styles.feedbackOverlay}>
//           <div style={styles.feedbackContent}>
//             <p style={styles.feedbackLabel}>Customer Feedback</p>
//             <blockquote style={styles.feedbackQuote}>
//               "I love shopping at dmandu! The variety of authentic brands and the seamless delivery from trusted vendors make it my go-to fashion marketplace."
//             </blockquote>
//           </div>
//         </div>
//       </div>

//       {/* Shop Authentic Fashion Section */}
//       <div 
//         style={{
//           ...styles.shopAuthenticSection,
//           opacity: isVisible ? 1 : 0,
//           transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
//         }}
//       >
//         <h2 style={styles.shopAuthenticTitle}>Shop Authentic Fashion</h2>
//         <p style={styles.shopAuthenticDescription}>
//           Discover a wide selection of genuine branded apparel from trusted vendors at competitive prices. Experience seamless shopping today!
//         </p>
//         <button 
//           style={styles.shopButton}
//           onClick={handleShopNow}
//           className="shop-now-btn"
//         >
//           Shop Now
//         </button>
//       </div>
      
//       <Footer />
//     </div>
//   );
// };

// const styles = {
//   wrapper: {
//     minHeight: '100vh',
//     backgroundColor: '#ffffff',
//     padding: '0',
//     width: '100%'
//   },
//   container: {
//     width: '100%',
//     margin: '0 auto',
//     padding: '80px 60px',
//     fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
//     backgroundColor: '#ffffff',
//     boxSizing: 'border-box',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center'
//   },
//   mainTitle: {
//     fontSize: '48px',
//     fontWeight: '700',
//     textAlign: 'center',
//     color: '#000000',
//     marginBottom: '80px',
//     marginTop: '0',
//     width: '100%'
//   },
//   contentSection: {
//     display: 'grid',
//     gridTemplateColumns: '1fr 1fr',
//     gap: '60px',
//     width: '100%',
//     maxWidth: '1200px',
//     margin: '0 auto 80px auto',
//     alignItems: 'start'
//   },
//   leftContent: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'flex-start'
//   },
//   subtitle: {
//     fontSize: '42px',
//     fontWeight: '700',
//     color: '#000000',
//     margin: '0',
//     lineHeight: '1.2',
//     textAlign: 'left',
//     width: '100%'
//   },
//   rightContent: {
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '30px',
//     alignItems: 'flex-start',
//     width: '100%'
//   },
//   description: {
//     fontSize: '18px',
//     lineHeight: '1.6',
//     color: '#333333',
//     margin: '0',
//     width: '100%'
//   },
//   shopButton: {
//     padding: '14px 50px',
//     fontSize: '16px',
//     fontWeight: '500',
//     color: '#000000',
//     backgroundColor: 'transparent',
//     border: '2px solid #000000',
//     borderRadius: '50px',
//     cursor: 'pointer',
//     transition: 'all 0.3s ease',
//     width: 'fit-content',
//     fontFamily: 'inherit'
//   },
//   imagesSection: {
//     display: 'grid',
//     gridTemplateColumns: '1fr 1.4fr',
//     gap: '40px',
//     width: '100%',
//     maxWidth: '1200px',
//     margin: '0 auto',
//     marginTop: '60px'
//   },
//   imageContainer: {
//     width: '100%',
//     height: '450px',
//     overflow: 'hidden',
//     borderRadius: '16px',
//     transition: 'opacity 0.8s ease, transform 0.8s ease',
//     backgroundColor: '#f5f5f5'
//   },
//   imageLeft: {
//     transitionDelay: '0.1s'
//   },
//   imageRight: {
//     transitionDelay: '0.3s'
//   },
//   image: {
//     width: '100%',
//     height: '100%',
//     objectFit: 'cover'
//   },
//   feedbackSection: {
//     width: '100%',
//     height: '400px',
//     position: 'relative',
//     backgroundImage: 'url(https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1400&q=80)',
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     margin: '80px 0 0 0',
//     transition: 'opacity 0.8s ease, transform 0.8s ease'
//   },
//   feedbackOverlay: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: '100%'
//   },
//   feedbackContent: {
//     maxWidth: '1200px',
//     width: '100%',
//     padding: '0 60px',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'flex-start'
//   },
//   feedbackLabel: {
//     fontSize: '32px',
//     color: '#ffffff',
//     marginBottom: '30px',
//     fontWeight: '800',
//     margin: '0 0 30px 0',
//     textTransform: 'uppercase',
//     letterSpacing: '2px'
//   },
//   feedbackQuote: {
//     fontSize: '28px',
//     lineHeight: '1.5',
//     color: '#ffffff',
//     fontWeight: '600',
//     margin: '0',
//     maxWidth: '900px',
//     fontStyle: 'normal'
//   },
//   shopAuthenticSection: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     textAlign: 'center',
//     padding: '80px 60px',
//     backgroundColor: '#ffffff',
//     transition: 'opacity 0.8s ease, transform 0.8s ease'
//   },
//   shopAuthenticTitle: {
//     fontSize: '42px',
//     fontWeight: '700',
//     color: '#000000',
//     marginBottom: '30px',
//     marginTop: '0'
//   },
//   shopAuthenticDescription: {
//     fontSize: '18px',
//     lineHeight: '1.6',
//     color: '#333333',
//     marginBottom: '40px',
//     maxWidth: '600px'
//   }
// };

// //Added enhanced hover effects and responsive styles
// const styleSheet = document.createElement('style');
// styleSheet.textContent = `
//   body {
//     background-color: #ffffff !important;
//     color: #000000 !important;
//     margin: 0 !important;
//     padding: 0 !important;
//     overflow-x: hidden !important;
//   }
  
//   html, body, #root {
//     width: 100% !important;
//     margin: 0 !important;
//     padding: 0 !important;
//   }
  
//   .shop-now-btn {
//     position: relative;
//     overflow: hidden;
//     transition: all 0.4s ease !important;
//   }
  
//   .shop-now-btn:hover {
//     background-color: #000000 !important;
//     color: #ffffff !important;
//     transform: translateY(-2px) !important;
//     box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2) !important;
//   }
  
//   .shop-now-btn:active {
//     transform: translateY(0) !important;
//     box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2) !important;
//   }
  
//   .shop-now-btn::before {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: -100%;
//     width: 100%;
//     height: 100%;
//     background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
//     transition: left 0.5s ease;
//   }
  
//   .shop-now-btn:hover::before {
//     left: 100%;
//   }
  
//   div[style*="imageContainer"]:hover {
//     transform: translateY(-5px) !important;
//     box-shadow: 0 10px 30px rgba(0,0,0,0.15) !important;
//   }
  
//   @media (max-width: 1024px) {
//     div[style*="contentSection"] {
//       grid-template-columns: 1fr !important;
//       gap: 40px !important;
//     }
    
//     div[style*="imagesSection"] {
//       grid-template-columns: 1fr !important;
//       gap: 30px !important;
//     }
    
//     div[style*="container"] {
//       padding: 60px 40px !important;
//     }
    
//     div[style*="feedbackContent"] {
//       padding: 0 40px !important;
//     }
    
//     p[style*="feedbackLabel"] {
//       font-size: 28px !important;
//     }
    
//     blockquote[style*="feedbackQuote"] {
//       font-size: 24px !important;
//     }
    
//     div[style*="shopAuthenticSection"] {
//       padding: 60px 40px !important;
//     }
    
//     h2[style*="shopAuthenticTitle"] {
//       font-size: 36px !important;
//     }
//   }
  
//   @media (max-width: 768px) {
//     h1 {
//       font-size: 36px !important;
//     }
    
//     h2 {
//       font-size: 32px !important;
//     }
    
//     p[style*="feedbackLabel"] {
//       font-size: 24px !important;
//     }
    
//     blockquote[style*="feedbackQuote"] {
//       font-size: 20px !important;
//     }
    
//     div[style*="feedbackSection"] {
//       height: 350px !important;
//     }
    
//     div[style*="feedbackContent"] {
//       padding: 0 30px !important;
//     }
    
//     div[style*="container"] {
//       padding: 40px 20px !important;
//     }
    
//     div[style*="imageContainer"] {
//       height: 350px !important;
//     }
    
//     div[style*="shopAuthenticSection"] {
//       padding: 40px 20px !important;
//     }
    
//     h2[style*="shopAuthenticTitle"] {
//       font-size: 28px !important;
//     }
//   }
  
//   @media (max-width: 480px) {
//     h1 {
//       font-size: 32px !important;
//     }
    
//     h2 {
//       font-size: 28px !important;
//     }
    
//     p[style*="feedbackLabel"] {
//       font-size: 20px !important;
//     }
    
//     blockquote[style*="feedbackQuote"] {
//       font-size: 18px !important;
//     }
    
//     div[style*="imageContainer"] {
//       height: 250px !important;
//     }
    
//     div[style*="feedbackContent"] {
//       padding: 0 20px !important;
//     }
    
//     h2[style*="shopAuthenticTitle"] {
//       font-size: 24px !important;
//     }
    
//     .shop-now-btn {
//       padding: 12px 40px !important;
//       font-size: 14px !important;
//     }
//   }
// `;
// document.head.appendChild(styleSheet);

// export default About;


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';

const About = () => {
  //State to control visibility for fade-in animations
  const [isVisible, setIsVisible] = useState(false);
  
  //Navigation hook for programmatic routing
  const navigate = useNavigate();

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

  /**
   * Navigate to shop page when Shop Now button is clicked
   */
  const handleShopNow = () => {
    navigate('/shop');
  };

  return (
    <div style={styles.wrapper}>
      {/* Navigation Bar */}
      <Navbar />
      
      {/* Main Content Container */}
      <div style={styles.container}>
        {/* Page Title */}
        <h1 style={styles.mainTitle}>About</h1>

        {/* Two-Column Content Section */}
        <div style={styles.contentSection}>
          {/* Left Column - Section Title */}
          <div style={styles.leftContent}>
            <h2 style={styles.subtitle}>About Dmandu</h2>
          </div>

          {/* Right Column - Description and CTA Button */}
          <div style={styles.rightContent}>
            <p style={styles.description}>
              Dmandu is an online fashion marketplace connecting trusted vendors to offer a wide selection of authentic branded clothing at competitive prices.
            </p>
            <button 
              style={styles.shopButton}
              onClick={handleShopNow}
              className="shop-now-btn"
            >
              Shop Now
            </button>
          </div>
        </div>

        {/* Two-Column Images Section */}
        <div style={styles.imagesSection}>
          {/* Left Image - Smaller Column */}
          <div 
            style={{
              ...styles.imageContainer,
              ...styles.imageLeft,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
            }}
          >
            <img 
              src="https://images.unsplash.com/photo-1555529902-5261145633bf?w=800&q=80" 
              alt="Market scene"
              style={styles.image}
            />
          </div>
          
          {/* Right Image - Larger Column */}
          <div 
            style={{
              ...styles.imageContainer,
              ...styles.imageRight,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
            }}
          >
            <img 
              src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&q=80" 
              alt="Street market"
              style={styles.image}
            />
          </div>
        </div>
      </div>

      {/* Customer Feedback Section - Full Width with Background Image */}
      <div 
        style={{
          ...styles.feedbackSection,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
        }}
      >
        {/* Dark overlay for better text readability */}
        <div style={styles.feedbackOverlay}>
          <div style={styles.feedbackContent}>
            <p style={styles.feedbackLabel}>Customer Feedback</p>
            <blockquote style={styles.feedbackQuote}>
              "I love shopping at dmandu! The variety of authentic brands and the seamless delivery from trusted vendors make it my go-to fashion marketplace."
            </blockquote>
          </div>
        </div>
      </div>

      {/* Shop Authentic Fashion CTA Section */}
      <div 
        style={{
          ...styles.shopAuthenticSection,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
        }}
      >
        <h2 style={styles.shopAuthenticTitle}>Shop Authentic Fashion</h2>
        <p style={styles.shopAuthenticDescription}>
          Discover a wide selection of genuine branded apparel from trusted vendors at competitive prices. Experience seamless shopping today!
        </p>
        <button 
          style={styles.shopButton}
          onClick={handleShopNow}
          className="shop-now-btn"
        >
          Shop Now
        </button>
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
    margin: '0 auto 80px auto',
    alignItems: 'start'
  },
  
  //Left column container
  leftContent: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  
  //Section subtitle
  subtitle: {
    fontSize: '42px',
    fontWeight: '700',
    color: '#000000',
    margin: '0',
    lineHeight: '1.2',
    textAlign: 'left',
    width: '100%'
  },
  
  //Right column container
  rightContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
    alignItems: 'flex-start',
    width: '100%'
  },
  
  //Description text
  description: {
    fontSize: '18px',
    lineHeight: '1.6',
    color: '#333333',
    margin: '0',
    width: '100%'
  },
  
  //Shop Now button (outline style)
  shopButton: {
    padding: '14px 50px',
    fontSize: '16px',
    fontWeight: '500',
    color: '#000000',
    backgroundColor: 'transparent',
    border: '2px solid #000000',
    borderRadius: '50px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    width: 'fit-content',
    fontFamily: 'inherit'
  },
  
  //Grid layout for images (1:1.4 ratio)
  imagesSection: {
    display: 'grid',
    gridTemplateColumns: '1fr 1.4fr',
    gap: '40px',
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    marginTop: '60px'
  },
  
  //Base image container styling
  imageContainer: {
    width: '100%',
    height: '450px',
    overflow: 'hidden',
    borderRadius: '16px',
    transition: 'opacity 0.8s ease, transform 0.8s ease',
    backgroundColor: '#f5f5f5'
  },
  
  //Left image animation delay
  imageLeft: {
    transitionDelay: '0.1s'
  },
  
  //Right image animation delay
  imageRight: {
    transitionDelay: '0.3s'
  },
  
  //Image element styling
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  
  //Full-width feedback section with background image
  feedbackSection: {
    width: '100%',
    height: '400px',
    position: 'relative',
    backgroundImage: 'url(https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1400&q=80)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    margin: '80px 0 0 0',
    transition: 'opacity 0.8s ease, transform 0.8s ease'
  },
  
  //Dark overlay for better text contrast
  feedbackOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  
  //Feedback content container
  feedbackContent: {
    maxWidth: '1200px',
    width: '100%',
    padding: '0 60px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  
  //Customer Feedback label
  feedbackLabel: {
    fontSize: '32px',
    color: '#ffffff',
    marginBottom: '30px',
    fontWeight: '800',
    margin: '0 0 30px 0',
    textTransform: 'uppercase',
    letterSpacing: '2px'
  },
  
  //Customer testimonial quote
  feedbackQuote: {
    fontSize: '28px',
    lineHeight: '1.5',
    color: '#ffffff',
    fontWeight: '600',
    margin: '0',
    maxWidth: '900px',
    fontStyle: 'normal'
  },
  
  //Final CTA section
  shopAuthenticSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '80px 60px',
    backgroundColor: '#ffffff',
    transition: 'opacity 0.8s ease, transform 0.8s ease'
  },
  
  //Shop Authentic title
  shopAuthenticTitle: {
    fontSize: '42px',
    fontWeight: '700',
    color: '#000000',
    marginBottom: '30px',
    marginTop: '0'
  },
  
  //Shop Authentic description
  shopAuthenticDescription: {
    fontSize: '18px',
    lineHeight: '1.6',
    color: '#333333',
    marginBottom: '40px',
    maxWidth: '600px'
  }
};

/**
 * Dynamic stylesheet injection for enhanced effects and responsive design
 * Adds hover effects, animations, and media queries
 */
//Added enhanced hover effects and responsive styles
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
  
  /* Shop Now button base styling */
  .shop-now-btn {
    position: relative;
    overflow: hidden;
    transition: all 0.4s ease !important;
  }
  
  /* Shop Now button hover effect - filled state */
  .shop-now-btn:hover {
    background-color: #000000 !important;
    color: #ffffff !important;
    transform: translateY(-2px) !important;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2) !important;
  }
  
  /* Shop Now button active/pressed state */
  .shop-now-btn:active {
    transform: translateY(0) !important;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2) !important;
  }
  
  /* Shine effect animation on button hover */
  .shop-now-btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s ease;
  }
  
  /* Trigger shine effect on hover */
  .shop-now-btn:hover::before {
    left: 100%;
  }
  
  /* Image container hover effect - lift and shadow */
  div[style*="imageContainer"]:hover {
    transform: translateY(-5px) !important;
    box-shadow: 0 10px 30px rgba(0,0,0,0.15) !important;
  }
  
  /* Tablet Responsive Design - 1024px breakpoint */
  @media (max-width: 1024px) {
    /* Stack content section vertically */
    div[style*="contentSection"] {
      grid-template-columns: 1fr !important;
      gap: 40px !important;
    }
    
    /* Stack images vertically */
    div[style*="imagesSection"] {
      grid-template-columns: 1fr !important;
      gap: 30px !important;
    }
    
    /* Reduce main container padding */
    div[style*="container"] {
      padding: 60px 40px !important;
    }
    
    /* Reduce feedback content padding */
    div[style*="feedbackContent"] {
      padding: 0 40px !important;
    }
    
    /* Reduce feedback label size */
    p[style*="feedbackLabel"] {
      font-size: 28px !important;
    }
    
    /* Reduce feedback quote size */
    blockquote[style*="feedbackQuote"] {
      font-size: 24px !important;
    }
    
    /* Reduce shop authentic section padding */
    div[style*="shopAuthenticSection"] {
      padding: 60px 40px !important;
    }
    
    /* Reduce shop authentic title size */
    h2[style*="shopAuthenticTitle"] {
      font-size: 36px !important;
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
    
    /* Reduce feedback label size */
    p[style*="feedbackLabel"] {
      font-size: 24px !important;
    }
    
    /* Reduce feedback quote size */
    blockquote[style*="feedbackQuote"] {
      font-size: 20px !important;
    }
    
    /* Reduce feedback section height */
    div[style*="feedbackSection"] {
      height: 350px !important;
    }
    
    /* Reduce feedback content padding */
    div[style*="feedbackContent"] {
      padding: 0 30px !important;
    }
    
    /* Reduce main container padding */
    div[style*="container"] {
      padding: 40px 20px !important;
    }
    
    /* Reduce image container height */
    div[style*="imageContainer"] {
      height: 350px !important;
    }
    
    /* Reduce shop authentic section padding */
    div[style*="shopAuthenticSection"] {
      padding: 40px 20px !important;
    }
    
    /* Reduce shop authentic title size */
    h2[style*="shopAuthenticTitle"] {
      font-size: 28px !important;
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
    
    /* Further reduce feedback label size */
    p[style*="feedbackLabel"] {
      font-size: 20px !important;
    }
    
    /* Further reduce feedback quote size */
    blockquote[style*="feedbackQuote"] {
      font-size: 18px !important;
    }
    
    /* Further reduce image container height */
    div[style*="imageContainer"] {
      height: 250px !important;
    }
    
    /* Further reduce feedback content padding */
    div[style*="feedbackContent"] {
      padding: 0 20px !important;
    }
    
    /* Further reduce shop authentic title size */
    h2[style*="shopAuthenticTitle"] {
      font-size: 24px !important;
    }
    
    /* Adjust button size for small screens */
    .shop-now-btn {
      padding: 12px 40px !important;
      font-size: 14px !important;
    }
  }
`;

//Inject stylesheet into document head
document.head.appendChild(styleSheet);

export default About;