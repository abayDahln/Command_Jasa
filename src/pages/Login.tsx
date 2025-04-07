import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LogIn } from 'lucide-react';
import colors from '../styles';

function Login() {
  const [email, setEmail] = useState('');
  const [showDialog, setShowDialog] = useState(false);
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

  };

  return (
    <div className="min-h-[calc(100vh-88px)] flex items-center justify-center px-4" style={{ paddingTop: 150 }}>
      <div className="max-w-md w-full space-y-8 bg-[#1a1f3d] p-8 rounded-lg">
        <div className="text-center">
          <LogIn className="mx-auto h-12 w-12" style={{ color: colors.secondary }} />
          <h2 className="mt-6 text-3xl font-bold" style={{ color: colors.textPrimary }}>Sign in to your account</h2>
          <p className="mt-2 text-sm text-gray-400" style={{ color: colors.textSecondary }}>
            Or{' '}
            <Link to="/Command_Jasa/register" className="text-[#8c9aff] hover:text-[#c1b6fe]" >
              create a new account
            </Link>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="text-sm font-medium text-white">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-3 py-2 bg-[#020817] border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#b8e6f4]"
              />
            </div>
            <div>
              <label htmlFor="password" className="text-sm font-medium text-white">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 bg-[#020817] border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#b8e6f4]"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 bg-[#020817] border-gray-700 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-white">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <Link to="" className="text-[#8c9aff] hover:text-[#c1b6fe]">
                Forgot your password?
              </Link>
            </div>
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#efb4ff] hover:bg-[#c1b6fe] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"

            onClick={() => setShowDialog(true)}
          >
            Sign in
          </button>
        </form>

        {showDialog && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-[#1a1f3d] rounded-lg p-6 max-w-md w-full relative">

              <h3 className="text-2xl font-bold text-center text-white mb-4">Comming Soon</h3>
              <p className="text-gray-400 text-center mb-6">
                Not Available at This Time
              </p>
              <div className="space-y-4">
                <button
                  onClick={() => setShowDialog(false)}
                  className="w-full flex items-center justify-center space-x-2 px-6 py-3 rounded-lg"

                  style={{ background: colors.primary, color: colors.textPrimary }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = colors.secondary)}
                  onMouseLeave={(e) => (e.currentTarget.style.background = colors.primary)}
                >
                  <span>Close</span>
                </button>

              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;