import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Services from './pages/Services';
import Contact from './pages/Contact';
import ServiceDetail from './pages/ServiceDetail';
import background from '../public/resource/Background_Aura_1.jpg';
import background2 from '../public/resource/Background_Aura_2.jpg';
import background3 from '../public/resource/Background_Aura_3.jpg';
import Footer from './components/Footer';


function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

  let backgroundImage = background;

  if (location.pathname === '/login' || location.pathname === '/register') {
    backgroundImage = background2;
  }
  else if (location.pathname.startsWith('/services')) {
    backgroundImage = background3;
  }
  else {
    backgroundImage = background;
  }

  return (
    <div id="bg" className="min-h-screen bg-fixed bg-cover bg-center relative" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="absolute inset-0 w-full bg-black bg-fixed opacity-50"></div>
      <div className="relative z-10">
        <Navbar />
        <main className="flex-grow pb-20">
          {children}
        </main>
        {!isAuthPage && <Footer />}
      </div>
    </div>
  );
}

function App() {

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;