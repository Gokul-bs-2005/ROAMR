import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MessageSquare, CalendarX2, CreditCard, HelpCircle } from 'lucide-react';

const issues = [
  {
    icon: <CalendarX2 className="w-8 h-8 text-red-500 mb-2" />,
    title: 'Booking Issues',
    description: 'Trouble with booking dates or confirmation? We’re here to resolve it.',
  },
  {
    icon: <CreditCard className="w-8 h-8 text-blue-500 mb-2" />,
    title: 'Payment Problems',
    description: 'Need a refund or having payment failures? Let us sort it out for you.',
  },
  {
    icon: <HelpCircle className="w-8 h-8 text-purple-500 mb-2" />,
    title: 'Other Questions',
    description: 'From trip tips to account support — we cover it all.',
  },
];

const HelpPage = () => {
  return (
    <div className="bg-gradient-to-b from-white via-blue-50 to-white">

      {/* Hero Section */}
      <section className="text-center py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-2xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Need Help?</h1>
          <p className="text-lg sm:text-xl mb-6">Facing issues with your trip or booking? You’re in the right place.</p>
        </motion.div>
      </section>

      {/* Common Issues */}
      <section className="py-16 px-6 sm:px-20 text-center bg-white">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-gray-800 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          We can help you with:
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
          {issues.map((issue, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-xl p-6 hover:scale-105 transform transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <div className="flex flex-col items-center">
                {issue.icon}
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{issue.title}</h3>
                <p className="text-gray-600 text-sm">{issue.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-12 px-6 text-center bg-blue-50">
        <motion.h3
          className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Still stuck? Reach us directly
        </motion.h3>

        <div className="flex flex-col sm:flex-row justify-center gap-8">
          <div className="bg-white shadow-lg p-6 rounded-xl">
            <Phone className="w-6 h-6 mx-auto text-blue-600 mb-2" />
            <p className="font-medium text-gray-700">Call Us</p>
            <p className="text-sm text-gray-500">+91 98765 43210</p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-xl">
            <Mail className="w-6 h-6 mx-auto text-red-500 mb-2" />
            <p className="font-medium text-gray-700">Email Us</p>
            <p className="text-sm text-gray-500">support@roamr.in</p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-xl">
            <MessageSquare className="w-6 h-6 mx-auto text-purple-600 mb-2" />
            <p className="font-medium text-gray-700">Live Chat</p>
            <p className="text-sm text-gray-500">Chat with us 24/7</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 sm:px-20 bg-white">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <details className="bg-blue-100 p-4 rounded-lg cursor-pointer shadow-sm">
            <summary className="font-semibold text-gray-800">How can I cancel or modify a booking?</summary>
            <p className="text-sm text-gray-600 mt-2">You can manage bookings from your dashboard under "My Trips". Reach out if you need manual assistance.</p>
          </details>
          <details className="bg-blue-100 p-4 rounded-lg cursor-pointer shadow-sm">
            <summary className="font-semibold text-gray-800">What if my payment fails?</summary>
            <p className="text-sm text-gray-600 mt-2">Retry using a different method or contact us directly—we’ll help resolve it quickly.</p>
          </details>
          <details className="bg-blue-100 p-4 rounded-lg cursor-pointer shadow-sm">
            <summary className="font-semibold text-gray-800">Can I request a custom trip plan?</summary>
            <p className="text-sm text-gray-600 mt-2">Absolutely! Visit the “Plan a Trip” page and tailor everything from vibe to budget.</p>
          </details>
        </div>
      </section>
    </div>
  );
};

export default HelpPage;
