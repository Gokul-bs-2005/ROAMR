import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

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
import BookingPage from './pages/BookingPage';

import PrivateRoute from './components/PrivateRoute';

import './index.css'; // Tailwind + global styles

// Wrapper for conditional layout
const Layout = ({ children }) => {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem('loggedIn') === 'true');
  }, [location.pathname]);

  const showLayout = isLoggedIn && location.pathname !== '/' && location.pathname !== '/login';

  return (
    <div className="bg-gradient-to-br from-blue-100 to-purple-200 min-h-screen flex flex-col">
      {showLayout && <Navbar />}
      <main className="flex-grow pt-20 px-4 sm:px-10">{children}</main>
      {showLayout && <Footer />}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />

          {/* Protected routes */}
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            }
          />
          <Route
            path="/about"
            element={
              <PrivateRoute>
                <AboutPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/help"
            element={
              <PrivateRoute>
                <HelpPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/plan-trip"
            element={
              <PrivateRoute>
                <PlanTripPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/trip-result"
            element={
              <PrivateRoute>
                <TripResultPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/payment"
            element={
              <PrivateRoute>
                <PaymentPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/customization"
            element={
              <PrivateRoute>
                <CustomizePage />
              </PrivateRoute>
            }
          />
          <Route
            path="/feedback"
            element={
              <PrivateRoute>
                <FeedbackPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/hotels-vehicles"
            element={
              <PrivateRoute>
                <HotelsVehiclesPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/booking/:placeName"
            element={
              <PrivateRoute>
                <BookingPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/book/:placeName"
            element={
              <PrivateRoute>
                <BookingPage />
              </PrivateRoute>
            }
          />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
