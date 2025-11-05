// import React, { useState } from 'react';
// import Navbar from '../component/Navbar';
// import Footer from '../component/Footer';
// import { Search } from 'lucide-react';

// const ProductDetails = () => {
//   const [quantity, setQuantity] = useState(1);
//   const [activeTab, setActiveTab] = useState('description');
//   const [rating, setRating] = useState(0);
//   const [hoverRating, setHoverRating] = useState(0);
//   const [reviewText, setReviewText] = useState('');
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [saveInfo, setSaveInfo] = useState(false);

//   const styles = {
//     container: {
//       maxWidth: '1200px',
//       margin: '0 auto',
//       padding: '20px',
//       fontFamily: 'Arial, sans-serif',
//     },
//     breadcrumb: {
//       fontSize: '14px',
//       marginBottom: '30px',
//       color: '#666',
//     },
//     breadcrumbLink: {
//       color: '#333',
//       textDecoration: 'none',
//     },
//     productMain: {
//       display: 'flex',
//       gap: '40px',
//       marginBottom: '50px',
//     },
//     imageContainer: {
//       flex: '1',
//       position: 'relative',
//       borderRadius: '15px',
//       overflow: 'hidden',
//     },
//     productImage: {
//       width: '100%',
//       height: 'auto',
//       display: 'block',
//     },
//     zoomButton: {
//       position: 'absolute',
//       top: '20px',
//       right: '20px',
//       width: '60px',
//       height: '60px',
//       borderRadius: '50%',
//       border: 'none',
//       backgroundColor: 'white',
//       cursor: 'pointer',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
//       transition: 'all 0.3s',
//     },
//     productInfo: {
//       flex: '1',
//     },
//     title: {
//       fontSize: '36px',
//       fontWeight: 'bold',
//       marginBottom: '20px',
//       marginTop: '0',
//     },
//     price: {
//       fontSize: '24px',
//       fontWeight: 'bold',
//       marginBottom: '30px',
//       color: '#333',
//     },
//     description: {
//       fontSize: '16px',
//       lineHeight: '1.6',
//       color: '#555',
//       marginBottom: '30px',
//     },
//     actions: {
//       display: 'flex',
//       gap: '15px',
//       alignItems: 'center',
//     },
//     quantityInput: {
//       width: '60px',
//       padding: '12px',
//       fontSize: '16px',
//       border: '2px solid #333',
//       borderRadius: '4px',
//       textAlign: 'center',
//       fontWeight: '500',
//       color: '#333',
//       backgroundColor: 'white',
//     },
//     addToCartButton: {
//       padding: '12px 30px',
//       fontSize: '16px',
//       backgroundColor: 'white',
//       color: '#333',
//       border: '2px solid #333',
//       borderRadius: '25px',
//       cursor: 'pointer',
//       fontWeight: '500',
//       transition: 'all 0.3s',
//     },
//     tabs: {
//       borderBottom: '2px solid #ddd',
//       marginBottom: '30px',
//     },
//     tabList: {
//       display: 'flex',
//       gap: '40px',
//       listStyle: 'none',
//       padding: '0',
//       margin: '0',
//     },
//     tab: {
//       padding: '15px 0',
//       cursor: 'pointer',
//       fontSize: '16px',
//       fontWeight: '500',
//       color: '#666',
//       borderBottom: '3px solid transparent',
//       marginBottom: '-2px',
//     },
//     activeTab: {
//       color: '#333',
//       borderBottom: '3px solid #333',
//     },
//     tabContent: {
//       padding: '20px 0',
//     },
//     descriptionHeading: {
//       fontSize: '28px',
//       fontWeight: 'bold',
//       marginBottom: '20px',
//     },
//     descriptionText: {
//       fontSize: '16px',
//       lineHeight: '1.6',
//       color: '#555',
//     },
//     reviewsContainer: {
//       maxWidth: '100%',
//     },
//     reviewHeading: {
//       fontSize: '28px',
//       fontWeight: 'bold',
//       marginBottom: '20px',
//       marginTop: '0',
//     },
//     noReviews: {
//       fontSize: '16px',
//       marginBottom: '40px',
//     },
//     reviewFormTitle: {
//       fontSize: '20px',
//       fontWeight: 'bold',
//       marginBottom: '10px',
//     },
//     reviewFormSubtitle: {
//       fontSize: '14px',
//       color: '#555',
//       marginBottom: '20px',
//     },
//     ratingLabel: {
//       fontSize: '14px',
//       marginBottom: '10px',
//       display: 'block',
//     },
//     starsContainer: {
//       display: 'flex',
//       gap: '5px',
//       marginBottom: '20px',
//     },
//     star: {
//       fontSize: '30px',
//       cursor: 'pointer',
//       color: '#ddd',
//       transition: 'color 0.2s',
//     },
//     starFilled: {
//       color: '#000',
//     },
//     formLabel: {
//       fontSize: '14px',
//       fontWeight: '500',
//       marginBottom: '5px',
//       display: 'block',
//     },
//     textarea: {
//       width: '100%',
//       padding: '12px',
//       fontSize: '14px',
//       border: '1px solid #ddd',
//       borderRadius: '4px',
//       marginBottom: '20px',
//       fontFamily: 'Arial, sans-serif',
//       resize: 'vertical',
//       minHeight: '120px',
//       boxSizing: 'border-box',
//       backgroundColor: 'white', 
//       color: '#333', 
//     },
//     inputField: {
//       padding: '10px',
//       fontSize: '14px',
//       border: '1px solid #ddd',
//       borderRadius: '4px',
//       marginBottom: '20px',
//       width: '300px',
//       maxWidth: '100%',
//       backgroundColor: 'white', 
//       color: '#333', 
//     },
//     checkbox: {
//       marginRight: '8px',
//     },
//     checkboxLabel: {
//       fontSize: '14px',
//       marginBottom: '20px',
//       display: 'flex',
//       alignItems: 'center',
//     },
//     submitButton: {
//       padding: '12px 30px',
//       fontSize: '16px',
//       backgroundColor: 'white',
//       color: '#333',
//       border: '2px solid #333',
//       borderRadius: '25px',
//       cursor: 'pointer',
//       fontWeight: '500',
//       transition: 'all 0.3s',
//     },
//   };

//   return (
//     <>
//       <Navbar />
//       <div style={styles.container}>
//         <div style={styles.breadcrumb}>
//           <a href="/" style={styles.breadcrumbLink}>Home</a> / <span>Trendy Branded Apparel</span>
//         </div>

//         <div style={styles.productMain}>
//           <div style={styles.imageContainer}>
//             <img 
//               src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=600&fit=crop" 
//               alt="Trendy Branded Apparel" 
//               style={styles.productImage}
//             />
//             <button style={styles.zoomButton}>
//               <Search size={28} color="#333" />
//             </button>
//           </div>

//           <div style={styles.productInfo}>
//             <h1 style={styles.title}>Trendy Branded Apparel</h1>
//             <p style={styles.price}>₨ 49.99</p>
            
//             <p style={styles.description}>
//               Discover a wide selection of authentic branded clothing at dmandu. Our 
//               online fashion marketplace connects you with trusted vendors, offering 
//               everything from casual wear to premium collections. Enjoy competitive 
//               prices and fast shipping as products are delivered directly from the vendor 
//               to your doorstep, ensuring a seamless shopping experience.
//             </p>

//             <div style={styles.actions}>
//               <input 
//                 type="number" 
//                 value={quantity}
//                 onChange={(e) => setQuantity(e.target.value)}
//                 min="1"
//                 style={styles.quantityInput}
//               />
//               <button 
//                 style={styles.addToCartButton}
//                 onMouseEnter={(e) => {
//                   e.target.style.backgroundColor = '#333';
//                   e.target.style.color = 'white';
//                 }}
//                 onMouseLeave={(e) => {
//                   e.target.style.backgroundColor = 'white';
//                   e.target.style.color = '#333';
//                 }}
//               >
//                 Add to cart
//               </button>
//             </div>
//           </div>
//         </div>

//         <div style={styles.tabs}>
//           <ul style={styles.tabList}>
//             <li 
//               style={{
//                 ...styles.tab,
//                 ...(activeTab === 'description' ? styles.activeTab : {})
//               }}
//               onClick={() => setActiveTab('description')}
//             >
//               Description
//             </li>
//             <li 
//               style={{
//                 ...styles.tab,
//                 ...(activeTab === 'reviews' ? styles.activeTab : {})
//               }}
//               onClick={() => setActiveTab('reviews')}
//             >
//               Reviews (0)
//             </li>
//           </ul>
//         </div>

//         <div style={styles.tabContent}>
//           {activeTab === 'description' && (
//             <div>
//               <h2 style={styles.descriptionHeading}>Description</h2>
//               <p style={styles.descriptionText}>
//                 Discover a wide selection of authentic branded clothing at dmandu. Our online fashion marketplace connects you with trusted vendors, offering everything from casual wear to premium collections. Enjoy competitive prices and fast shipping as products are delivered directly from the vendor to your doorstep, ensuring a seamless shopping experience.
//               </p>
//             </div>
//           )}
//           {activeTab === 'reviews' && (
//             <div style={styles.reviewsContainer}>
//               <h2 style={styles.reviewHeading}>Reviews</h2>
//               <p style={styles.noReviews}>There are no reviews yet.</p>
              
//               <h3 style={styles.reviewFormTitle}>Be the first to review "Trendy Branded Apparel"</h3>
//               <p style={styles.reviewFormSubtitle}>
//                 Your email address will not be published. Required fields are marked *
//               </p>
              
//               <label style={styles.ratingLabel}>Your rating *</label>
//               <div style={styles.starsContainer}>
//                 {[1, 2, 3, 4, 5].map((star) => (
//                   <span
//                     key={star}
//                     style={{
//                       ...styles.star,
//                       ...(star <= (hoverRating || rating) ? styles.starFilled : {})
//                     }}
//                     onClick={() => setRating(star)}
//                     onMouseEnter={() => setHoverRating(star)}
//                     onMouseLeave={() => setHoverRating(0)}
//                   >
//                     ★
//                   </span>
//                 ))}
//               </div>
              
//               <label style={styles.formLabel}>Your review *</label>
//               <textarea
//                 style={styles.textarea}
//                 value={reviewText}
//                 onChange={(e) => setReviewText(e.target.value)}
//               />
              
//               <label style={styles.formLabel}>Name *</label>
//               <input
//                 type="text"
//                 style={styles.inputField}
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               />
              
//               <label style={styles.formLabel}>Email *</label>
//               <input
//                 type="email"
//                 style={styles.inputField}
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
              
//               <label style={styles.checkboxLabel}>
//                 <input
//                   type="checkbox"
//                   style={styles.checkbox}
//                   checked={saveInfo}
//                   onChange={(e) => setSaveInfo(e.target.checked)}
//                 />
//                 Save my name, email, and website in this browser for the next time I comment.
//               </label>
              
//               <button
//                 style={styles.submitButton}
//                 onMouseEnter={(e) => {
//                   e.target.style.backgroundColor = '#333';
//                   e.target.style.color = 'white';
//                 }}
//                 onMouseLeave={(e) => {
//                   e.target.style.backgroundColor = 'white';
//                   e.target.style.color = '#333';
//                 }}
//               >
//                 Submit
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default ProductDetails;


import React, { useState } from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import { Search } from 'lucide-react';

const ProductDetails = () => {
  //State for product quantity selection
  const [quantity, setQuantity] = useState(1);
  
  //State to track active tab (description or reviews)
  const [activeTab, setActiveTab] = useState('description');
  
  //State for user's rating selection
  const [rating, setRating] = useState(0);
  
  //State for hover effect on rating stars
  const [hoverRating, setHoverRating] = useState(0);
  
  //State for review text input
  const [reviewText, setReviewText] = useState('');
  
  //State for reviewer name input
  const [name, setName] = useState('');
  
  //State for reviewer email input
  const [email, setEmail] = useState('');
  
  //State for save info checkbox
  const [saveInfo, setSaveInfo] = useState(false);

  /**
   * Inline styles object
   * Contains all component styling organized by section
   */
  const styles = {
    //Main container wrapper
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
    },
    
    //Breadcrumb navigation styling
    breadcrumb: {
      fontSize: '14px',
      marginBottom: '30px',
      color: '#666',
    },
    
    //Breadcrumb link styling
    breadcrumbLink: {
      color: '#333',
      textDecoration: 'none',
    },
    
    //Two-column product layout container
    productMain: {
      display: 'flex',
      gap: '40px',
      marginBottom: '50px',
    },
    
    //Product image container
    imageContainer: {
      flex: '1',
      position: 'relative',
      borderRadius: '15px',
      overflow: 'hidden',
    },
    
    //Product image styling
    productImage: {
      width: '100%',
      height: 'auto',
      display: 'block',
    },
    
    //Zoom/search button overlay on image
    zoomButton: {
      position: 'absolute',
      top: '20px',
      right: '20px',
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      border: 'none',
      backgroundColor: 'white',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      transition: 'all 0.3s',
    },
    
    //Product information section
    productInfo: {
      flex: '1',
    },
    
    //Product title styling
    title: {
      fontSize: '36px',
      fontWeight: 'bold',
      marginBottom: '20px',
      marginTop: '0',
    },
    
    //Product price styling
    price: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '30px',
      color: '#333',
    },
    
    //Product description text
    description: {
      fontSize: '16px',
      lineHeight: '1.6',
      color: '#555',
      marginBottom: '30px',
    },
    
    //Actions container (quantity + add to cart)
    actions: {
      display: 'flex',
      gap: '15px',
      alignItems: 'center',
    },
    
    //Quantity input field
    quantityInput: {
      width: '60px',
      padding: '12px',
      fontSize: '16px',
      border: '2px solid #333',
      borderRadius: '4px',
      textAlign: 'center',
      fontWeight: '500',
      color: '#333',
      backgroundColor: 'white',
    },
    
    //Add to cart button (outline style)
    addToCartButton: {
      padding: '12px 30px',
      fontSize: '16px',
      backgroundColor: 'white',
      color: '#333',
      border: '2px solid #333',
      borderRadius: '25px',
      cursor: 'pointer',
      fontWeight: '500',
      transition: 'all 0.3s',
    },
    
    //Tabs container with border
    tabs: {
      borderBottom: '2px solid #ddd',
      marginBottom: '30px',
    },
    
    //Tab list styling
    tabList: {
      display: 'flex',
      gap: '40px',
      listStyle: 'none',
      padding: '0',
      margin: '0',
    },
    
    //Individual tab styling
    tab: {
      padding: '15px 0',
      cursor: 'pointer',
      fontSize: '16px',
      fontWeight: '500',
      color: '#666',
      borderBottom: '3px solid transparent',
      marginBottom: '-2px',
    },
    
    //Active tab styling
    activeTab: {
      color: '#333',
      borderBottom: '3px solid #333',
    },
    
    //Tab content area
    tabContent: {
      padding: '20px 0',
    },
    
    //Description section heading
    descriptionHeading: {
      fontSize: '28px',
      fontWeight: 'bold',
      marginBottom: '20px',
    },
    
    //Description section text
    descriptionText: {
      fontSize: '16px',
      lineHeight: '1.6',
      color: '#555',
    },
    
    //Reviews section container
    reviewsContainer: {
      maxWidth: '100%',
    },
    
    //Reviews section heading
    reviewHeading: {
      fontSize: '28px',
      fontWeight: 'bold',
      marginBottom: '20px',
      marginTop: '0',
    },
    
    //No reviews message
    noReviews: {
      fontSize: '16px',
      marginBottom: '40px',
    },
    
    //Review form title
    reviewFormTitle: {
      fontSize: '20px',
      fontWeight: 'bold',
      marginBottom: '10px',
    },
    
    //Review form subtitle
    reviewFormSubtitle: {
      fontSize: '14px',
      color: '#555',
      marginBottom: '20px',
    },
    
    //Rating label text
    ratingLabel: {
      fontSize: '14px',
      marginBottom: '10px',
      display: 'block',
    },
    
    //Star rating container
    starsContainer: {
      display: 'flex',
      gap: '5px',
      marginBottom: '20px',
    },
    
    //Individual star styling (empty state)
    star: {
      fontSize: '30px',
      cursor: 'pointer',
      color: '#ddd',
      transition: 'color 0.2s',
    },
    
    //Filled/selected star styling
    starFilled: {
      color: '#000',
    },
    
    //Form field label
    formLabel: {
      fontSize: '14px',
      fontWeight: '500',
      marginBottom: '5px',
      display: 'block',
    },
    
    //Textarea for review text
    textarea: {
      width: '100%',
      padding: '12px',
      fontSize: '14px',
      border: '1px solid #ddd',
      borderRadius: '4px',
      marginBottom: '20px',
      fontFamily: 'Arial, sans-serif',
      resize: 'vertical',
      minHeight: '120px',
      boxSizing: 'border-box',
      backgroundColor: 'white', 
      color: '#333', 
    },
    
    //Text input fields (name, email)
    inputField: {
      padding: '10px',
      fontSize: '14px',
      border: '1px solid #ddd',
      borderRadius: '4px',
      marginBottom: '20px',
      width: '300px',
      maxWidth: '100%',
      backgroundColor: 'white', 
      color: '#333', 
    },
    
    //Checkbox input
    checkbox: {
      marginRight: '8px',
    },
    
    //Checkbox label container
    checkboxLabel: {
      fontSize: '14px',
      marginBottom: '20px',
      display: 'flex',
      alignItems: 'center',
    },
    
    //Submit button (outline style)
    submitButton: {
      padding: '12px 30px',
      fontSize: '16px',
      backgroundColor: 'white',
      color: '#333',
      border: '2px solid #333',
      borderRadius: '25px',
      cursor: 'pointer',
      fontWeight: '500',
      transition: 'all 0.3s',
    },
  };

  return (
    <>
      {/* Navigation Bar */}
      <Navbar />
      
      {/* Main Content Container */}
      <div style={styles.container}>
        {/* Breadcrumb Navigation */}
        <div style={styles.breadcrumb}>
          <a href="/" style={styles.breadcrumbLink}>Home</a> / <span>Trendy Branded Apparel</span>
        </div>

        {/* Product Main Section - Two Column Layout */}
        <div style={styles.productMain}>
          {/* Left Column - Product Image */}
          <div style={styles.imageContainer}>
            <img 
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=600&fit=crop" 
              alt="Trendy Branded Apparel" 
              style={styles.productImage}
            />
            {/* Zoom/Search Button Overlay */}
            <button style={styles.zoomButton}>
              <Search size={28} color="#333" />
            </button>
          </div>

          {/* Right Column - Product Information */}
          <div style={styles.productInfo}>
            <h1 style={styles.title}>Trendy Branded Apparel</h1>
            <p style={styles.price}>₨ 49.99</p>
            
            <p style={styles.description}>
              Discover a wide selection of authentic branded clothing at dmandu. Our 
              online fashion marketplace connects you with trusted vendors, offering 
              everything from casual wear to premium collections. Enjoy competitive 
              prices and fast shipping as products are delivered directly from the vendor 
              to your doorstep, ensuring a seamless shopping experience.
            </p>

            {/* Quantity Selector and Add to Cart */}
            <div style={styles.actions}>
              {/* Quantity Input */}
              <input 
                type="number" 
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                min="1"
                style={styles.quantityInput}
              />
              {/* Add to Cart Button with hover effect */}
              <button 
                style={styles.addToCartButton}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#333';
                  e.target.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'white';
                  e.target.style.color = '#333';
                }}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>

        {/* Tabs Navigation */}
        <div style={styles.tabs}>
          <ul style={styles.tabList}>
            {/* Description Tab */}
            <li 
              style={{
                ...styles.tab,
                ...(activeTab === 'description' ? styles.activeTab : {})
              }}
              onClick={() => setActiveTab('description')}
            >
              Description
            </li>
            {/* Reviews Tab */}
            <li 
              style={{
                ...styles.tab,
                ...(activeTab === 'reviews' ? styles.activeTab : {})
              }}
              onClick={() => setActiveTab('reviews')}
            >
              Reviews (0)
            </li>
          </ul>
        </div>

        {/* Tab Content Area */}
        <div style={styles.tabContent}>
          {/* Description Tab Content */}
          {activeTab === 'description' && (
            <div>
              <h2 style={styles.descriptionHeading}>Description</h2>
              <p style={styles.descriptionText}>
                Discover a wide selection of authentic branded clothing at dmandu. Our online fashion marketplace connects you with trusted vendors, offering everything from casual wear to premium collections. Enjoy competitive prices and fast shipping as products are delivered directly from the vendor to your doorstep, ensuring a seamless shopping experience.
              </p>
            </div>
          )}
          
          {/* Reviews Tab Content */}
          {activeTab === 'reviews' && (
            <div style={styles.reviewsContainer}>
              <h2 style={styles.reviewHeading}>Reviews</h2>
              <p style={styles.noReviews}>There are no reviews yet.</p>
              
              {/* Review Form */}
              <h3 style={styles.reviewFormTitle}>Be the first to review "Trendy Branded Apparel"</h3>
              <p style={styles.reviewFormSubtitle}>
                Your email address will not be published. Required fields are marked *
              </p>
              
              {/* Star Rating Selector */}
              <label style={styles.ratingLabel}>Your rating *</label>
              <div style={styles.starsContainer}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    style={{
                      ...styles.star,
                      ...(star <= (hoverRating || rating) ? styles.starFilled : {})
                    }}
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                  >
                    ★
                  </span>
                ))}
              </div>
              
              {/* Review Text Input */}
              <label style={styles.formLabel}>Your review *</label>
              <textarea
                style={styles.textarea}
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
              />
              
              {/* Name Input */}
              <label style={styles.formLabel}>Name *</label>
              <input
                type="text"
                style={styles.inputField}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              
              {/* Email Input */}
              <label style={styles.formLabel}>Email *</label>
              <input
                type="email"
                style={styles.inputField}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              
              {/* Save Info Checkbox */}
              <label style={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  style={styles.checkbox}
                  checked={saveInfo}
                  onChange={(e) => setSaveInfo(e.target.checked)}
                />
                Save my name, email, and website in this browser for the next time I comment.
              </label>
              
              {/* Submit Button with hover effect */}
              <button
                style={styles.submitButton}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#333';
                  e.target.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'white';
                  e.target.style.color = '#333';
                }}
              >
                Submit
              </button>
            </div>
          )}
        </div>
      </div>
      
      {/* Footer Component */}
      <Footer />
    </>
  );
};

export default ProductDetails;