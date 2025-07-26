import React from 'react';
import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 text-gray-800 px-6 py-12">
      <motion.div
        className="max-w-5xl mx-auto bg-white shadow-2xl rounded-3xl p-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-6 text-center text-purple-700"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          About ROAMR 🌍
        </motion.h1>

        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          ROAMR is your intelligent and fun travel companion built to help you plan memorable trips across beautiful destinations in Karnataka.
        </p>

        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Whether you're an adventure lover, a cultural explorer, or just need a break, ROAMR generates a personalized itinerary based on your preferences, budget, and travel dates.
        </p>

        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          🚗 We recommend transport options, 🏨 hotel stays, 🗺️ sightseeing, and 🧭 local experiences — all curated using AI and travel APIs.
        </p>

        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <h2 className="text-2xl font-semibold text-indigo-600 mb-2">Our Mission</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            To make travel planning stress-free, smart, and exciting — one destination at a time.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutPage;
