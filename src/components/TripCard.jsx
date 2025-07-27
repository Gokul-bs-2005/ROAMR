import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, CalendarCheck, Wallet } from 'lucide-react';

const TripCard = ({ day, location, activities, image, budget }) => {
  return (
    <motion.div
      className="relative group bg-white rounded-3xl shadow-xl overflow-hidden w-full max-w-md mx-auto mb-8 hover:shadow-2xl hover:ring-4 hover:ring-purple-300 transition-all duration-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      whileHover={{ scale: 1.03 }}
    >
      {/* Image Section */}
      <div className="relative">
        <img
          src={image}
          alt={location}
          className="w-full h-52 object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 text-xs font-semibold rounded-full shadow-md">
          Day {day}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 bg-white">
        <h3 className="text-xl font-bold text-purple-700 mb-3 tracking-tight">
          {location}
        </h3>

        <ul className="text-gray-700 text-sm space-y-1 mb-4">
          {activities.map((activity, index) => (
            <li key={index}>• {activity}</li>
          ))}
        </ul>

        <div className="flex items-center justify-between text-gray-600 text-sm mt-4">
          <span className="flex items-center gap-1">
            <CalendarCheck size={16} /> Day {day}
          </span>
          <span className="flex items-center gap-1">
            <Wallet size={16} /> ₹{budget}
          </span>
          <span className="flex items-center gap-1">
            <MapPin size={16} /> {location}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default TripCard;
