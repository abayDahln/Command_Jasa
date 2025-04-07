import { Link } from 'react-router-dom';
import colors from '../styles';
import logo from '../../public/resource/command_spes_circle.png'

function Footer() {
  const email = "abby11dahlan@gmail.com";
  const subject = ``;
  const body = ``;

  const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${encodeURIComponent(body)}`;

  return (
    <footer className="bg-[#1a1f3d] py-6  left-0 w-full backdrop-blur-md bg-black/30 shadow-md transition-all duration-300">
      <div className="container mx-auto px-4 ">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <img className="w-8 h-8 rounded-full" style={{ color: colors.optionally, width: 50, height: 50 }} src={logo} alt='logo' />
              <span className="text-xl font-bold ps-2" style={{ color: colors.textPrimary }}>CJasa</span>
            </Link>
            <div className="text-gray-400">
              <p>Command Spes</p>
              <p>SMKN 10 Jakarta</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="" className="text-gray-400 hover:text-white">Pricing</Link></li>
              <li><Link to="" className="text-gray-400 hover:text-white">Resources</Link></li>
              <li><Link to="" className="text-gray-400 hover:text-white">About us</Link></li>
              <li><Link to="" className="text-gray-400 hover:text-white">FAQ</Link></li>
              <li><Link to="" className="text-gray-400 hover:text-white">Contact us</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-bold mb-4">Social</h3>
            <ul className="space-y-2">
              <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">Facebook</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">Instagram</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">LinkedIn</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">Twitter</a></li>
              <li><a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">Youtube</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="" className="text-gray-400 hover:text-white">Terms of service</Link></li>
              <li><Link to="" className="text-gray-400 hover:text-white">Privacy policy</Link></li>
              <li><Link to="" className="text-gray-400 hover:text-white">Cookie policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <p className="text-gray-400">Phone number</p>
              <a href="https://wa.me/6288808908463" className={`text-white hover:text-[#8c9aff]`}>+62 888-0890-8463</a>
            </div>
            <div className="space-y-2">
              <p className="text-gray-400">Email</p>
              <a href={`${(gmailURL)}`} className="text-white hover:text-[#8c9aff]">abby11dahlan@gmail.com</a>
            </div>
            <div className="space-y-2">
              <p className="text-gray-400">Instagram</p>
              <a href="https://www.instagram.com/abby_dahln/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-500">@abby_dahln</a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Security. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;