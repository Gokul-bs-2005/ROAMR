const popularPlaces = [
  {
    name: "Gokarna",
    days: "2 Days",
    budget: "₹2500–4000",
    rating: 4.6,
    image: "/assets/images/gokarna.jpg",
  },
  {
    name: "Jog Falls",
    days: "1 Day",
    budget: "₹1500–2500",
    rating: 4.8,
    image: "/assets/images/jogfalls.jpg",
  },
  {
    name: "Nandi Hills",
    days: "1 Day",
    budget: "₹1000–1800",
    rating: 4.7,
    image: "/assets/images/nandhihills.avif",
  },
  {
    name: "Agumbe",
    days: "2 Days",
    budget: "₹2800–4000",
    rating: 4.6,
    image: "/assets/images/agumbe.webp",
  },
  {
    name: "Mysore",
    days: "2 Days",
    budget: "₹2500–4000",
    rating: 4.9,
    image: "/assets/images/mysuru.webp",
  },
];

export default function PopularPlaces() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {popularPlaces.map((place, index) => (
        <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
          <img src={place.image} alt={place.name} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-bold">{place.name}</h2>
            <p className="text-sm text-gray-600">{place.days} • {place.budget}</p>
            <p className="text-yellow-500 font-semibold">⭐ {place.rating}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
