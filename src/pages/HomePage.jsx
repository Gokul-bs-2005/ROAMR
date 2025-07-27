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
    <div className="min-h-screen bg-gradient-to-b from-[#c3e0ff] to-[#f8f4ff] relative overflow-hidden">
      {/* Parallax Mountain Background */}
      <img
        src="/assets/images/bg-mountains-parallax.png"
        className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none"
        alt="Background Mountains"
      />

      {/* Floating Clouds */}
      <div className="absolute -top-20 left-10 animate-cloud float z-0">
        <img src="/assets/images/cloud1.png" className="w-40 opacity-70" alt="Cloud 1" />
      </div>
      <div className="absolute top-32 right-10 animate-cloud float delay-500 z-0">
        <img src="/assets/images/cloud2.png" className="w-32 opacity-70" alt="Cloud 2" />
      </div>

      <motion.div
        className="text-center relative z-10 pt-20 px-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-pink-500 to-red-500 animate-text mb-4 drop-shadow-xl">
          🌍 Where are we RoamR‑ing today?
        </h1>
        <p className="text-xl text-gray-800 mb-10 max-w-2xl mx-auto">
          Discover Karnataka's hidden gems — quick, easy & exciting!
        </p>
        <motion.button
          onClick={() => navigate('/plan-trip')}
          className="bg-gradient-to-r from-pink-600 to-purple-700 hover:from-purple-800 hover:to-pink-700 text-white text-lg px-10 py-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300"
          whileHover={{ scale: 1.1 }}
        >
          🚀 Plan a Trip
        </motion.button>
      </motion.div>

      {/* Cards Grid */}
      <motion.div
        className="relative z-10 mt-16 px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 pb-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        {places.map((place, idx) => {
          const slug = place.title.toLowerCase().replace(/ & | \/ | /g, '-').replace(/\s+/g, '-');
          return (
            <motion.div
              key={place.title}
              className="bg-white/50 backdrop-blur-lg rounded-2xl p-4 shadow-xl text-center hover:bg-white/70 transition cursor-pointer hover:scale-105 hover:shadow-2xl"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.03 }}
              onClick={() => navigate(`/place/${slug}`)}
            >
              <img
                src={place.img}
                alt={place.title}
                className="w-full h-44 object-cover rounded-xl mb-3 transition-transform duration-300 hover:scale-105"
              />
              <div className="text-3xl mb-1">{place.emoji}</div>
              <h3 className="text-lg font-semibold text-purple-900 tracking-wide">
                {place.title}
              </h3>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Home;
