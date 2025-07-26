import React from 'react';

const HomePage = () => {
  return (
    <div>

      {/* Stats Section */}
      <section className="bg-white py-12 px-6 sm:px-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8">
          Why Roam with <span className="text-blue-600">ROAMR</span>?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-gray-700">
          <div>
            <h3 className="text-2xl font-semibold">50+ Destinations</h3>
            <p>Explore scenic spots across Karnataka</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold">1000+ Trips Planned</h3>
            <p>Trusted by hundreds of happy travelers</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold">Customizable Plans</h3>
            <p>Set your budget, dates & vibe—leave the rest to us!</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to explore Karnataka?</h2>
        <p className="mb-6">Start your personalized journey today</p>
        <a
          href="/plan-trip"
          className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
        >
          Plan a Trip
        </a>
      </section>
    </div>
  );
};

export default HomePage;
