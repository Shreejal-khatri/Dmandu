import React, { useState, useEffect } from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';

const Shop = () => {
  //State to control visibility for fade-in animations
  const [isVisible, setIsVisible] = useState(false);
  
  //State to track which product is currently being hovered
  const [hoveredProduct, setHoveredProduct] = useState(null);

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

  //Product catalog data
  const products = [
    {
      id: 1,
      title: 'Authentic Branded Apparel',
      price: 'Rs 49.99',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80'
    },
    {
      id: 2,
      title: 'Authentic Branded Fashion',
      price: 'Rs 49.99',
      image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800&q=80'
    },
    {
      id: 3,
      title: 'Trendy Branded Apparel',
      price: 'Rs 49.99',
      image: 'https://images.unsplash.com/photo-1555529902-5261145633bf?w=800&q=80'
    },
    {
      id: 4,
      title: 'Premium Fashion Wear',
      price: 'Rs 59.99',
      image: 'https://images.unsplash.com/photo-1593030103066-0093718efeb9?w=800&q=80'
    },
    {
      id: 5,
      title: 'Designer Collection',
      price: 'Rs 69.99',
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80'
    },
    {
      id: 6,
      title: 'Casual Streetwear',
      price: 'Rs 44.99',
      image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80'
    },
    {
      id: 7,
      title: 'Luxury Winter Coat',
      price: 'Rs 89.99',
      image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80'
    },
    {
      id: 8,
      title: 'Elegant Evening Dress',
      price: 'Rs 79.99',
      image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80'
    }
  ];

  return (
    <div style={styles.wrapper}>
      {/* Navigation Bar */}
      <Navbar />
      
      {/* Main Content Container */}
      <div style={styles.container}>
        {/* Breadcrumb Navigation */}
        <div 
          style={{
            ...styles.breadcrumb,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
          }}
        >
          <a href="/" style={styles.breadcrumbLink}>Home</a>
          <span style={styles.breadcrumbSeparator}> / </span>
          <span>Shop</span>
        </div>

        {/* Page Header Section */}
        <div 
          style={{
            ...styles.headerSection,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
          }}
        >
          <h1 style={styles.title}>Shop Collection</h1>
          <p style={styles.subtitle}>Discover our premium collection of branded apparel</p>
        </div>

        {/* Filter and Sort Controls */}
        <div 
          style={{
            ...styles.controls,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
          }}
        >
          {/* Results counter */}
          <p style={styles.resultsText}>Showing all {products.length} results</p>
          
          {/* Sort and Filter buttons group */}
          <div style={styles.controlGroup}>
            {/* Sort dropdown */}
            <select style={styles.sortDropdown}>
              <option>Default sorting</option>
              <option>Sort by popularity</option>
              <option>Sort by average rating</option>
              <option>Sort by latest</option>
              <option>Sort by price: low to high</option>
              <option>Sort by price: high to low</option>
            </select>
            
            {/* Filter button */}
            <button style={styles.filterButton}>
              <span>Filters</span>
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div style={styles.productsGrid}>
          {products.map((product, index) => (
            <div 
              key={product.id}
              style={{
                ...styles.productCard,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transitionDelay: `${index * 0.1}s` // Staggered animation delay
              }}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Product Image Container */}
              <div style={styles.imageContainer}>
                {/* Product Image with zoom effect on hover */}
                <img 
                  src={product.image} 
                  alt={product.title}
                  style={{
                    ...styles.productImage,
                    transform: hoveredProduct === product.id ? 'scale(1.1)' : 'scale(1)'
                  }}
                />
                
                {/* Overlay with Quick View button - appears on hover */}
                <div 
                  style={{
                    ...styles.overlay,
                    opacity: hoveredProduct === product.id ? 1 : 0
                  }}
                >
                  <button style={styles.viewButton}>Quick View</button>
                </div>
              </div>
              
              {/* Product Information */}
              <div style={styles.productInfo}>
                <h3 style={styles.productTitle}>{product.title}</h3>
                <p style={styles.productPrice}>{product.price}</p>
                
                {/* Add to Cart button with lift effect on hover */}
                <button 
                  style={{
                    ...styles.addToCartButton,
                    transform: hoveredProduct === product.id ? 'translateY(-2px)' : 'translateY(0)'
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
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
    width: '100vw',
    backgroundColor: '#ffffff',
    margin: 0,
    padding: 0,
    overflowX: 'hidden'
  },
  
  //Main content container
  container: {
    width: '100%',
    minHeight: '100vh',
    margin: 0,
    padding: '40px 60px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    backgroundColor: '#ffffff',
    boxSizing: 'border-box'
  },
  
  //Breadcrumb navigation styling
  breadcrumb: {
    fontSize: '14px',
    marginBottom: '20px',
    color: '#666666',
    textAlign: 'left',
    transition: 'all 0.6s ease'
  },
  
  //Breadcrumb link styling
  breadcrumbLink: {
    color: '#666666',
    textDecoration: 'none',
    transition: 'color 0.2s ease'
  },
  
  //Breadcrumb separator styling
  breadcrumbSeparator: {
    color: '#666666',
    margin: '0 8px'
  },
  
  //Page header section
  headerSection: {
    textAlign: 'left',
    marginBottom: '50px',
    paddingBottom: '20px',
    borderBottom: '1px solid #f0f0f0',
    transition: 'all 0.6s ease'
  },
  
  //Main page title
  title: {
    fontSize: '3.5rem',
    fontWeight: '800',
    marginBottom: '15px',
    color: '#000000',
    textAlign: 'left',
    letterSpacing: '-0.02em'
  },
  
  //Page subtitle
  subtitle: {
    fontSize: '1.2rem',
    color: '#666666',
    margin: 0,
    fontWeight: '400'
  },
  
  //Controls bar for filters and sorting
  controls: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '50px',
    flexWrap: 'wrap',
    gap: '20px',
    transition: 'all 0.6s ease'
  },
  
  //Results count text
  resultsText: {
    fontSize: '16px',
    color: '#333333',
    margin: 0,
    fontWeight: '500'
  },
  
  //Group container for sort and filter controls
  controlGroup: {
    display: 'flex',
    gap: '15px',
    alignItems: 'center'
  },
  
  //Sort dropdown styling
  sortDropdown: {
    padding: '12px 16px',
    fontSize: '14px',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    backgroundColor: '#ffffff',
    color: '#333333',
    cursor: 'pointer',
    minWidth: '200px',
    transition: 'all 0.2s ease'
  },
  
  //Filter button styling
  filterButton: {
    padding: '12px 24px',
    fontSize: '14px',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    backgroundColor: '#ffffff',
    color: '#333333',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    fontWeight: '500'
  },
  
  //Responsive grid for products
  productsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '40px',
    marginBottom: '80px',
    width: '100%'
  },
  
  //Individual product card
  productCard: {
    display: 'flex',
    flexDirection: 'column',
    cursor: 'pointer',
    transition: 'all 0.5s ease',
    width: '100%',
    borderRadius: '16px',
    overflow: 'hidden',
    backgroundColor: '#ffffff',
    border: '1px solid #f5f5f5',
    position: 'relative'
  },
  
  //Product image container
  imageContainer: {
    width: '100%',
    height: '400px',
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: '#f8f8f8'
  },
  
  //Product image styling
  productImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s ease'
  },
  
  //Dark overlay for hover effect
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.7)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'opacity 0.3s ease'
  },
  
  //Quick View button in overlay
  viewButton: {
    padding: '12px 24px',
    backgroundColor: '#ffffff',
    color: '#000000',
    border: 'none',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    transform: 'scale(0.9)',
    opacity: 0
  },
  
  //Product information section
  productInfo: {
    padding: '25px',
    textAlign: 'center'
  },
  
  //Product title
  productTitle: {
    fontSize: '18px',
    fontWeight: '600',
    marginBottom: '12px',
    color: '#000000',
    lineHeight: '1.4'
  },
  
  //Product price
  productPrice: {
    fontSize: '18px',
    color: '#000000',
    fontWeight: '700',
    marginBottom: '20px'
  },
  
  //Add to Cart button
  addToCartButton: {
    width: '100%',
    padding: '14px 24px',
    backgroundColor: '#000000',
    color: '#ffffff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  }
};

/**
 * Dynamic stylesheet injection for enhanced effects and responsive design
 * Adds hover effects, animations, and media queries
 */
//Enhanced styles with better hover effects and responsiveness
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
  
  /* Universal box-sizing */
  * {
    box-sizing: border-box;
  }
  
  /* Shop wrapper full width */
  .shop-wrapper {
    width: 100vw !important;
    margin: 0 !important;
    padding: 0 !important;
  }
  
  /* Product card hover effect - lift and shadow */
  div[style*="productCard"]:hover {
    transform: translateY(-8px) !important;
    box-shadow: 0 20px 40px rgba(0,0,0,0.1) !important;
  }
  
  /* Show Quick View button on product card hover */
  div[style*="productCard"]:hover button[style*="viewButton"] {
    transform: scale(1) !important;
    opacity: 1 !important;
  }
  
  /* Add to Cart button hover effect */
  button[style*="addToCartButton"]:hover {
    background-color: #333333 !important;
    transform: translateY(-2px) !important;
  }
  
  /* Filter and sort controls hover effect */
  button[style*="filterButton"]:hover,
  select[style*="sortDropdown"]:hover {
    border-color: #000000 !important;
    transform: translateY(-1px) !important;
  }
  
  /* Breadcrumb link hover effect */
  a[style*="breadcrumbLink"]:hover {
    color: #000000 !important;
  }
  
  /* Quick View button hover effect */
  button[style*="viewButton"]:hover {
    background-color: #f8f8f8 !important;
    transform: scale(1.05) !important;
  }
  
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
  
  /* Pulse animation for button clicks */
  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.1);
    }
    70% {
      box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    }
  }
  
  /* Apply fade-in animation to product cards */
  div[style*="productCard"] {
    animation: fadeInUp 0.6s ease forwards;
  }
  
  /* Apply pulse animation on Add to Cart button click */
  button[style*="addToCartButton"]:active {
    animation: pulse 0.4s ease;
  }
  
  /* Large Desktop Responsive Design - 1200px breakpoint */
  @media (max-width: 1200px) {
    /* 2-column grid for products */
    div[style*="productsGrid"] {
      grid-template-columns: repeat(2, 1fr) !important;
      gap: 30px !important;
    }
  }
  
  /* Tablet Responsive Design - 768px breakpoint */
  @media (max-width: 768px) {
    /* Reduce container padding */
    div[style*="container"] {
      padding: 20px !important;
    }
    
    /* Stack controls vertically */
    div[style*="controls"] {
      flex-direction: column !important;
      align-items: flex-start !important;
    }
    
    /* Full width control group */
    div[style*="controlGroup"] {
      width: 100% !important;
      justify-content: space-between !important;
    }
    
    /* Adjust sort dropdown width */
    select[style*="sortDropdown"] {
      min-width: 150px !important;
      flex: 1 !important;
    }
    
    /* Reduce title size */
    h1[style*="title"] {
      font-size: 2.5rem !important;
    }
  }
  
  /* Mobile Responsive Design - 640px breakpoint */
  @media (max-width: 640px) {
    /* Single column grid for products */
    div[style*="productsGrid"] {
      grid-template-columns: 1fr !important;
      gap: 20px !important;
    }
    
    /* Reduce image container height */
    div[style*="imageContainer"] {
      height: 350px !important;
    }
  }
  
  /* Small Mobile Responsive Design - 480px breakpoint */
  @media (max-width: 480px) {
    /* Further reduce container padding */
    div[style*="container"] {
      padding: 15px !important;
    }
    
    /* Further reduce title size */
    h1[style*="title"] {
      font-size: 2rem !important;
    }
    
    /* Further reduce image container height */
    div[style*="imageContainer"] {
      height: 300px !important;
    }
  }
`;

//Inject stylesheet into document head
document.head.appendChild(styleSheet);

export default Shop;