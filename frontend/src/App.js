import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Welcome from './Components/Welcome';
import Register from './Components/Register';
import Login from './Components/Login';
import Otp from './Components/Otp';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Indian from './Components/Indian';
import Mexican from './Components/Mexican';
import Italian from './Components/Italian';
import American from './Components/American';
import Chinese from './Components/Chinese';
import Thai from './Components/Thai';
import Japanese from './Components/Japanese';
import Snacks from './Components/Snacks';
import C1 from './Components/C1';
import Cart from './Components/Cart';
import Header from './Components/Header';
import Footer from './Components/Footer';

function AppWrapper() {
  const location = useLocation();

  // Pages where header & footer should be hidden
  const hideHeaderFooterRoutes = ['/', '/register', '/login', '/otp', '/contact'];
  const shouldHideHeaderFooter = hideHeaderFooterRoutes.includes(location.pathname.toLowerCase());

  return (
    <>
      {!shouldHideHeaderFooter && <Header />}

      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/indian" element={<Indian />} />
        <Route path="/mexican" element={<Mexican />} />
        <Route path="/italian" element={<Italian />} />
        <Route path="/american" element={<American />} />
        <Route path="/chinese" element={<Chinese />} />
        <Route path="/thai" element={<Thai />} />
        <Route path="/japanese" element={<Japanese />} />
        <Route path="/snacks" element={<Snacks />} />
        <Route path="/c1" element={<C1 />} />
        <Route path="/cart" element={<Cart />} />
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
