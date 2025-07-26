import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// Import images from src/assets/images
import bengaluruImg from '../assets/images/BLR.webp';
import coorgImg from '../assets/images/coorgImg.jpg';
import chikmagalurImg from '../assets/images/chikmagalurImg.jpg';
import hampiImg from '../assets/images/hampiImg.webp';
import mysuruImg from '../assets/images/mysuru.webp';
import nandiHillsImg from '../assets/images/nandihills.avif';
import jogfallsImg from '../assets/images/jogfalls.jpg';
import gokarnaImg from '../assets/images/gokarna.jpg';
import stmarysImg from '../assets/images/stmarys.jpg';
import badamiImg from '../assets/images/badami.jpg';
import bandipurImg from '../assets/images/bandipur.jpg';
import agumbeImg from '../assets/images/agumbe.webp';
import kudremukhImg from '../assets/images/kudremukh.jpg';
import shravanabelagolaImg from '../assets/images/shravanabelagola.jpg';
import murudeshwarImg from '../assets/images/murudeshwar.webp';
import brindavanImg from '../assets/images/brindavangardens.jpg';
import sigandurImg from '../assets/images/sigandur.jpg';
import belurHalebiduImg from '../assets/images/belur_halebidu.jpg';
import somanathapuraImg from '../assets/images/somanathapura.jpg';
import bijapurImg from '../assets/images/bijapur.jpg';

const HomePage = () => {
  const navigate = useNavigate();

  const places = [
    { title: 'Bengaluru', emoji: '🌆', img: bengaluruImg },
    { title: 'Coorg', emoji: '🌲', img: coorgImg },
    { title: 'Chikmagalur', emoji: '⛰️', img: chikmagalurImg },
    { title: 'Hampi', emoji: '🏛️', img: hampiImg },
    { title: 'Mysuru', emoji: '🌟', img: mysuruImg },
    { title: 'Nandi Hills', emoji: '🌄', img: nandiHillsImg },
    { title: 'Jog Falls', emoji: '💧', img: jogfallsImg },
    { title: 'Gokarna', emoji: '🏖️', img: gokarnaImg },
    { title: 'Udupi / St Mary’s Island', emoji: '🏝️', img: stmarysImg },
    { title: 'Badami & Pattadakal', emoji: '🛕', img: badamiImg },
    { title: 'Bandipur NP', emoji: '🐯', img: bandipurImg },
    { title: 'Agumbe', emoji: '🌧️', img: agumbeImg },
    { title: 'Kudremukh', emoji: '🌳', img: kudremukhImg },
    { title: 'Shravanabelagola', emoji: '🧘', img: shravanabelagolaImg },
    { title: 'Murudeshwar', emoji: '🕉️', img: murudeshwarImg },
    { title: 'Brindavan Gardens', emoji: '🌸', img: brindavanImg },
    { title: 'Sigandur', emoji: '⛩️', img: sigandurImg },
    { title: 'Belur & Halebidu', emoji: '🏛️', img: belurHalebiduImg },
    { title: 'Somanathapura', emoji: '🏯', img: somanathapuraImg },
    { title: 'North Karnataka – Bijapur Gol Gumbaz', emoji: '🕌', img: bijapurImg },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 
                    flex flex-col items-center justify-center px-6 py-16">
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
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-lg px-8 py-4 
                     rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition duration-300"
          whileHover={{ scale: 1.1 }}
        >
          🚀 Plan a Trip
        </motion.button>
      </motion.div>

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

export default HomePage;
