import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-10 mt-10 shadow-inner">
      <motion.div
        className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* ROAMR Branding */}
        <div>
          <h2 className="text-2xl font-bold tracking-widest mb-2">ROAMR 🌏</h2>
          <p className="text-sm">Your smart travel buddy to explore Karnataka and beyond!</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/plan-trip" className="hover:underline">Plan a Trip</Link></li>
            <li><Link to="/hotels-vehicles" className="hover:underline">Hotels & Vehicles</Link></li>
            <li><Link to="/customization" className="hover:underline">Customization</Link></li>
          </ul>
        </div>

        {/* Help & Support */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Help</h3>
          <ul className="space-y-1 text-sm">
            <li><Link to="/help" className="hover:underline">Help Center</Link></li>
            <li><Link to="/about" className="hover:underline">About Us</Link></li>
            <li><Link to="/feedback" className="hover:underline">Feedback</Link></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Connect With Us</h3>
          <div className="flex space-x-4 mt-2">
            <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
            <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
            <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
            <a href="mailto:roamr@email.com" aria-label="Email"><Mail size={20} /></a>
          </div>
        </div>
      </motion.div>

      {/* Bottom Text */}
      <div className="text-center text-sm mt-8 opacity-80">
        © {new Date().getFullYear()} ROAMR. Made with ❤️ in Karnataka.
      </div>
    </footer>
  );
};

export default Footer;
