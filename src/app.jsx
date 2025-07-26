import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import AboutPage from './pages/AboutPage';
import HelpPage from './pages/HelpPage';
import PlanTripPage from './pages/PlanTripPage';
import TripResultPage from './pages/TripResultPage';
import PaymentPage from './pages/PaymentPage';
import CustomizePage from './pages/CustomizePage';
import FeedbackPage from './pages/FeedbackPage';
import HotelsVehiclesPage from './pages/HotelsVehiclesPage';
import BookingPage from './pages/BookingPage'; // ✅ Make sure this file exists

import './index.css'; // Tailwind + global styles

const App = () => {
  return (
    <Router>
      <div className="bg-gradient-to-br from-blue-100 to-purple-200 min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-grow pt-20 px-4 sm:px-10">
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/help" element={<HelpPage />} />
            <Route path="/plan-trip" element={<PlanTripPage />} />
            <Route path="/trip-result" element={<TripResultPage />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/customization" element={<CustomizePage />} />
            <Route path="/feedback" element={<FeedbackPage />} />
            <Route path="/hotels-vehicles" element={<HotelsVehiclesPage />} />
            <Route path="/booking/:placeName" element={<BookingPage />} />
            <Route path="/book/:placeName" element={<BookingPage />} />

          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
