// src/pages/Home.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const places = [
    { title: 'Bengaluru', emoji: '🌆', img: '/assets/images/Places/BLR.webp' },
    { title: 'Coorg', emoji: '🌲', img: '/assets/images/Places/coorgImg.jpg' },
    { title: 'Chikmagalur', emoji: '⛰️', img: '/assets/images/Places/chikmagalurImg.jpg' },
    { title: 'Hampi', emoji: '🏛️', img: '/assets/images/Places/hampiImg.webp' },
    { title: 'Mysuru', emoji: '🌟', img: '/assets/images/Places/mysuru.webp' },
    { title: 'Nandi Hills', emoji: '🌄', img: '/assets/images/Places/nandihills.avif' },
    { title: 'Jog Falls', emoji: '💧', img: '/assets/images/Places/jogfalls.jpg' },
    { title: 'Gokarna', emoji: '🏖️', img: '/assets/images/Places/gokarna.jpg' },
    { title: 'Udupi / St Mary’s Island', emoji: '🏝️', img: '/assets/images/Places/stmarys.jpg' },
    { title: 'Badami & Pattadakal', emoji: '🛕', img: '/assets/images/Places/badami.jpg' },
    { title: 'Bandipur NP', emoji: '🐯', img: '/assets/images/Places/bandipur.jpg' },
    { title: 'Agumbe', emoji: '🌧️', img: '/assets/images/Places/agumbe.webp' },
    { title: 'Kudremukh', emoji: '🌳', img: '/assets/images/Places/kudremukh.jpg' },
    { title: 'Shravanabelagola', emoji: '🧘', img: '/assets/images/Places/shravanabelagola.jpg' },
    { title: 'Murudeshwar', emoji: '🕉️', img: '/assets/images/Places/murudeshwar.webp' },
    { title: 'Brindavan Gardens', emoji: '🌸', img: '/assets/images/Places/brindavangardens.jpg' },
    { title: 'Sigandur', emoji: '⛩️', img: '/assets/images/Places/sigandur.jpg' },
    { title: 'Belur & Halebidu', emoji: '🏛️', img: '/assets/images/Places/belur_halebidu.jpg' },
    { title: 'Somanathapura', emoji: '🏯', img: '/assets/images/Places/somanathapura.jpg' },
    { title: 'North Karnataka – Bijapur Gol Gumbaz', emoji: '🕌', img: '/assets/images/Places/bijapur.jpg' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-200 via-indigo-300 to-purple-200 relative overflow-hidden">
      {/* Animated Background Circles */}
      <div className="absolute w-[800px] h-[800px] bg-purple-400/20 rounded-full -top-96 -left-96 blur-3xl z-0 animate-pulse"></div>
      <div className="absolute w-[600px] h-[600px] bg-pink-300/20 rounded-full top-20 -right-60 blur-2xl z-0 animate-ping"></div>

      <motion.div
        className="text-center relative z-10 pt-20 px-6"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-extrabold text-purple-800 mb-4 drop-shadow-md">
          🌍 Where are we RoamR-ing today?
        </h1>
        <p className="text-xl text-gray-700 mb-10">
          Discover Karnataka's hidden gems — quick, easy & exciting!
        </p>
        <motion.button
          onClick={() => navigate('/plan-trip')}
          className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white text-lg px-10 py-4 rounded-full shadow-xl transition-all duration-300"
          whileHover={{ scale: 1.1 }}
        >
          🚀 Plan a Trip
        </motion.button>
      </motion.div>

      {/* Grid of Popular Places */}
      <motion.div
        className="relative z-10 mt-20 px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        {places.map((place) => (
          <motion.div
            key={place.title}
            className="bg-white/70 backdrop-blur-md rounded-2xl p-4 shadow-xl text-center hover:bg-white transition cursor-pointer"
            whileHover={{ y: -6 }}
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
              className="w-full h-44 object-cover rounded-xl mb-3"
            />
            <div className="text-3xl mb-1">{place.emoji}</div>
            <h3 className="text-lg font-semibold text-purple-800">
              {place.title}
            </h3>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Home;
