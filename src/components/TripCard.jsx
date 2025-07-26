import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, CalendarCheck, Wallet } from 'lucide-react';

const TripCard = ({ day, location, activities, image, budget }) => {
  return (
    <motion.div
      className="bg-white rounded-2xl shadow-xl overflow-hidden w-full max-w-md mx-auto mb-6 hover:shadow-2xl transition"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <img
        src={image}
        alt={location}
        className="w-full h-48 object-cover"
      />

      <div className="p-5">
        <h3 className="text-lg font-bold text-purple-700 mb-2">
          Day {day}: {location}
        </h3>

        <ul className="text-gray-700 text-sm space-y-1 mb-4">
          {activities.map((activity, index) => (
            <li key={index}>• {activity}</li>
          ))}
        </ul>

        <div className="flex items-center justify-between text-gray-500 text-sm mt-2">
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
