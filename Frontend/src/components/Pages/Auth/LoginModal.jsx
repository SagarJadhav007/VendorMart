import { useState } from "react";

function LoginModal({ isOpen, onClose, onSwitchToRegister, onLogin }) {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false,
    role: '',
  });
  const [errors, setErrors] = useState({});
  const [processing, setProcessing] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProcessing(true);
    // Simple validation
    const newErrors = {};
    if (!formData.role) newErrors.role = 'Please select a role';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setProcessing(false);
      return;
    }
    setTimeout(() => {
      setProcessing(false);
      onLogin(formData.role); // Pass role to parent
      onClose();
      setFormData({ email: '', password: '', remember: false, role: '' });
      setErrors({});
    }, 1000);
  };

  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000
    }}>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        padding: '32px',
        maxWidth: '398px',
        width: '90%',
        maxHeight: '90vh',
        overflow: 'auto',
        position: 'relative'
      }}>
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            background: 'none',
            border: 'none',
            fontSize: '24px',
            cursor: 'pointer',
            color: '#666'
          }}
        >
          ✕
        </button>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '20px',
            marginBottom: '12px'
          }}>
            {/* Logo */}
            <svg width="40" height="40" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="32" cy="32" r="32" fill="#0112B6" fillOpacity="0.05"></circle>
            </svg>
            <h2 style={{ fontSize: '24px', color: 'black', margin: 0 }}>Log in to your account</h2>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label style={{ fontWeight: 'bold', color: '#333', marginBottom: 6, display: 'block' }}>Login as</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleInputChange}
              style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1.5px solid #ccc', fontSize: '16px' }}
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
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email*"
              value={formData.email}
              onChange={handleInputChange}
              required
              style={{
                width: '100%',
                padding: '12px 16px',
                borderRadius: '24px',
                border: '1px solid #666',
                fontSize: '16px',
                boxSizing: 'border-box'
              }}
            />
            {errors.email && (
              <div style={{ color: '#dc2626', fontSize: '14px', marginTop: '4px' }}>
                {errors.email}
              </div>
            )}
          </div>

          <div style={{ position: 'relative', marginBottom: '32px' }}>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password*"
              value={formData.password}
              onChange={handleInputChange}
              required
              style={{
                width: '100%',
                padding: '12px 16px',
                paddingRight: '48px',
                borderRadius: '24px',
                border: '1px solid #666',
                fontSize: '16px',
                boxSizing: 'border-box'
              }}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: 'absolute',
                right: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: '20px'
              }}
            >
              {showPassword ? '👁️' : '👁️‍🗨️'}
            </button>
            {errors.password && (
              <div style={{ color: '#dc2626', fontSize: '14px', marginTop: '4px' }}>
                {errors.password}
              </div>
            )}
          </div>

          <div style={{ textAlign: 'center', color: '#2563eb', cursor: 'pointer', fontSize: '14px' }}>
            Forgot Password?
          </div>

          <button
            type="submit"
            disabled={processing}
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '24px',
              backgroundColor: processing ? '#666' : '#000',
              color: 'white',
              border: 'none',
              fontSize: '16px',
              fontWeight: 'bold',
              cursor: processing ? 'not-allowed' : 'pointer',
              transition: 'background-color 0.3s ease'
            }}
          >
            {processing ? "Logging in..." : "Login"}
          </button>
        </form>

        <p style={{ textAlign: 'center', fontSize: '14px', margin: '20px 0' }}>— or login with —</p>

        {/* Social Login Buttons */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', fontSize: '24px' }}>
          <a href="https://www.google.com" aria-label="Login with Google" style={{ color: '#DB4437', textDecoration: 'none' }}>
            🔍
          </a>
          <a href="https://www.facebook.com" aria-label="Login with Facebook" style={{ color: '#1877F2', textDecoration: 'none' }}>
            📘
          </a>
          <a href="https://www.indusguru.in/loginWith/linkedin" aria-label="Login with LinkedIn" style={{ color: '#0A66C2', textDecoration: 'none' }}>
            💼
          </a>
        </div>

        <div 
          style={{ 
            textAlign: 'center', 
            fontSize: '14px', 
            paddingTop: '16px', 
            borderTop: '1px solid #e5e7eb',
            cursor: 'pointer',
            color: '#2563eb'
          }} 
          onClick={onSwitchToRegister}
        >
          Don't have an account?{" "}
          <span style={{ textDecoration: 'underline' }}>Sign up</span>
        </div>
      </div>
    </div>
  );
}

export default LoginModal; 