import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const destinations = ['Coorg', 'Gokarna', 'Chikmagalur', 'Hampi', 'Mysore', 'Udupi', 'Badami', 'Jog Falls'];
const preferences = ['Adventure', 'Relaxation', 'Heritage', 'Nature', 'Beach', 'Food'];

const PlanTrip = () => {
  const navigate = useNavigate();
  const [tripDetails, setTripDetails] = useState({
    fromDate: '',
    toDate: '',
    budget: '',
    destination: '',
    preferences: [],
  });

  const handleChange = (e) => {
    setTripDetails({ ...tripDetails, [e.target.name]: e.target.value });
  };

  const handlePrefChange = (pref) => {
    const updatedPrefs = tripDetails.preferences.includes(pref)
      ? tripDetails.preferences.filter((p) => p !== pref)
      : [...tripDetails.preferences, pref];
    setTripDetails({ ...tripDetails, preferences: updatedPrefs });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(tripDetails);
    navigate('/customization'); // You can change to /itinerary if required
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-yellow-50 to-rose-100 p-6 flex justify-center items-center">
      <motion.div
        className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-2xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-center text-rose-600 mb-8">Plan Your Trip 🧳</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block mb-1 text-gray-700">From Date</label>
              <input
                type="date"
                name="fromDate"
                value={tripDetails.fromDate}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rose-300"
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-700">To Date</label>
              <input
                type="date"
                name="toDate"
                value={tripDetails.toDate}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rose-300"
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 text-gray-700">Budget (₹)</label>
            <input
              type="number"
              name="budget"
              value={tripDetails.budget}
              onChange={handleChange}
              placeholder="Enter your budget"
              required
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rose-300"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-700">Destination</label>
            <select
              name="destination"
              value={tripDetails.destination}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rose-300"
            >
              <option value="">-- Select a Destination --</option>
              {destinations.map((place) => (
                <option key={place} value={place}>
                  {place}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block mb-2 text-gray-700">Preferences</label>
            <div className="flex flex-wrap gap-3">
              {preferences.map((pref) => (
                <label key={pref} className="flex items-center gap-2 text-sm text-gray-600">
                  <input
                    type="checkbox"
                    checked={tripDetails.preferences.includes(pref)}
                    onChange={() => handlePrefChange(pref)}
                  />
                  {pref}
                </label>
              ))}
            </div>
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            className="w-full bg-rose-500 hover:bg-rose-600 text-white py-2 rounded-lg font-semibold transition"
          >
            Generate My Trip 🚀
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default PlanTrip;
