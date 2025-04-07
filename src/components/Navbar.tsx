import React, { useEffect } from 'react';
import colors from '../styles';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../../public/resource/command_spes_circle.png'

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <ScrollToTop />
      <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-black/30 shadow-md transition-all duration-300 z-50 px-20 py-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img className="w-8 h-8" style={{ width: 50, height: 50 }} src={logo} alt="Logo" />
            <span className="text-xl font-bold ps-2" style={{ color: colors.textPrimary }}>CJasa</span>
          </Link>

          <button
            className="md:hidden" style={{ color: colors.textPrimary }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>

          <div className="hidden md:flex space-x-8">
            {['/', '/Services', '/Contact', '/Dashboard'].map((path, index) => (
              <Link key={index} to={path} style={{ color: isActive(path) ? colors.white : colors.secondary }}
                onMouseEnter={(e) => (e.currentTarget.style.color = isActive(path) ? colors.primary : colors.optionally)}
                onMouseLeave={(e) => (e.currentTarget.style.color = isActive(path) ? colors.white : colors.secondary)}>
                {path.replace('/', '') || 'Home'}
              </Link>
            ))}
          </div>

          <Link
            to="/login"
            className="hidden md:block px-6 py-2 rounded-full"
            style={{ background: colors.secondary, color: colors.textPrimary }}
            onMouseEnter={(e) => (e.currentTarget.style.background = colors.primary)}
            onMouseLeave={(e) => (e.currentTarget.style.background = colors.secondary)}
          >
            Login
          </Link>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-[#1a1f3d] rounded-lg p-4">
            <div className="flex flex-col space-y-4">
              {['/', '/Services', '/Contact', '/Dashboard', '/Login'].map((path, index) => (
                <Link
                  key={index}
                  to={path}
                  style={{ color: isActive(path) ? colors.white : colors.secondary }}
                  onClick={() => setIsMenuOpen(false)}
                  onMouseEnter={(e) => (e.currentTarget.style.color = isActive(path) ? colors.primary : colors.optionally)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = isActive(path) ? colors.white : colors.secondary)}
                >
                  {path.replace('/', '') || 'Home'}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
