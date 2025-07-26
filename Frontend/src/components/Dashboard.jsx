import React, { useState } from 'react';

export default function Dashboard() {
  const [inventory, setInventory] = useState({
    materialType: '',
    quantity: '',
    price: '',
    leadTime: '',
    certifications: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInventory(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Inventory updated:', inventory);
    setInventory({
      materialType: '',
      quantity: '',
      price: '',
      leadTime: '',
      certifications: ''
    });
  };

  return (
    <div style={{ 
      backgroundColor: '#fff5e6', 
      minHeight: '100vh', 
      padding: '40px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
          {/* Inventory Management Form */}
          <div style={{ 
            backgroundColor: 'white', 
            padding: '40px', 
            borderRadius: '15px',
            boxShadow: '0 6px 12px rgba(0,0,0,0.1)'
          }}>
            <h2 style={{ color: '#333', marginBottom: '30px', fontSize: '24px' }}>Manage Inventory</h2>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '25px' }}>
                <label style={{ display: 'block', marginBottom: '10px', color: '#333', fontWeight: 'bold', fontSize: '16px' }}>
                  Material Type:
                </label>
                <select 
                  name="materialType"
                  value={inventory.materialType}
                  onChange={handleInputChange}
                  style={{ 
                    width: '100%', 
                    padding: '15px', 
                    border: '2px solid #ddd', 
                    borderRadius: '8px',
                    fontSize: '16px',
                    backgroundColor: 'white'
                  }}
                  required
                >
                  <option value="">Select material...</option>
                  <option value="Steel">Steel</option>
                  <option value="Aluminum">Aluminum</option>
                  <option value="Copper">Copper</option>
                  <option value="Plastic">Plastic</option>
                </select>
              </div>

              <div style={{ marginBottom: '25px' }}>
                <label style={{ display: 'block', marginBottom: '10px', color: '#333', fontWeight: 'bold', fontSize: '16px' }}>
                  Available Quantity (tons):
                </label>
                <input 
                  type="number"
                  name="quantity"
                  value={inventory.quantity}
                  onChange={handleInputChange}
                  placeholder="Enter available quantity..."
                  style={{ 
                    width: '100%', 
                    padding: '15px', 
                    border: '2px solid #ddd', 
                    borderRadius: '8px',
                    fontSize: '16px',
                    backgroundColor: 'white'
                  }}
                  required
                />
              </div>

              <div style={{ marginBottom: '25px' }}>
                <label style={{ display: 'block', marginBottom: '10px', color: '#333', fontWeight: 'bold', fontSize: '16px' }}>
                  Price per Ton (USD):
                </label>
                <input 
                  type="number"
                  name="price"
                  value={inventory.price}
                  onChange={handleInputChange}
                  placeholder="Enter price per ton..."
                  style={{ 
                    width: '100%', 
                    padding: '15px', 
                    border: '2px solid #ddd', 
                    borderRadius: '8px',
                    fontSize: '16px',
                    backgroundColor: 'white'
                  }}
                  required
                />
              </div>

              <div style={{ marginBottom: '25px' }}>
                <label style={{ display: 'block', marginBottom: '10px', color: '#333', fontWeight: 'bold', fontSize: '16px' }}>
                  Lead Time (days):
                </label>
                <input 
                  type="number"
                  name="leadTime"
                  value={inventory.leadTime}
                  onChange={handleInputChange}
                  placeholder="Enter lead time..."
                  style={{ 
                    width: '100%', 
                    padding: '15px', 
                    border: '2px solid #ddd', 
                    borderRadius: '8px',
                    fontSize: '16px',
                    backgroundColor: 'white'
                  }}
                  required
                />
              </div>

              <div style={{ marginBottom: '30px' }}>
                <label style={{ display: 'block', marginBottom: '10px', color: '#333', fontWeight: 'bold', fontSize: '16px' }}>
                  Certifications:
                </label>
                <textarea 
                  name="certifications"
                  value={inventory.certifications}
                  onChange={handleInputChange}
                  placeholder="ISO 9001, REACH compliant, etc."
                  style={{ 
                    width: '100%', 
                    padding: '15px', 
                    border: '2px solid #ddd', 
                    borderRadius: '8px',
                    fontSize: '16px',
                    minHeight: '120px',
                    resize: 'vertical',
                    backgroundColor: 'white'
                  }}
                />
              </div>

              <button 
                type="submit"
                style={{ 
                  backgroundColor: '#ffd700', 
                  color: '#333', 
                  padding: '18px 36px', 
                  border: 'none', 
                  borderRadius: '8px',
                  fontSize: '18px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                }}
              >
                📦 Update Inventory
              </button>
            </form>
          </div>

          {/* Performance Metrics */}
          <div style={{ 
            backgroundColor: 'white', 
            padding: '40px', 
            borderRadius: '15px',
            boxShadow: '0 6px 12px rgba(0,0,0,0.1)'
          }}>
            <h2 style={{ color: '#333', marginBottom: '30px', fontSize: '24px' }}>Performance Metrics</h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
              <div style={{ 
                textAlign: 'center', 
                padding: '30px', 
                backgroundColor: '#fff9e6', 
                borderRadius: '12px',
                border: '3px solid #ffd700'
              }}>
                <div style={{ fontSize: '32px', marginBottom: '15px' }}>⏰</div>
                <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#333' }}>24</div>
                <div style={{ color: '#666', fontSize: '16px' }}>Active Orders</div>
              </div>

              <div style={{ 
                textAlign: 'center', 
                padding: '30px', 
                backgroundColor: '#fff9e6', 
                borderRadius: '12px',
                border: '3px solid #ffd700'
              }}>
                <div style={{ fontSize: '32px', marginBottom: '15px' }}>💰</div>
                <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#333' }}>$187K</div>
                <div style={{ color: '#666', fontSize: '16px' }}>Monthly Revenue</div>
              </div>

              <div style={{ 
                textAlign: 'center', 
                padding: '30px', 
                backgroundColor: '#fff9e6', 
                borderRadius: '12px',
                border: '3px solid #ffd700'
              }}>
                <div style={{ fontSize: '32px', marginBottom: '15px' }}>🛡️</div>
                <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#333' }}>96%</div>
                <div style={{ color: '#666', fontSize: '16px' }}>Reliability Score</div>
              </div>

              <div style={{ 
                textAlign: 'center', 
                padding: '30px', 
                backgroundColor: '#fff9e6', 
                borderRadius: '12px',
                border: '3px solid #ffd700'
              }}>
                <div style={{ fontSize: '32px', marginBottom: '15px' }}>📊</div>
                <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#333' }}>89%</div>
                <div style={{ color: '#666', fontSize: '16px' }}>Customer Satisfaction</div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Orders Section */}
        <div style={{ 
          backgroundColor: 'white', 
          padding: '40px', 
          borderRadius: '15px',
          marginTop: '40px',
          boxShadow: '0 6px 12px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ color: '#333', marginBottom: '30px', fontSize: '24px' }}>Recent Orders</h2>
          <div style={{ display: 'grid', gap: '20px' }}>
            <div style={{ 
              padding: '25px', 
              backgroundColor: '#fff9e6', 
              borderRadius: '12px',
              border: '2px solid #ffd700'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ fontSize: '18px' }}>
                  <strong>Order #1234</strong> - Steel (50 tons)
                </div>
                <span style={{ 
                  backgroundColor: '#ffd700', 
                  color: '#333', 
                  padding: '8px 16px', 
                  borderRadius: '20px',
                  fontSize: '14px',
                  fontWeight: 'bold'
                }}>
                  Pending
                </span>
              </div>
            </div>
            
            <div style={{ 
              padding: '25px', 
              backgroundColor: '#fff9e6', 
              borderRadius: '12px',
              border: '2px solid #ffd700'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ fontSize: '18px' }}>
                  <strong>Order #1235</strong> - Aluminum (25 tons)
                </div>
                <span style={{ 
                  backgroundColor: '#90EE90', 
                  color: '#333', 
                  padding: '8px 16px', 
                  borderRadius: '20px',
                  fontSize: '14px',
                  fontWeight: 'bold'
                }}>
                  Shipped
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 