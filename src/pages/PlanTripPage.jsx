import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const destinations = [
  'Bengaluru',
  'Coorg',
  'Chikmagalur',
  'Hampi',
  'Mysuru',
  'Nandi Hills',
  'Jog Falls',
  'Gokarna',
  'Udupi / St Mary’s Island',
  'Badami & Pattadakal',
  'Bandipur NP',
  'Agumbe',
  'Kudremukh',
  'Shravanabelagola',
  'Murudeshwar',
  'Brindavan Gardens',
  'Sigandur',
  'Belur & Halebidu',
  'Somanathapura',
  'North Karnataka – Bijapur Gol Gumbaz'
];

const preferences = ['Adventure', 'Relaxation', 'Heritage', 'Nature', 'Beach', 'Food'];

const popularPlaces = [
  {
    name: 'Gokarna',
    days: '2 Days',
    budget: '₹2500–4000',
    rating: 4.6,
    image: '/assets/images/Places/gokarna.jpg',
  },
  {
    name: 'Jog Falls',
    days: '1 Day',
    budget: '₹1500–2500',
    rating: 4.8,
    image: '/assets/images/Places/jogfalls.jpg',
  },
  {
    name: 'Coorg',
    days: '3 Days',
    budget: '₹3000–5000',
    rating: 4.7,
    image: '/assets/images/Places/coorgImg.jpg',
  },
  {
    name: 'Hampi',
    days: '2 Days',
    budget: '₹2000–3500',
    rating: 4.5,
    image: '/assets/images/Places/hampiImg.webp',
  },
  {
    name: 'Nandi Hills',
    days: '1 Day',
    budget: '₹1000–1500',
    rating: 4.3,
    image: '/assets/images/Places/nandihills.avif',
  },
  {
    name: 'Udupi / St Mary’s Island',
    days: '2 Days',
    budget: '₹2000–3000',
    rating: 4.4,
    image: '/assets/images/Places/stmarys.jpg',
  },
];

const PlanTrip = () => {
  const navigate = useNavigate();
  const [tripDetails, setTripDetails] = useState({
    fromDate: '',
    toDate: '',
    budget: '',
    destination: '',
    preferences: [],
    peopleCount: '',
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
    navigate('/customization');
  };

  const handleCardClick = (placeName) => {
    const urlSafeName = placeName.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    navigate(`/booking/${urlSafeName}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-yellow-50 to-rose-100 p-6 flex flex-col items-center">
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
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-rose-300"
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
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-rose-300"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block mb-1 text-gray-700">Budget (₹)</label>
              <input
                type="number"
                name="budget"
                value={tripDetails.budget}
                onChange={handleChange}
                placeholder="Enter your budget"
                required
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-rose-300"
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-700">No. of People</label>
              <input
                type="number"
                name="peopleCount"
                value={tripDetails.peopleCount}
                onChange={handleChange}
                placeholder="e.g., 3"
                required
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-rose-300"
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 text-gray-700">Destination</label>
            <select
              name="destination"
              value={tripDetails.destination}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-rose-300"
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

      {/* 📊 Popular Dashboard */}
      <motion.div
        className="mt-16 w-full max-w-5xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold text-center text-purple-700 mb-6">📊 Popular Destinations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularPlaces.map((place, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => handleCardClick(place.name)}
            >
              <img
                src={place.image}
                alt={place.name}
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{place.name}</h3>
                <p className="text-sm text-gray-600">🗓 {place.days}</p>
                <p className="text-sm text-gray-600">💰 {place.budget}</p>
                <p className="text-sm text-yellow-500">⭐ {place.rating}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default PlanTrip;
