import React, { useState } from 'react';
import { FaEnvelope, FaLock, FaKey } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would perform API authentication here.
    // For this demo, we'll just log the credentials and navigate to the dashboard.
    console.log('Login attempt:', { email, password });
    if (email && password) {
      // Navigate to the default dashboard page on successful login
      navigate('/logistics');
    } else {
      alert('Please enter both email and password.');
    }
  };

  return (
    <div className="flex h-screen bg-white font-sans">
      {/* Left Column (Branding & Visuals) */}
      <div className="hidden lg:flex w-1/2 items-center justify-center bg-navy p-12 relative overflow-hidden">
        {/* Abstract background effect */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-blue/80 to-navy"></div>
        <div className="w-full h-full border-4 border-white/10 rounded-3xl"></div>
        
        <div className="relative z-10 text-center">
          <div className="bg-white text-primary-blue w-20 h-20 flex items-center justify-center rounded-2xl text-4xl font-bold mx-auto mb-6 shadow-lg">
            LL
          </div>
          <h1 className="text-4xl font-bold text-white mb-4 tracking-wide">LOGIC LEAP</h1>
          <p className="text-lg text-blue-200">Manufacturing Intelligence, Clarified.</p>
        </div>
      </div>

      {/* Right Column (Login Form) */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold text-text-dark mb-2">Welcome Back</h2>
          <p className="text-text-light mb-8">Sign in to continue to Logic Leap.</p>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-text-light mb-2" htmlFor="email">
                Email Address
              </label>
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-text-light" />
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-3 py-2.5 border border-border-color rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-text-light mb-2" htmlFor="password">
                Password
              </label>
              <div className="relative">
                <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-text-light" />
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-3 py-2.5 border border-border-color rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>
            
            <div className="flex items-center justify-between mb-6 text-sm">
              <label className="flex items-center text-text-light cursor-pointer">
                <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-primary-blue focus:ring-primary-blue" />
                <span className="ml-2">Remember Me</span>
              </label>
              <a href="#" className="font-medium text-primary-blue hover:underline">
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-primary-blue text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition-colors"
            >
              Sign In
            </button>
            
            <div className="my-6 flex items-center">
              <div className="flex-grow border-t border-border-color"></div>
              <span className="mx-4 text-xs text-text-light">OR</span>
              <div className="flex-grow border-t border-border-color"></div>
            </div>

            <button
              type="button"
              className="w-full flex items-center justify-center gap-2 border border-border-color text-text-dark font-semibold py-3 rounded-md hover:bg-gray-100 transition-colors"
            >
              <FaKey />
              Sign In with SSO
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;