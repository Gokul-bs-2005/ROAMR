import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Compass, Home, Info, HelpCircle, LogIn } from 'lucide-react';

const navItems = [
  { name: 'Home', path: '/home', icon: <Home size={20} /> },
  { name: 'Plan a Trip', path: '/plan-trip', icon: <Compass size={20} /> },
  { name: 'About', path: '/about', icon: <Info size={20} /> },
  { name: 'Help', path: '/help', icon: <HelpCircle size={20} /> },
  { name: 'Login', path: '/login', icon: <LogIn size={20} /> },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <motion.nav
      className="bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg py-4 px-6 flex justify-between items-center fixed w-full z-50"
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link to="/home" className="text-white text-2xl font-bold">
        ROAMR ✈️
      </Link>

      <ul className="flex space-x-6 text-white font-medium text-lg">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link
              to={item.path}
              className={`flex items-center gap-2 hover:text-yellow-300 transition ${
                location.pathname === item.path ? 'text-yellow-300' : ''
              }`}
            >
              {item.icon}
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default Navbar;
