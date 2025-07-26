import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const PaymentPage = () => {
  const navigate = useNavigate();
  const [processing, setProcessing] = useState(false);

  const handlePayment = (e) => {
    e.preventDefault();
    setProcessing(true);
    setTimeout(() => {
      alert('Payment Successful!');
      navigate('/home');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-200 flex items-center justify-center px-4 py-12">
      <motion.div
        className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-lg"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-center text-purple-700 mb-6">
          Payment Details 💳
        </h2>

        <form onSubmit={handlePayment} className="space-y-4">
          <div>
            <label className="block text-gray-700">Card Holder Name</label>
            <input
              type="text"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label className="block text-gray-700">Card Number</label>
            <input
              type="text"
              required
              maxLength="16"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="1234 5678 9012 3456"
            />
          </div>

          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block text-gray-700">Expiry</label>
              <input
                type="text"
                required
                placeholder="MM/YY"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-gray-700">CVV</label>
              <input
                type="password"
                required
                maxLength="4"
                placeholder="123"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
          </div>

          <motion.button
            type="submit"
            disabled={processing}
            whileHover={{ scale: 1.05 }}
            className={`w-full text-white font-semibold py-2 rounded-lg transition duration-300 ${
              processing
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-purple-600 hover:bg-purple-700'
            }`}
          >
            {processing ? 'Processing...' : 'Confirm Payment'}
          </motion.button>
        </form>

        {processing && (
          <motion.div
            className="mt-6 text-center text-purple-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            ⏳ Please wait while we confirm your payment...
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default PaymentPage;
