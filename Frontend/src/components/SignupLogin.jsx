import React, { useState } from 'react';

export default function SignupLogin({ onLogin }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: '',
  });
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.role) newErrors.role = 'Please select a role';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    onLogin(formData.role);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setErrors(prev => ({ ...prev, [name]: undefined }));
  };

  return (
    <div style={{ 
      backgroundColor: '#fff5e6', 
      minHeight: '100vh', 
      width: '100vw',
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      fontFamily: 'Arial, sans-serif',
      margin: 0,
      padding: 0
    }}>
      <div style={{ 
        backgroundColor: 'white', 
        padding: '60px', 
        borderRadius: '15px',
        boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
        width: '100%',
        maxWidth: '500px',
        border: '3px solid #ffd700'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ color: '#333', marginBottom: '15px', fontSize: '36px', fontWeight: 'bold' }}>VendorMart</h1>
          <p style={{ color: '#666', fontSize: '18px' }}>Welcome back! Please sign in to your account.</p>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '30px' }}>
            <label style={{
              display: 'block',
              marginBottom: '12px',
              color: '#333',
              fontWeight: 'bold',
              fontSize: '18px'
            }}>
              Login as
            </label>
            <select
              name="role"
              value={formData.role}
              onChange={handleInputChange}
              style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '2px solid #ddd', fontSize: '16px', backgroundColor: 'white' }}
              required
            >
              <option value="">Select role...</option>
              <option value="customer">Customer</option>
              <option value="vendor">Vendor</option>
            </select>
            {errors.role && (
              <div style={{ color: '#dc2626', fontSize: '14px', marginTop: '4px' }}>{errors.role}</div>
            )}
          </div>
          <div style={{ marginBottom: '30px' }}>
            <label style={{ 
              display: 'block', 
              marginBottom: '12px', 
              color: '#333', 
              fontWeight: 'bold',
              fontSize: '18px'
            }}>
              Email Address:
            </label>
            <input 
              type="email" 
              name="email" 
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              required 
              style={{ 
                width: '100%', 
                padding: '18px', 
                border: '2px solid #ddd', 
                borderRadius: '8px',
                fontSize: '16px',
                boxSizing: 'border-box',
                backgroundColor: 'white',
                outline: 'none'
              }} 
            />
            {errors.email && (
              <div style={{ color: '#dc2626', fontSize: '14px', marginTop: '4px' }}>{errors.email}</div>
            )}
          </div>
          
          <div style={{ marginBottom: '40px' }}>
            <label style={{ 
              display: 'block', 
              marginBottom: '12px', 
              color: '#333', 
              fontWeight: 'bold',
              fontSize: '18px'
            }}>
              Password:
            </label>
            <input 
              type="password" 
              name="password" 
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter your password"
              required 
              style={{ 
                width: '100%', 
                padding: '18px', 
                border: '2px solid #ddd', 
                borderRadius: '8px',
                fontSize: '16px',
                boxSizing: 'border-box',
                backgroundColor: 'white',
                outline: 'none'
              }} 
            />
            {errors.password && (
              <div style={{ color: '#dc2626', fontSize: '14px', marginTop: '4px' }}>{errors.password}</div>
            )}
          </div>
          
          <button 
            type="submit"
            style={{ 
              width: '100%',
              backgroundColor: '#ffd700', 
              color: '#333', 
              padding: '20px', 
              border: 'none', 
              borderRadius: '8px',
              fontSize: '18px',
              fontWeight: 'bold',
              cursor: 'pointer',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              border: '2px solid #e6c200'
            }}
          >
            Sign In to Dashboard
          </button>
        </form>
        
        <div style={{ 
          textAlign: 'center', 
          marginTop: '30px', 
          color: '#666', 
          fontSize: '16px',
          padding: '20px',
          backgroundColor: '#fff9e6',
          borderRadius: '8px',
          border: '1px solid #ffd700'
        }}>
          <p style={{ margin: 0 }}>💡 <strong>Demo Mode:</strong> Use any email and password to login</p>
        </div>
      </div>
    </div>
  );
} 