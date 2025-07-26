import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import SignupLogin from './components/SignupLogin';
import Header from './components/Header';
import FindRawMaterialsDashboard from './components/FindRawMaterialsDashboard';

function AppRoutes({ isLoggedIn, role, handleLogin, handleLogout }) {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (isLoggedIn && role === 'vendor' && location.pathname !== '/') {
      navigate('/', { replace: true });
    } else if (isLoggedIn && role === 'customer' && location.pathname !== '/find-raw-materials') {
      navigate('/find-raw-materials', { replace: true });
    }
  }, [isLoggedIn, role, navigate, location.pathname]);

  if (!isLoggedIn) {
    return <SignupLogin onLogin={handleLogin} />;
  }

  return (
    <>
      <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} role={role} />
      <Routes>
        {role === 'vendor' && <Route path="/" element={<Dashboard />} />}
        {role === 'customer' && <Route path="/find-raw-materials" element={<FindRawMaterialsDashboard />} />}
        {/* Redirect to correct dashboard if user tries to access the other */}
        {role === 'vendor' && <Route path="/find-raw-materials" element={<Navigate to="/" replace />} />}
        {role === 'customer' && <Route path="/" element={<Navigate to="/find-raw-materials" replace />} />}
        {/* Fallback: redirect to correct dashboard */}
        <Route path="*" element={<Navigate to={role === 'vendor' ? '/' : '/find-raw-materials'} replace />} />
      </Routes>
    </>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState(null); // 'vendor' or 'customer'

  const handleLogin = (userRole) => {
    setIsLoggedIn(true);
    setRole(userRole);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setRole(null);
  };

  return (
    <Router>
      <AppRoutes
        isLoggedIn={isLoggedIn}
        role={role}
        handleLogin={handleLogin}
        handleLogout={handleLogout}
      />
    </Router>
  );
}

export default App;
