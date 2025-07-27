import React from 'react';
import { motion } from 'framer-motion';
import Carousel from '../components/Carousel';
import { FaMapMarkerAlt, FaHotel, FaSuitcaseRolling } from 'react-icons/fa';

const imageFiles = ['1.jpeg','2.webp','3.avif','4.jpg','5.jpg'];
const imagePaths = imageFiles.map((name) => `/assets/images/aboutImg/${name}`);

const AboutPage = () => (
  <div className="min-h-screen bg-gradient-to-br from-teal-100 to-purple-200 text-gray-800 px-6 py-12">
    <motion.section
      className="max-w-4xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      {/* Carousel + Title */}
      <div className="p-4">
        <Carousel images={imagePaths} />
        <motion.h1
          className="mt-4 text-5xl md:text-6xl font-extrabold text-center text-purple-700"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          About ROAMR 🌍
        </motion.h1>

        {/* Description Below Carousel */}
        <motion.p
          className="mt-4 text-center text-lg text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Explore the vibrant scenes of Karnataka—from misty hills and waterfalls to coastal views and architectural wonders—captured in these rotating images.
        </motion.p>
      </div>

      <div className="p-10 space-y-8">
        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {[{
              icon: <FaMapMarkerAlt className="text-4xl text-indigo-600" />,
              title: 'Custom Itineraries',
              desc: 'Personalized recommendations for places to visit.',
            },
            {
              icon: <FaHotel className="text-4xl text-indigo-600" />,
              title: 'Hotel & Stay',
              desc: 'Handpicked lodging choices suiting your style.',
            },
            {
              icon: <FaSuitcaseRolling className="text-4xl text-indigo-600" />,
              title: 'Hassle‑free Planning',
              desc: 'Smooth suggestions for transport, food & experiences.',
            }
          ].map((f, i) => (
            <motion.div
              key={i}
              className="bg-purple-50 rounded-2xl p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.2 }}
            >
              {f.icon}
              <h3 className="mt-4 text-xl font-semibold text-indigo-700">{f.title}</h3>
              <p className="mt-2 text-gray-600">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Narrative */}
        <div className="space-y-6 text-center">
          <p className="text-lg leading-relaxed text-gray-800">
            ROAMR is your intelligent and fun travel companion built to help you plan memorable trips across Karnataka.
          </p>
          <p className="text-lg leading-relaxed text-gray-800">
            Whether you're an adventure lover, a cultural explorer, or just need a break — ROAMR crafts tailored itineraries just for you.
          </p>
        </div>

        {/* Mission */}
        <motion.div
          className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <h2 className="text-2xl font-semibold text-indigo-600 text-center">Our Mission</h2>
          <p className="mt-4 text-gray-700 max-w-md mx-auto text-center">
            To make travel planning stress‑free, smart, and exciting — one destination at a time.
          </p>
        </motion.div>
      </div>
    </motion.section>
  </div>
);

export default AboutPage;
