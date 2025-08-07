import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Welcome from './Components/Welcome';
import Register from './Components/Register';
import Login from './Components/Login';
import Otp from './Components/Otp';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home'
import { useEffect } from 'react';

function AppWrapper() {
  const location = useLocation();

  // Define routes where Header/Footer should not appear
  const hideOnRoutes = ['/', '/register', '/login','/otp'];

  // Check if the current path is one of those
  const shouldHideHeaderFooter = hideOnRoutes.includes(location.pathname.toLowerCase());

  return (
    <>
      {!shouldHideHeaderFooter && <Header />}
      <Home/>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/otp" element={<Otp />} />
      </Routes>

      {!shouldHideHeaderFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
