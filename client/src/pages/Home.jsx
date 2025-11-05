import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';

const Home = () => {
  //State to track which items are visible in viewport for animation triggers
  const [visibleItems, setVisibleItems] = useState(new Set());
  
  //Ref to store IntersectionObserver instance
  const observerRef = useRef(null);
  
  //Navigation hook for programmatic routing
  const navigate = useNavigate();

  /**
   * Initialize IntersectionObserver to detect when elements enter viewport
   * Used for scroll-based animations
   */
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          //Add element to visibleItems when it enters viewport
          if (entry.isIntersecting) {
            setVisibleItems((prev) => new Set([...prev, entry.target.dataset.index]));
          }
        });
      },
      { threshold: 0.1 } //Trigger when 10% of element is visible
    );

    //Cleanup observer on component unmount
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  /**
   * Observe all elements with data-animate attribute
   * Sets up intersection observation for scroll animations
   */
  useEffect(() => {
    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => {
      if (observerRef.current) {
        observerRef.current.observe(el);
      }
    });
  }, []);

  /**
   * Navigate to shop page when Shop Now button is clicked
   */
  const handleShopNow = () => {
    navigate('/shop');
  };

  //Sample data for clothing items carousel
  const clothingItems = [
    { id: 1, name: 'Classic White Tee', price: 'Rs29.99', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop' },
    { id: 2, name: 'Casual Sneaker', price: 'Rs89.99', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop' },
    { id: 3, name: 'Summer Dress', price: 'Rs59.99', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop' },
    { id: 4, name: 'Leather Boots', price: 'Rs129.99', image: 'https://images.unsplash.com/photo-1605812860427-4024433a70fd?w=400&h=400&fit=crop' },
    { id: 5, name: 'Wool Sweater', price: 'Rs79.99', image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=400&fit=crop' },
    { id: 6, name: 'Silk Scarf', price: 'Rs39.99', image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400&h=400&fit=crop' },
    { id: 7, name: 'Casual Sneakers', price: 'Rs99.99', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop' },
  ];

  //Sample data for branded fashion items grid
  const brandedItems = [
    { id: 1, name: 'Premium Streetwear', price: 'Rs 69.99', image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=300&fit=crop' },
    { id: 2, name: 'Designer Hoodies', price: 'Rs 79.99', image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=300&fit=crop' },
    { id: 3, name: 'Luxury Activewear', price: 'Rs 89.99', image: 'https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=400&h=300&fit=crop' },
    { id: 4, name: 'Casual Fashion', price: 'Rs 59.99', image: 'https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=400&h=300&fit=crop' },
    { id: 5, name: 'Trendy Collection', price: 'Rs 99.99', image: 'https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=400&h=300&fit=crop' },
  ];

  return (
    <div style={styles.container}>
      {/* Navigation Bar */}
      <Navbar />
      
      {/* Main Hero Section */}
      <div style={styles.heroSection}>
        {/* Featured Collection - Horizontal Scrollable Carousel */}
        <div style={styles.featuredSection}>
          <h2 
            style={styles.featuredTitle}
            data-animate
            data-index="title"
            className={visibleItems.has('title') ? 'fade-in-up' : 'fade-hidden'}
          >
            Discover Our Collection
          </h2>
          
          {/* Horizontal scroll container for clothing items */}
          <div style={styles.scrollContainer}>
            <div style={styles.itemsRow}>
              {clothingItems.map((item, index) => (
                <div 
                  key={item.id} 
                  style={styles.itemCard}
                  data-animate
                  data-index={`item-${index}`}
                  className={visibleItems.has(`item-${index}`) ? 'fade-in-up' : 'fade-hidden'}
                >
                  {/* Circular image container with hover effects */}
                  <div style={styles.circleContainer} className="item-hover">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      style={styles.itemImage}
                      className="item-image"
                    />
                  </div>
                  <h3 style={styles.itemName}>{item.name}</h3>
                  <p style={styles.itemPrice}>{item.price}</p>
                  <button style={styles.addButton} className="add-button">Add to Cart</button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Branded Fashion Section - Grid Layout */}
        <div style={styles.brandedSection}>
          <h2 
            style={styles.brandedTitle}
            data-animate
            data-index="branded-title"
            className={visibleItems.has('branded-title') ? 'fade-in-up' : 'fade-hidden'}
          >
            Branded Fashion
          </h2>
          
          {/* 5-column grid for branded items */}
          <div style={styles.brandedGrid}>
            {brandedItems.map((item, index) => (
              <div 
                key={item.id} 
                style={styles.brandedCard}
                data-animate
                data-index={`branded-${index}`}
                className={visibleItems.has(`branded-${index}`) ? 'fade-in-up' : 'fade-hidden'}
              >
                <img 
                  src={item.image} 
                  alt={item.name}
                  style={styles.brandedImage}
                  className="branded-image"
                />
                <h3 style={styles.brandedName}>{item.name}</h3>
                <p style={styles.brandedPrice}>{item.price}</p>
              </div>
            ))}
          </div>
          
          {/* Shop Now CTA Button */}
          <div style={styles.shopNowContainer}>
            <button 
              style={styles.shopNowButton} 
              className="shop-now-button"
              onClick={handleShopNow}
            >
              Shop Now
            </button>
          </div>
        </div>

        {/* About Dmandu Section - Two Column Layout */}
        <div style={styles.aboutSection}>
          <div style={styles.aboutContainer}>
            {/* Left Column - Image */}
            <div 
              style={styles.aboutImage}
              data-animate
              data-index="about-image"
              className={visibleItems.has('about-image') ? 'fade-in-left' : 'fade-hidden'}
            >
              <img 
                src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&h=600&fit=crop" 
                alt="Dmandu marketplace"
                style={styles.aboutImg}
              />
            </div>
            
            {/* Right Column - Content */}
            <div 
              style={styles.aboutContent}
              data-animate
              data-index="about-content"
              className={visibleItems.has('about-content') ? 'fade-in-right' : 'fade-hidden'}
            >
              <h2 style={styles.aboutTitle}>About Dmandu</h2>
              <p style={styles.aboutText}>
                Dmandu is your go-to online fashion marketplace, connecting you with trusted vendors for authentic branded clothing at competitive prices.
              </p>
              <button 
                style={styles.aboutButton} 
                className="about-button"
                onClick={handleShopNow}
              >
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer Component */}
      <Footer />

      {/* Internal Styles - Animations and Responsive Design */}
      <style>{`
        /* Fade in from bottom animation */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Fade in from left animation */
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Fade in from right animation */
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Hidden state before animation triggers */
        .fade-hidden {
          opacity: 0;
        }

        /* Apply fade-in-up animation */
        .fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        /* Apply fade-in-left animation */
        .fade-in-left {
          animation: fadeInLeft 0.8s ease-out forwards;
        }

        /* Apply fade-in-right animation */
        .fade-in-right {
          animation: fadeInRight 0.8s ease-out forwards;
        }

        /* Custom scrollbar styling for horizontal scroll */
        .scroll-container::-webkit-scrollbar {
          height: 8px;
        }
        
        .scroll-container::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        
        .scroll-container::-webkit-scrollbar-thumb {
          background: #888;
          border-radius: 10px;
        }
        
        .scroll-container::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
        
        /* Hover effects for clothing items */
        .item-hover {
          transition: box-shadow 0.3s, transform 0.3s;
          cursor: pointer;
          position: relative;
          z-index: 1;
        }

        .item-hover:hover {
          transform: translateY(-5px) scale(1.3);
          box-shadow: 0 15px 40px rgba(0,0,0,0.25) !important;
          z-index: 10;
        }
        
        .item-hover:hover .item-image {
          transform: scale(1.1);
        }

        /* Smooth image zoom on hover */
        .item-image {
          transition: transform 0.3s;
        }
        
        /* Add to Cart button hover effect */
        .add-button {
          transition: background-color 0.3s;
        }

        .add-button:hover {
          background-color: #333 !important;
        }
        
        /* Shop Now button hover effect */
        .shop-now-button {
          transition: all 0.3s;
        }

        .shop-now-button:hover {
          background-color: black !important;
          color: white !important;
        }
        
        /* About section button hover effect */
        .about-button {
          transition: all 0.3s;
        }

        .about-button:hover {
          background-color: #333 !important;
          transform: translateY(-2px);
        }
        
        /* Branded image zoom on hover */
        .branded-image {
          transition: transform 0.3s;
        }

        .branded-image:hover {
          transform: scale(1.03);
        }
        
        /* Tablet Responsive Design - 1024px breakpoint */
        @media (max-width: 1024px) {
          div[style*="brandedGrid"] {
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 25px !important;
          }
          
          div[style*="itemsRow"] {
            gap: 40px !important;
          }
          
          h3[style*="brandedName"] {
            font-size: 1.1rem !important;
          }
          
          p[style*="brandedPrice"] {
            font-size: 1rem !important;
          }
        }
        
        /* Mobile Responsive Design - 768px breakpoint */
        @media (max-width: 768px) {
          div[style*="brandedGrid"] {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 20px !important;
          }
          
          div[style*="itemsRow"] {
            gap: 30px !important;
            padding: 0 20px !important;
          }
          
          div[style*="circleContainer"] {
            width: 220px !important;
            height: 220px !important;
          }
          
          div[style*="aboutContainer"] {
            flex-direction: column !important;
            gap: 40px !important;
          }
          
          h3[style*="brandedName"] {
            font-size: 1rem !important;
          }
          
          p[style*="brandedPrice"] {
            font-size: 0.95rem !important;
          }
        }
        
        /* Small Mobile Responsive Design - 480px breakpoint */
        @media (max-width: 480px) {
          div[style*="brandedGrid"] {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          
          div[style*="itemsRow"] {
            gap: 25px !important;
            padding: 0 15px !important;
          }
          
          div[style*="circleContainer"] {
            width: 200px !important;
            height: 200px !important;
          }
        }
      `}</style>
    </div>
  );
};

/**
 * Inline styles object
 * Contains all component styling organized by section
 */
const styles = {
  //Main container - Full page wrapper
  container: {
    minHeight: '100vh',
    width: '100%',
    backgroundColor: 'white',
    margin: 0,
    padding: 0,
  },
  
  //Hero section wrapper
  heroSection: {
    width: '100%',
    padding: '40px 20px',
    boxSizing: 'border-box',
  },
  
  //Featured collection section
  featuredSection: {
    marginTop: '40px',
    width: '100%',
  },
  
  //Featured section title
  featuredTitle: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '40px',
    marginTop: '0px',
    textAlign: 'center',
    letterSpacing: '1px',
    color: 'black',
  },
  
  //Horizontal scrollable container
  scrollContainer: {
    width: '100%',
    overflowX: 'auto',
    overflowY: 'hidden',
    padding: '20px 0',
    margin: '0 auto',
    maxWidth: '1400px',
  },
  
  //Flex row for clothing items
  itemsRow: {
    display: 'flex',
    gap: '40px',
    width: 'max-content',
    padding: '0 40px',
    justifyContent: 'flex-start',
  },
  
  //Individual clothing item card
  itemCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minWidth: '280px',
    flexShrink: 0,
  },
  
  //Circular image container
  circleContainer: {
    width: '250px',
    height: '250px',
    borderRadius: '50%',
    overflow: 'hidden',
    backgroundColor: '#f5f5f5',
    marginBottom: '25px',
    cursor: 'pointer',
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
    flexShrink: 0,
  },
  
  //Item image styling
  itemImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  
  //Item name text
  itemName: {
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: '10px',
    fontSize: '1.1rem',
  },
  
  //Item price text
  itemPrice: {
    color: '#666',
    marginBottom: '20px',
    fontSize: '1rem',
  },
  
  //Add to Cart button
  addButton: {
    backgroundColor: 'black',
    color: 'white',
    padding: '12px 35px',
    borderRadius: '50px',
    border: 'none',
    fontSize: '0.95rem',
    cursor: 'pointer',
    fontWeight: '500',
  },
  
  //Branded fashion section wrapper
  brandedSection: {
    marginTop: '100px',
    width: '100%',
    padding: '40px 0px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  
  //Branded section title
  brandedTitle: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '40px',
    textAlign: 'center',
    letterSpacing: '1px',
    color: 'black',
    maxWidth: '1600px',
    width: '100%',
  },
  
  //Grid layout for branded items (5 columns)
  brandedGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gap: '30px',
    maxWidth: '1600px',
    width: '100%',
    padding: '0 40px',
    marginBottom: '40px',
  },
  
  //Individual branded item card
  brandedCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  
  //Branded item image
  brandedImage: {
    width: '100%',
    height: '300px',
    objectFit: 'cover',
    borderRadius: '8px',
    marginBottom: '20px',
    cursor: 'pointer',
  },
  
  //Branded item name
  brandedName: {
    fontWeight: '600',
    fontSize: '1.2rem',
    marginBottom: '10px',
    color: 'black',
    lineHeight: '1.3',
  },
  
  //Branded item price
  brandedPrice: {
    color: '#666',
    fontSize: '1.1rem',
    fontWeight: '500',
  },
  
  //Shop Now button container
  shopNowContainer: {
    textAlign: 'center',
    marginTop: '40px',
  },
  
  //Shop Now button (outline style)
  shopNowButton: {
    backgroundColor: 'white',
    color: 'black',
    padding: '12px 40px',
    borderRadius: '50px',
    border: '2px solid black',
    fontSize: '1rem',
    cursor: 'pointer',
    fontWeight: '500',
  },
  
  //About section wrapper
  aboutSection: {
    marginTop: '100px',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '60px 40px',
  },
  
  //About section two-column container
  aboutContainer: {
    display: 'flex',
    gap: '80px',
    alignItems: 'center',
    maxWidth: '1400px',
    width: '100%',
  },
  
  //About section image column
  aboutImage: {
    flex: '1',
    maxWidth: '700px',
  },
  
  //About section image element
  aboutImg: {
    width: '100%',
    height: '500px',
    borderRadius: '24px',
    objectFit: 'cover',
    boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
  },
  
  //About section content column
  aboutContent: {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    maxWidth: '600px',
  },
  
  //About section title
  aboutTitle: {
    fontSize: '3.5rem',
    fontWeight: 'bold',
    marginBottom: '30px',
    color: 'black',
    lineHeight: '1.2',
  },
  
  //About section description text
  aboutText: {
    fontSize: '1.2rem',
    lineHeight: '1.9',
    color: '#444',
    marginBottom: '40px',
    fontWeight: '400',
  },
  
  //About section CTA button
  aboutButton: {
    backgroundColor: 'black',
    color: 'white',
    padding: '15px 50px',
    borderRadius: '50px',
    border: 'none',
    fontSize: '1.1rem',
    cursor: 'pointer',
    fontWeight: '500',
    boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
  },
};

export default Home;