import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

// (Your places array remains the same...)

const BookingPage = () => {
  const { placeName } = useParams();
  const [showForm, setShowForm] = useState(false);

  const selectedPlace = places.find(
    (p) => p.slug === placeName.toLowerCase()
  );

  if (!selectedPlace) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-red-50">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Place not found.</h2>
        <p className="text-gray-700 mb-4">Please return to the Plan Trip page.</p>
        <Link
          to="/plan-trip"
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
        >
          Back to Plan
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-xl text-center">
        <h1 className="text-3xl font-bold text-indigo-600 mb-4">
          Book Your Trip to {selectedPlace.name}
        </h1>
        <p className="text-gray-700 mb-6">{selectedPlace.description}</p>

        <button
          onClick={() => setShowForm(true)}
          className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded-full text-lg"
        >
          Proceed to Booking
        </button>

        {showForm && (
          <div className="mt-6 text-left">
            <h2 className="text-xl font-semibold mb-2">Booking Form</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-2 border rounded"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border rounded"
              />
              <input
                type="date"
                className="w-full px-4 py-2 border rounded"
              />
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
              >
                Confirm Booking
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingPage;
