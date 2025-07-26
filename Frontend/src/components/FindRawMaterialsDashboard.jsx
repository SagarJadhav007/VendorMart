import React, { useState } from 'react';

const trendingMaterials = [
  'Pav',
  'Vada',
  'Chutney',
  'Chole',
  'Paneer',
  'Masala',
  'Bhel',
  'Puri',
  'Samosa',
  'Sev',
  'Dahi',
  'Aloo',
];

export default function FindRawMaterialsDashboard() {
  const [rawMaterial, setRawMaterial] = useState({
    materialType: '',
    quantity: '',
    timeline: '',
    budget: ''
  });
  const [searching, setSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [errors, setErrors] = useState({});

  const handleRawMaterialChange = (e) => {
    const { name, value } = e.target;
    setRawMaterial(prev => ({
      ...prev,
      [name]: value
    }));
    setErrors(prev => ({ ...prev, [name]: undefined }));
  };

  const handleRawMaterialSubmit = (e) => {
    e.preventDefault();
    // Simple validation
    const newErrors = {};
    if (!rawMaterial.materialType) newErrors.materialType = 'Select a material type';
    if (!rawMaterial.quantity) newErrors.quantity = 'Enter required quantity';
    if (!rawMaterial.timeline) newErrors.timeline = 'Select a timeline';
    if (!rawMaterial.budget) newErrors.budget = 'Enter a budget range';
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setSearching(true);
    setTimeout(() => {
      setSearching(false);
      setShowResults(true);
    }, 1200);
  };

  return (
    <div style={{ 
      backgroundColor: '#fff5e6', 
      minHeight: '100vh', 
      padding: '60px 40px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Welcoming Header */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h1 style={{ fontSize: '3.5rem', color: '#222', fontWeight: 700, marginBottom: '16px' }}>Find Raw Materials</h1>
          <p style={{ color: '#555', fontSize: '1.4rem', margin: 0, lineHeight: '1.6' }}>
            Instantly connect with trusted suppliers for your street food business needs.
          </p>
        </div>

        {/* Main Content Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: '50px', alignItems: 'start' }}>
          {/* Left Column - Form */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '20px',
            boxShadow: '0 8px 25px rgba(0,0,0,0.12)',
            overflow: 'hidden',
          }}>
            <div style={{
              backgroundColor: '#ffd700',
              padding: '35px 45px 25px 45px',
              borderTopLeftRadius: '20px',
              borderTopRightRadius: '20px',
              textAlign: 'left'
            }}>
              <h2 style={{ margin: 0, color: '#222', fontSize: '2.2rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '15px' }}>
                <span role="img" aria-label="search" style={{ fontSize: '2rem' }}>🔍</span> Request a Quote
              </h2>
            </div>
            <form onSubmit={handleRawMaterialSubmit} style={{ padding: '40px 45px 50px 45px', display: 'flex', flexDirection: 'column', gap: '30px' }}>
              <div>
                <label style={{ fontWeight: 'bold', color: '#333', marginBottom: '12px', display: 'block', fontSize: '1.1rem' }}>Ingredient</label>
                <div style={{ position: 'relative' }}>
                  <span style={{ position: 'absolute', left: '18px', top: '18px', fontSize: '20px', color: '#aaa' }}>🏷️</span>
                  <select
                    name="materialType"
                    value={rawMaterial.materialType}
                    onChange={handleRawMaterialChange}
                    style={{ width: '100%', padding: '16px 16px 16px 50px', borderRadius: '10px', border: errors.materialType ? '2px solid #dc2626' : '2px solid #ddd', fontSize: '1.1rem', backgroundColor: 'white' }}
                    required
                  >
                    <option value="">Select ingredient...</option>
                    <option value="Pav">Pav</option>
                    <option value="Vada">Vada</option>
                    <option value="Chutney">Chutney</option>
                    <option value="Chole">Chole</option>
                    <option value="Paneer">Paneer</option>
                    <option value="Masala">Masala</option>
                    <option value="Bhel">Bhel</option>
                    <option value="Puri">Puri</option>
                    <option value="Samosa">Samosa</option>
                    <option value="Sev">Sev</option>
                    <option value="Dahi">Dahi</option>
                    <option value="Aloo">Aloo</option>
                  </select>
                </div>
                {errors.materialType && <div style={{ color: '#dc2626', fontSize: '1rem', marginTop: '8px' }}>{errors.materialType}</div>}
              </div>
              <div>
                <label style={{ fontWeight: 'bold', color: '#333', marginBottom: '12px', display: 'block', fontSize: '1.1rem' }}>Required Quantity (kg)</label>
                <div style={{ position: 'relative' }}>
                  <span style={{ position: 'absolute', left: '18px', top: '18px', fontSize: '20px', color: '#aaa' }}>⚖️</span>
                  <input
                    type="number"
                    name="quantity"
                    value={rawMaterial.quantity}
                    onChange={handleRawMaterialChange}
                    placeholder="Enter quantity..."
                    style={{ width: '100%', padding: '16px 16px 16px 50px', borderRadius: '10px', border: errors.quantity ? '2px solid #dc2626' : '2px solid #ddd', fontSize: '1.1rem', backgroundColor: 'white' }}
                    required
                  />
                </div>
                {errors.quantity && <div style={{ color: '#dc2626', fontSize: '1rem', marginTop: '8px' }}>{errors.quantity}</div>}
              </div>
              <div>
                <label style={{ fontWeight: 'bold', color: '#333', marginBottom: '12px', display: 'block', fontSize: '1.1rem' }}>Required Timeline</label>
                <div style={{ position: 'relative' }}>
                  <span style={{ position: 'absolute', left: '18px', top: '18px', fontSize: '20px', color: '#aaa' }}>⏰</span>
                  <select
                    name="timeline"
                    value={rawMaterial.timeline}
                    onChange={handleRawMaterialChange}
                    style={{ width: '100%', padding: '16px 16px 16px 50px', borderRadius: '10px', border: errors.timeline ? '2px solid #dc2626' : '2px solid #ddd', fontSize: '1.1rem', backgroundColor: 'white' }}
                    required
                  >
                    <option value="">Select timeline...</option>
                    <option value="Immediate">Immediate</option>
                    <option value="1 day">1 day</option>
                    <option value="2 days">2 days</option>
                    <option value="1 week">1 week</option>
                  </select>
                </div>
                {errors.timeline && <div style={{ color: '#dc2626', fontSize: '1rem', marginTop: '8px' }}>{errors.timeline}</div>}
              </div>
              <div>
                <label style={{ fontWeight: 'bold', color: '#333', marginBottom: '12px', display: 'block', fontSize: '1.1rem' }}>Budget Range (INR)</label>
                <div style={{ position: 'relative' }}>
                  <span style={{ position: 'absolute', left: '18px', top: '18px', fontSize: '20px', color: '#aaa' }}>💲</span>
                  <input
                    type="text"
                    name="budget"
                    value={rawMaterial.budget}
                    onChange={handleRawMaterialChange}
                    placeholder="e.g., 1,000 - 5,000"
                    style={{ width: '100%', padding: '16px 16px 16px 50px', borderRadius: '10px', border: errors.budget ? '2px solid #dc2626' : '2px solid #ddd', fontSize: '1.1rem', backgroundColor: 'white' }}
                    required
                  />
                </div>
                {errors.budget && <div style={{ color: '#dc2626', fontSize: '1rem', marginTop: '8px' }}>{errors.budget}</div>}
              </div>
              <button
                type="submit"
                disabled={searching}
                style={{
                  marginTop: '20px',
                  backgroundColor: '#ffd700',
                  color: '#222',
                  fontWeight: 'bold',
                  fontSize: '1.3rem',
                  border: 'none',
                  borderRadius: '12px',
                  padding: '18px 0',
                  cursor: searching ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '12px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  opacity: searching ? 0.7 : 1,
                  transition: 'all 0.2s ease'
                }}
              >
                <span role="img" aria-label="search" style={{ fontSize: '1.2rem' }}>🔍</span> {searching ? 'Searching...' : 'Search Suppliers'}
              </button>
            </form>
          </div>

          {/* Right Column - Sidebar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            {/* Trending Materials */}
            <div style={{ background: '#fff9e6', borderRadius: '15px', padding: '30px', border: '2px solid #ffd700', boxShadow: '0 4px 15px rgba(0,0,0,0.08)' }}>
              <div style={{ color: '#333', fontWeight: 600, marginBottom: '15px', fontSize: '1.3rem' }}>Trending Ingredients:</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                {trendingMaterials.map((mat) => (
                  <span key={mat} style={{ background: '#ffd700', color: '#222', borderRadius: '8px', padding: '10px 20px', fontWeight: 500, fontSize: '1rem' }}>{mat}</span>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div style={{ background: 'white', borderRadius: '15px', padding: '30px', boxShadow: '0 4px 15px rgba(0,0,0,0.08)' }}>
              <div style={{ color: '#333', fontWeight: 600, marginBottom: '20px', fontSize: '1.3rem' }}>Platform Stats:</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#666', fontSize: '1rem' }}>Active Suppliers:</span>
                  <span style={{ color: '#222', fontWeight: 'bold', fontSize: '1.1rem' }}>2,500+</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#666', fontSize: '1rem' }}>Ingredients Available:</span>
                  <span style={{ color: '#222', fontWeight: 'bold', fontSize: '1.1rem' }}>150+</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#666', fontSize: '1rem' }}>Avg. Response Time:</span>
                  <span style={{ color: '#222', fontWeight: 'bold', fontSize: '1.1rem' }}>2 hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Results Placeholder */}
        {showResults && (
          <div style={{ 
            background: 'white', 
            borderRadius: '15px', 
            boxShadow: '0 4px 15px rgba(0,0,0,0.08)', 
            padding: '50px', 
            textAlign: 'center', 
            color: '#333', 
            fontSize: '1.3rem',
            marginTop: '40px'
          }}>
            <span role="img" aria-label="success" style={{ fontSize: '3rem' }}>✅</span>
            <div style={{ marginTop: '20px', fontWeight: 600, fontSize: '1.5rem' }}>Suppliers found!</div>
            <div style={{ color: '#666', fontSize: '1.1rem', marginTop: '10px' }}>We matched you with the best suppliers for your needs. (Demo placeholder)</div>
          </div>
        )}
      </div>
    </div>
  );
} 