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
      className="min-h-screen bg-gradient-to-br from-blue-200 to-pink-100 flex justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.form
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md"
        onSubmit={handleSubmit}
        whileHover={{ scale: 1.02 }}
      >
        <h2 className="text-3xl font-bold text-center mb-6 text-purple-700">Plan Your Trip</h2>

        <div className="mb-4">
          <label className="block mb-1 font-semibold text-gray-700">From Date</label>
          <input
            type="date"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-purple-400"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-semibold text-gray-700">To Date</label>
          <input
            type="date"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-purple-400"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-semibold text-gray-700">Budget (in ₹)</label>
          <input
            type="number"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            placeholder="Eg: 5000"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-purple-400"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-1 font-semibold text-gray-700">Destination</label>
          <select
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-purple-400"
          >
            <option value="">Select a place in Karnataka</option>
            {karnatakaPlaces.map((place) => (
              <option key={place} value={place}>
                {place}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition font-semibold"
        >
          Show My Plan 🚀
        </button>
      </motion.form>
    </motion.div>
  );
};

export default PlanForm;
