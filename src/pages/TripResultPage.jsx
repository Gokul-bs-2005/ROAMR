import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const sampleItinerary = {
  transport: 'Train from Bangalore to Chikmagalur',
  hotel: 'Stay at “Serai Resort”, 2 nights',
  sightseeing: [
    'Mullayanagiri Peak',
    'Coffee Museum',
    'Hirekolale Lake',
    'Baba Budangiri',
  ],
};

const TripResult = () => {
  const navigate = useNavigate();

  const handleCustomize = () => {
    navigate('/customization');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-sky-100 p-6">
      <motion.div
        className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-8"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-indigo-600 mb-4 text-center">
          🧭 Your Trip Itinerary
        </h2>

        <div className="mt-6 space-y-6">
          <motion.div
            className="bg-indigo-50 p-4 rounded-xl shadow"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-xl font-semibold text-indigo-700">🚆 Transport</h3>
            <p className="text-gray-700 mt-1">{sampleItinerary.transport}</p>
          </motion.div>

          <motion.div
            className="bg-indigo-50 p-4 rounded-xl shadow"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-xl font-semibold text-indigo-700">🏨 Hotel</h3>
            <p className="text-gray-700 mt-1">{sampleItinerary.hotel}</p>
          </motion.div>

          <motion.div
            className="bg-indigo-50 p-4 rounded-xl shadow"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-xl font-semibold text-indigo-700">📍 Sightseeing</h3>
            <ul className="list-disc ml-6 text-gray-700">
              {sampleItinerary.sightseeing.map((place, index) => (
                <li key={index}>{place}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="mt-8 text-center"
            whileHover={{ scale: 1.05 }}
          >
            <button
              onClick={handleCustomize}
              className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded-xl shadow-md font-semibold"
            >
              ✏️ Customize Plan
            </button>
          </motion.div>
        </div>

        {/* Optional: Images Carousel */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4">
          <img src="https://source.unsplash.com/featured/?chikmagalur" alt="Destination" className="rounded-xl shadow-md" />
          <img src="https://source.unsplash.com/featured/?mountain" alt="Scenery" className="rounded-xl shadow-md" />
          <img src="https://source.unsplash.com/featured/?coffee" alt="Coffee" className="rounded-xl shadow-md" />
        </div>
      </motion.div>
    </div>
  );
};

export default TripResult;
