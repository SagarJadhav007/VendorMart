import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import LoginModal from '../Auth/LoginModal';
import RegisterModal from '../Register/RegisterModal';

export default function Header({ isLoggedIn, onLogout, role }) {
    const [isRegisterOpen, setRegisterOpen] = useState(false);
    const [isLoginOpen, setLoginOpen] = useState(false);
    const [isMenuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);

    // Close menu on outside click
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleLogin = () => {
        onLogout();
    };

    return (
        <>
            <header style={{
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                position: 'sticky',
                top: 0,
                zIndex: 50
            }}>
                <div style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    padding: '0 20px',
                    height: '96px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                        <div style={{
                            fontSize: '24px',
                            fontWeight: 'bold',
                            color: '#333',
                            marginLeft: '20px'
                        }}>
                            VendorMart
                        </div>
                    </Link>
                    
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                        {role === 'customer' && (
                            <Link to="/find-raw-materials" style={{
                                textDecoration: 'none',
                                color: '#333',
                                fontWeight: 'bold',
                                padding: '12px 24px',
                                borderRadius: '8px',
                                backgroundColor: '#ffd700',
                                fontSize: '16px',
                                border: '2px solid #ffd700',
                                transition: 'background 0.2s, color 0.2s',
                            }}>
                                Find Raw Materials
                            </Link>
                        )}
                        {role === 'vendor' && (
                            <Link to="/" style={{
                                textDecoration: 'none',
                                color: '#333',
                                fontWeight: 'bold',
                                padding: '12px 24px',
                                borderRadius: '8px',
                                backgroundColor: '#ffd700',
                                fontSize: '16px',
                                border: '2px solid #ffd700',
                                transition: 'background 0.2s, color 0.2s',
                            }}>
                                Dashboard
                            </Link>
                        )}
                        {isLoggedIn ? (
                            <>
                                <button 
                                    onClick={onLogout}
                                    style={{
                                        border: '2px solid #333',
                                        borderRadius: '24px',
                                        color: 'white',
                                        backgroundColor: '#333',
                                        padding: '12px 24px',
                                        fontSize: '16px',
                                        fontWeight: 'bold',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.backgroundColor = 'white';
                                        e.target.style.color = '#333';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.backgroundColor = '#333';
                                        e.target.style.color = 'white';
                                    }}
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <button 
                                    style={{
                                        border: '2px solid #333',
                                        borderRadius: '24px',
                                        color: 'white',
                                        backgroundColor: '#333',
                                        padding: '12px 24px',
                                        fontSize: '16px',
                                        fontWeight: 'bold',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.backgroundColor = 'white';
                                        e.target.style.color = '#333';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.backgroundColor = '#333';
                                        e.target.style.color = 'white';
                                    }}
                                    onClick={() => setLoginOpen(true)}
                                >
                                    LOGIN
                                </button>
                                <button 
                                    style={{
                                        border: '2px solid #333',
                                        borderRadius: '24px',
                                        color: 'white',
                                        backgroundColor: '#333',
                                        padding: '12px 24px',
                                        fontSize: '16px',
                                        fontWeight: 'bold',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.backgroundColor = 'white';
                                        e.target.style.color = '#333';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.backgroundColor = '#333';
                                        e.target.style.color = 'white';
                                    }}
                                    onClick={() => setRegisterOpen(true)}
                                >
                                    REGISTER
                                </button>
                            </>
                        )}
                        {/* Menu Button */}
                        <button
                            onClick={() => setMenuOpen(true)}
                            style={{
                                width: '40px',
                                height: '40px',
                                backgroundColor: '#333',
                                borderRadius: '8px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                border: 'none',
                                cursor: 'pointer'
                            }}
                        >
                            <span style={{ color: 'white', fontSize: '20px' }}>☰</span>
                        </button>
                    </div>
                </div>

                {/* Overlay */}
                {isMenuOpen && (
                    <div 
                        style={{
                            position: 'fixed',
                            inset: 0,
                            zIndex: 100,
                            backgroundColor: 'rgba(0,0,0,0.5)'
                        }} 
                        onClick={() => setMenuOpen(false)} 
                    />
                )}

                {/* Drawer */}
                <div style={{
                    position: 'fixed',
                    top: 0,
                    right: 0,
                    width: '288px',
                    height: '100%',
                    backgroundColor: '#333',
                    color: 'white',
                    zIndex: 101,
                    transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)',
                    transition: 'transform 0.3s ease'
                }}>
                    <div style={{ padding: '16px', marginBottom: '32px' }}>
                        <button 
                            style={{
                                position: 'fixed',
                                right: '16px',
                                background: 'none',
                                border: 'none',
                                color: 'white',
                                fontSize: '32px',
                                cursor: 'pointer'
                            }}
                            onClick={() => setMenuOpen(false)}
                        >
                            ✕
                        </button>
                    </div>

                    <nav style={{
                        display: 'flex',
                        flexDirection: 'column',
                        padding: '40px',
                        gap: '32px',
                        fontWeight: '500'
                    }}>
                        {role === 'customer' && <Link to="/find-raw-materials" style={{ color: 'white', textDecoration: 'none', fontSize: '16px' }}>Find Raw Materials</Link>}
                        {role === 'vendor' && <Link to="/" style={{ color: 'white', textDecoration: 'none', fontSize: '16px' }}>Dashboard</Link>}
                        <Link to="/profiles/illustrative" style={{ color: 'white', textDecoration: 'none', fontSize: '16px' }}>Illustrative Profiles</Link>
                        <Link to="/caseStudiesPage" style={{ color: 'white', textDecoration: 'none', fontSize: '16px' }}>Case Studies</Link>
                        <Link to="/indusguru/videos" style={{ color: 'white', textDecoration: 'none', fontSize: '16px' }}>IndusGuru Videos</Link>
                        <Link to="/consultant/referral-program" style={{ color: 'white', textDecoration: 'none', fontSize: '16px' }}>Referral Program</Link>
                        <Link to="/Recognition" style={{ color: 'white', textDecoration: 'none', fontSize: '16px' }}>Recognitions & Publications</Link>
                        <Link to="/about" style={{ color: 'white', textDecoration: 'none', fontSize: '16px' }}>About Us</Link>
                        <Link to="/contact" style={{ color: 'white', textDecoration: 'none', fontSize: '16px' }}>Post Enquiry</Link>
                    </nav>
                </div>
            </header>

            {/* Login Modal */}
            <LoginModal 
                isOpen={isLoginOpen}
                onClose={() => setLoginOpen(false)}
                onSwitchToRegister={() => {
                    setLoginOpen(false);
                    setRegisterOpen(true);
                }}
                onLogin={handleLogin}
            />
            <RegisterModal 
                isOpen={isRegisterOpen}
                onClose={() => setRegisterOpen(false)}
                onSwitchToLogin={() => {
                    setLoginOpen(true);
                    setRegisterOpen(false);
                }}
                onRegister={handleRegister}
            />
        </>
    );
} 