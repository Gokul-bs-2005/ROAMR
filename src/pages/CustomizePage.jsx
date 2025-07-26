import React, { useState } from 'react';
import { motion } from 'framer-motion';

const initialPlan = [
  { id: 1, title: 'Visit Coffee Plantations', day: 'Day 1', type: 'Activity' },
  { id: 2, title: 'Stay at Treehouse Resort', day: 'Day 2', type: 'Hotel' },
  { id: 3, title: 'Explore Abbey Falls', day: 'Day 2', type: 'Activity' },
];

const CustomizePage = () => {
  const [plan, setPlan] = useState(initialPlan);
  const [editingId, setEditingId] = useState(null);
  const [editedText, setEditedText] = useState('');

  const handleEdit = (id, currentText) => {
    setEditingId(id);
    setEditedText(currentText);
  };

  const handleSave = (id) => {
    setPlan(plan.map(item => item.id === id ? { ...item, title: editedText } : item));
    setEditingId(null);
  };

  const handleDelete = (id) => {
    setPlan(plan.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-cyan-100 to-blue-200 p-8">
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold text-center text-blue-700 mb-10">🛠 Customize Your Trip</h1>

        {plan.map(item => (
          <motion.div
            key={item.id}
            className="bg-white rounded-xl shadow-md p-6 mb-4 flex justify-between items-center"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
          >
            <div>
              <p className="text-sm text-gray-400">{item.day} • {item.type}</p>
              {editingId === item.id ? (
                <input
                  type="text"
                  value={editedText}
                  onChange={(e) => setEditedText(e.target.value)}
                  className="border rounded px-3 py-1 mt-1 w-full"
                />
              ) : (
                <h2 className="text-lg font-semibold text-gray-800">{item.title}</h2>
              )}
            </div>

            <div className="space-x-2">
              {editingId === item.id ? (
                <button
                  onClick={() => handleSave(item.id)}
                  className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => handleEdit(item.id, item.title)}
                  className="bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500"
                >
                  Edit
                </button>
              )}
              <button
                onClick={() => handleDelete(item.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </motion.div>
        ))}

        <motion.button
          className="mt-8 w-full bg-indigo-600 text-white py-3 rounded-xl text-lg font-medium hover:bg-indigo-700 transition"
          whileTap={{ scale: 0.95 }}
          onClick={() => alert("Proceeding to Payment...")}
        >
          Proceed to Payment
        </motion.button>
      </motion.div>
    </div>
  );
};

export default CustomizePage;
