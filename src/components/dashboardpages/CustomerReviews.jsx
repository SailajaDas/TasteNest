import React from "react";

const reviews = [
  {
    name: "Aarav Mehta",
    review: "Absolutely loved the ambiance and the food! The staff was friendly and quick. Highly recommended!",
    rating: 5,
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sneha Reddy",
    review: "Delicious menu, clean interiors, and great portion sizes. Summer specials were amazing!",
    rating: 4,
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Rahul Sharma",
    review: "Loved the loyalty offers! I come here every weekend. My kids enjoy the pizzas and desserts.",
    rating: 5,
    img: "https://randomuser.me/api/portraits/men/85.jpg",
  },
  {
    name: "Pooja Iyer",
    review: "The place is well maintained and has quick service. Perfect for family dinners.",
    rating: 4,
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Vikram Patel",
    review: "Great service and ambiance. The Butter Chicken was absolutely delicious!",
    rating: 5,
    img: "https://randomuser.me/api/portraits/men/76.jpg",
  },
  {
    name: "Meera Singh",
    review: "Affordable and flavorful. The summer drinks were super refreshing!",
    rating: 5,
    img: "https://randomuser.me/api/portraits/women/12.jpg",
  },
];

const CustomerReviews = () => {
  return (
    <div className="px-6 py-10">
      <h1 className="text-4xl font-bold text-center text-purple-700 mb-10">
        What Our Customers Say
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((cust, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300"
          >
            <div className="flex items-center mb-4">
              <img
                src={cust.img}
                alt={cust.name}
                className="w-14 h-14 rounded-full object-cover mr-4"
              />
              <div>
                <h3 className="text-lg font-semibold">{cust.name}</h3>
                <p className="text-yellow-500">
                  {"⭐".repeat(cust.rating)}
                  <span className="text-gray-500 text-sm ml-1">
                    ({cust.rating}/5)
                  </span>
                </p>
              </div>
            </div>
            <p className="text-gray-700">{cust.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerReviews;
