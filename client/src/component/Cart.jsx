import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';

const Cart = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          style={styles.overlay}
          onClick={onClose}
        />
      )}

      {/* Cart Sidebar */}
      <div style={{
        ...styles.cartSidebar,
        transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
      }}>
        <div style={styles.cartHeader}>
          <h2 style={styles.cartTitle}>Vendors</h2>
          <FiX 
            style={styles.closeIcon}
            onClick={onClose}
            onMouseEnter={(e) => {
              e.target.style.color = '#333';
            }}
            onMouseLeave={(e) => {
              e.target.style.color = '#666';
            }}
          />
        </div>

        <div style={styles.cartContent}>
          <div style={styles.emptyCart}>
            <p style={styles.emptyText}>Your cart is currently empty!</p>
            <button 
              style={styles.startShoppingBtn}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#2563eb';
                e.target.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'white';
                e.target.style.color = '#2563eb';
              }}
              onClick={onClose}
            >
              Start shopping
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1100,
    animation: 'fadeIn 0.3s ease',
  },
  cartSidebar: {
    position: 'fixed',
    top: 0,
    right: 0,
    width: '450px',
    height: '100vh',
    backgroundColor: 'white',
    zIndex: 1200,
    transition: 'transform 0.3s ease',
    boxShadow: '-4px 0 20px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
  },
  cartHeader: {
    padding: '30px',
    borderBottom: '1px solid #e0e0e0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cartTitle: {
    fontSize: '1.5rem',
    fontWeight: '600',
    margin: 0,
    color: 'black',
  },
  closeIcon: {
    fontSize: '1.8rem',
    cursor: 'pointer',
    color: '#666',
    transition: 'color 0.2s ease',
  },
  cartContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px',
  },
  emptyCart: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '30px',
  },
  emptyText: {
    fontSize: '1.2rem',
    fontWeight: '600',
    color: 'black',
    margin: 0,
  },
  startShoppingBtn: {
    padding: '14px 40px',
    fontSize: '1rem',
    fontWeight: '500',
    color: '#2563eb',
    backgroundColor: 'white',
    border: '2px solid #2563eb',
    borderRadius: '30px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
};

export default Cart;