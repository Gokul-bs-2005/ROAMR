import React from 'react';
import { motion } from 'framer-motion';

const hotels = [
  { name: "The Royal Orchid", location: "Mysuru", price: "₹2999/night", img: "https://source.unsplash.com/400x300/?hotel,room" },
  { name: "Coorg Jungle Stay", location: "Coorg", price: "₹2499/night", img: "https://source.unsplash.com/400x300/?resort" },
];

const vehicles = [
  { type: "Sedan", company: "ZoomCar", price: "₹2000/day", img: "https://source.unsplash.com/400x300/?car,sedan" },
  { type: "Bike", company: "Royal Brothers", price: "₹800/day", img: "https://source.unsplash.com/400x300/?bike,motorcycle" },
];

const HotelVehicle = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-yellow-50 via-pink-50 to-purple-50 px-6 py-10">
      <h1 className="text-4xl font-bold text-center text-purple-700 mb-12">🏨 Hotels & 🚗 Vehicles</h1>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-purple-600 mb-6">🏕️ Recommended Hotels</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {hotels.map((hotel, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img src={hotel.img} alt={hotel.name} className="w-full h-52 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">{hotel.name}</h3>
                <p className="text-gray-600">{hotel.location}</p>
                <p className="text-purple-700 font-bold mt-2">{hotel.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-purple-600 mb-6">🚘 Available Vehicles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {vehicles.map((vehicle, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img src={vehicle.img} alt={vehicle.type} className="w-full h-52 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">{vehicle.type}</h3>
                <p className="text-gray-600">Company: {vehicle.company}</p>
                <p className="text-purple-700 font-bold mt-2">{vehicle.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HotelVehicle;
