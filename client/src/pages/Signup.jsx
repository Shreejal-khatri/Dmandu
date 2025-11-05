import React, { useState, useEffect } from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log('Signup data:', formData);
  };

  return (
    <div style={styles.container}>
      <Navbar />
      
      <div style={styles.mainContent}>
        <div style={styles.signupContainer} className={isVisible ? 'fade-in-up' : 'fade-hidden'}>
          {/* Left Side - Form */}
          <div style={styles.formSection}>
            <div style={styles.formContent}>
              <h1 style={styles.title}>Create Account</h1>
              <p style={styles.subtitle}>Join Dmandu and start shopping</p>

              <div style={styles.form}>
                <div style={styles.inputGroup}>
                  <label style={styles.label}>Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    style={styles.input}
                    className="input-field"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div style={styles.inputGroup}>
                  <label style={styles.label}>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    style={styles.input}
                    className="input-field"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div style={styles.inputGroup}>
                  <label style={styles.label}>Password</label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    style={styles.input}
                    className="input-field"
                    placeholder="Create a strong password"
                    required
                  />
                </div>

                <div style={styles.inputGroup}>
                  <label style={styles.label}>Confirm Password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    style={styles.input}
                    className="input-field"
                    placeholder="Confirm your password"
                    required
                  />
                </div>

                <div style={styles.termsContainer}>
                  <input type="checkbox" id="terms" style={styles.checkbox} required />
                  <label htmlFor="terms" style={styles.termsText}>
                    I agree to the <a href="#" style={styles.termsLink}>Terms & Conditions</a>
                  </label>
                </div>

                <button onClick={handleSubmit} style={styles.submitButton} className="submit-button">
                  Create Account
                </button>

                <p style={styles.loginText}>
                  Already have an account? 
                  <a href="/login" style={styles.loginLink}> Login</a>
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div style={styles.imageSection}>
            <img 
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=1000&fit=crop" 
              alt="Fashion"
              style={styles.sideImage}
            />
          </div>
        </div>
      </div>

      <Footer />

      <style>{`
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

        .fade-hidden {
          opacity: 0;
        }

        .fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .input-field:focus {
          outline: none;
          border-color: black !important;
          box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.1) !important;
        }

        .submit-button:hover {
          background-color: #333 !important;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0,0,0,0.25) !important;
        }

        a[style*="termsLink"]:hover {
          text-decoration: underline !important;
        }

        a[style*="loginLink"]:hover {
          text-decoration: underline !important;
        }

        @media (max-width: 968px) {
          div[style*="signupContainer"] {
            flex-direction: column !important;
          }

          div[style*="imageSection"] {
            height: 300px !important;
            min-width: 100% !important;
            order: 1 !important;
          }

          div[style*="formSection"] {
            padding: 40px 30px !important;
            order: 2 !important;
          }
        }

        @media (max-width: 480px) {
          div[style*="formSection"] {
            padding: 30px 20px !important;
          }

          h1[style*="title"] {
            font-size: 2rem !important;
          }
        }
      `}</style>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    width: '100%',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
  },
  mainContent: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '60px 20px',
  },
  signupContainer: {
    display: 'flex',
    maxWidth: '1100px',
    width: '100%',
    backgroundColor: 'white',
    borderRadius: '24px',
    overflow: 'hidden',
    boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
  },
  formSection: {
    flex: '1',
    padding: '60px 50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formContent: {
    width: '100%',
    maxWidth: '400px',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: 'black',
  },
  subtitle: {
    fontSize: '1rem',
    color: '#666',
    marginBottom: '40px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  inputGroup: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    fontSize: '0.95rem',
    fontWeight: '500',
    marginBottom: '8px',
    color: 'black',
  },
  input: {
    width: '100%',
    padding: '14px 18px',
    fontSize: '1rem',
    border: '2px solid #e0e0e0',
    borderRadius: '12px',
    boxSizing: 'border-box',
    transition: 'all 0.3s',
    backgroundColor: 'white',
  },
  termsContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '30px',
  },
  checkbox: {
    width: '18px',
    height: '18px',
    cursor: 'pointer',
  },
  termsText: {
    fontSize: '0.9rem',
    color: '#666',
  },
  termsLink: {
    color: 'black',
    fontWeight: '600',
    textDecoration: 'none',
  },
  submitButton: {
    width: '100%',
    padding: '16px',
    backgroundColor: 'black',
    color: 'white',
    border: 'none',
    borderRadius: '50px',
    fontSize: '1.05rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s',
    boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
  },
  loginText: {
    textAlign: 'center',
    fontSize: '0.95rem',
    color: '#666',
    marginTop: '30px',
  },
  loginLink: {
    color: 'black',
    fontWeight: '600',
    textDecoration: 'none',
    marginLeft: '5px',
  },
  imageSection: {
    flex: '1',
    minWidth: '400px',
    position: 'relative',
    overflow: 'hidden',
  },
  sideImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
};

export default Signup;