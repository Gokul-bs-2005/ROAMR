import React, { useState } from 'react';
import { motion } from 'framer-motion';

const emojis = [
  { label: '😡', value: 1 },
  { label: '😕', value: 2 },
  { label: '😐', value: 3 },
  { label: '😊', value: 4 },
  { label: '😍', value: 5 },
];

const FeedbackPage = () => {
  const [rating, setRating] = useState(null);
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (rating && message) {
      // 🔗 You can send this data to Firebase or a backend
      console.log('Feedback Submitted:', { rating, message });
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100 p-8 flex items-center justify-center">
      <motion.div
        className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-2xl text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {!submitted ? (
          <>
            <h1 className="text-3xl font-bold text-purple-700 mb-4">💬 We’d love your feedback!</h1>
            <p className="text-gray-600 mb-6">How was your experience with ROAMR?</p>

            <div className="flex justify-center space-x-4 mb-6">
              {emojis.map((emoji) => (
                <motion.button
                  key={emoji.value}
                  whileTap={{ scale: 0.85 }}
                  onClick={() => setRating(emoji.value)}
                  className={`text-3xl transition-all duration-200 ${
                    rating === emoji.value ? 'scale-125' : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  {emoji.label}
                </motion.button>
              ))}
            </div>

            <textarea
              rows="4"
              placeholder="Any suggestions or comments..."
              className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 mb-6"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <motion.button
              onClick={handleSubmit}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-600 text-white px-6 py-3 rounded-xl hover:bg-purple-700 transition"
            >
              Submit Feedback
            </motion.button>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-green-600 mb-4">🎉 Thank you!</h2>
            <p className="text-gray-700">We appreciate your feedback and will use it to improve ROAMR.</p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default FeedbackPage;
