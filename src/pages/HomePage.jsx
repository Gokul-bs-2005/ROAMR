// src/pages/Home.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const places = [
    { title: 'Bengaluru', emoji: '🌆', img: '/assets/images/BLR.webp' },
    { title: 'Coorg', emoji: '🌲', img: '/assets/images/coorgImg.jpg' },
    { title: 'Chikmagalur', emoji: '⛰️', img: '/assets/images/chikmagalurImg.jpg' },
    { title: 'Hampi', emoji: '🏛️', img: '/assets/images/hampiImg.webp' },
    { title: 'Mysuru', emoji: '🌟', img: '/assets/images/mysuru.webp' },
    { title: 'Nandi Hills', emoji: '🌄', img: '/assets/images/nandihills.avif' },
    { title: 'Jog Falls', emoji: '💧', img: '/assets/images/jogfalls.jpg' },
    { title: 'Gokarna', emoji: '🏖️', img: '/assets/images/gokarna.jpg' },
    { title: 'Udupi / St Mary’s Island', emoji: '🏝️', img: '/assets/images/stmarys.jpg' },
    { title: 'Badami & Pattadakal', emoji: '🛕', img: '/assets/images/badami.jpg' },
    { title: 'Bandipur NP', emoji: '🐯', img: '/assets/images/bandipur.jpg' },
    { title: 'Agumbe', emoji: '🌧️', img: '/assets/images/agumbe.webp' },
    { title: 'Kudremukh', emoji: '🌳', img: '/assets/images/kudremukh.jpg' },
    { title: 'Shravanabelagola', emoji: '🧘', img: '/assets/images/shravanabelagola.jpg' },
    { title: 'Murudeshwar', emoji: '🕉️', img: '/assets/images/murudeshwar.webp' },
    { title: 'Brindavan Gardens', emoji: '🌸', img: '/assets/images/brindavangardens.jpg' },
    { title: 'Sigandur', emoji: '⛩️', img: '/assets/images/sigandur.jpg' },
    { title: 'Belur & Halebidu', emoji: '🏛️', img: '/assets/images/belur_halebidu.jpg' },
    { title: 'Somanathapura', emoji: '🏯', img: '/assets/images/somanathapura.jpg' },
    { title: 'North Karnataka – Bijapur Gol Gumbaz', emoji: '🕌', img: '/assets/images/bijapur.jpg' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 px-6 py-16">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-extrabold text-purple-700 mb-4 drop-shadow">
          🌍 Hey, where are we roaming today?
        </h1>
        <p className="text-xl text-gray-700 mb-10">
          Explore Karnataka like never before – plan your trip in seconds!
        </p>
        <motion.button
          onClick={() => navigate('/plan-trip')}
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-lg px-8 py-4 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition duration-300"
          whileHover={{ scale: 1.1 }}
        >
          🚀 Plan a Trip
        </motion.button>
      </motion.div>

      {/* Popular Places Grid */}
      <motion.div
        className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        {places.map((place) => (
          <motion.div
            key={place.title}
            className="bg-white rounded-xl p-4 shadow-lg text-center hover:bg-purple-100 transition cursor-pointer"
            whileHover={{ y: -5 }}
            onClick={() =>
              navigate(
                `/place/${place.title
                  .toLowerCase()
                  .replace(/ & | \/ | /g, '-')
                  .replace(/\s+/g, '-')}`
              )
            }
          >
            <img
              src={place.img}
              alt={place.title}
              className="w-full h-40 object-cover rounded-md mb-3"
            />
            <div className="text-3xl mb-2">{place.emoji}</div>
            <h3 className="text-lg font-semibold text-purple-700">
              {place.title}
            </h3>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Home;
