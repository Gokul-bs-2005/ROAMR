import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const toggleForm = () => setIsLogin(!isLogin);

  const passwordRegex =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isLogin) {
      if (form.password !== form.confirmPassword) {
        alert('Passwords do not match!');
        return;
      }
      if (!passwordRegex.test(form.password)) {
        alert(
          'Password must be at least 8 characters, include 1 uppercase letter, 1 number, and 1 special character.'
        );
        return;
      }
    }

    localStorage.setItem("loggedIn", "true");
    alert(`${isLogin ? 'Logged in' : 'Signed up'} successfully!`);
    navigate('/home');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black relative overflow-hidden">
      <img
        src="/assets/images/Background/Background.jpg"
        alt="Login Background"
        className="absolute w-full h-full object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-purple-900/40 to-black/60 z-0" />

      {/* ROAMR Title */}
      <div className="relative z-10 mb-6 text-center">
        <h1 className="text-6xl font-extrabold text-white tracking-widest drop-shadow-xl">
          ROAMR
        </h1>
        <p className="text-purple-200 mt-2 text-lg tracking-wide drop-shadow-sm">
          Explore Beyond Limits
        </p>
      </div>

      <motion.div
        className="relative z-10 bg-white/10 backdrop-blur-lg shadow-2xl rounded-3xl p-10 w-full max-w-md border border-white/20"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <h2 className="text-4xl font-extrabold text-center text-white mb-6 tracking-tight drop-shadow-md">
          {isLogin ? 'Welcome Back to ROAMR' : 'Create Your ROAMR Account'}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-white mb-1">
                Name
              </label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-2 rounded-xl bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-400"
                placeholder="Your Name"
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-white mb-1">
              Email
            </label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-2 rounded-xl bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="you@example.com"
            />
          </div>

          <div className="relative">
            <label className="block text-sm font-medium text-white mb-1">
              Password
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              required
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="w-full px-4 py-2 pr-10 rounded-xl bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="••••••••"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-8 right-3 text-white opacity-70"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
            {!isLogin && (
              <p className="text-xs text-purple-200 mt-1">
                Must be at least 8 characters, with 1 uppercase, 1 number and 1 special character.
              </p>
            )}
          </div>

          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-white mb-1">
                Confirm Password
              </label>
              <input
                type={showPassword ? 'text' : 'password'}
                required
                value={form.confirmPassword}
                onChange={(e) =>
                  setForm({ ...form, confirmPassword: e.target.value })
                }
                className="w-full px-4 py-2 rounded-xl bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-400"
                placeholder="••••••••"
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-indigo-500 hover:from-purple-700 hover:to-indigo-600 text-white font-semibold py-2 rounded-xl shadow-lg transition duration-300"
          >
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-white/80">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
          <button
            type="button"
            onClick={toggleForm}
            className="text-purple-300 hover:underline font-semibold"
          >
            {isLogin ? 'Sign Up' : 'Login'}
          </button>
        </p>

        <p className="mt-4 text-center text-sm text-white/80">
          Want to skip login?{' '}
          <button
            type="button"
            onClick={() => {
              localStorage.setItem("loggedIn", "false");
              navigate('/home');
            }}
            className="text-red-300 hover:underline font-semibold"
          >
            Continue as Guest
          </button>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
