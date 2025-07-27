import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const karnatakaPlaces = [
  'Bangalore',
  'Mysore',
  'Coorg',
  'Hampi',
  'Gokarna',
  'Chikmagalur',
  'Badami',
  'Jog Falls',
  'Kabini',
  'Udupi',
];

const PlanForm = () => {
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [budget, setBudget] = useState('');
  const [destination, setDestination] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fromDate || !toDate || !budget || !destination) {
      alert('Please fill in all fields!');
      return;
    }

    navigate('/trip-result', {
      state: { fromDate, toDate, budget, destination },
    });
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-purple-300 via-pink-200 to-yellow-100 flex items-center justify-center p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.form
        onSubmit={handleSubmit}
        className="glassmorphic p-10 rounded-3xl w-full max-w-lg shadow-2xl"
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 120 }}
      >
        <h2 className="text-4xl font-extrabold text-center text-purple-700 mb-8 tracking-wide animate-pulse">
          Plan Your Dream Trip ✨
        </h2>

        {/* From Date */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-1">From Date</label>
          <input
            type="date"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
            className="input-field"
          />
        </div>

        {/* To Date */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-1">To Date</label>
          <input
            type="date"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
            className="input-field"
          />
        </div>

        {/* Budget */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-1">Budget (₹)</label>
          <input
            type="number"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            placeholder="Eg: 5000"
            className="input-field"
          />
        </div>

        {/* Destination */}
        <div className="mb-8">
          <label className="block text-sm font-semibold text-gray-700 mb-1">Destination</label>
          <select
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="input-field"
          >
            <option value="">Select a place in Karnataka</option>
            {karnatakaPlaces.map((place) => (
              <option key={place} value={place}>
                {place}
              </option>
            ))}
          </select>
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          whileTap={{ scale: 0.95 }}
          whileHover={{
            backgroundColor: '#9333EA',
            boxShadow: '0 0 12px #9333EA',
          }}
          className="w-full bg-purple-600 text-white py-3 rounded-xl text-lg font-semibold tracking-wide transition duration-300 hover:bg-purple-700"
        >
          Show My Plan 🚀
        </motion.button>
      </motion.form>
    </motion.div>
  );
};

export default PlanForm;
