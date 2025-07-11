import React from "react";

const cards = [
  {
    title: "Manage Customers",
    description: "Add, view, and edit customer information easily.",
    image:
      "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.jpg?s=612x612&w=0&k=20&c=EDqQ0oBcpFGV25p61vWUF5N-6lRJdbmZmQMe5kyuxyA=",
  },
  {
    title: "Menu Preview",
    description: "Check out the latest menu items and specials.",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Table Reservations",
    description: "Manage table bookings and customer visits smoothly.",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80",
  },
];

const DashboardHome = () => {
  return (
    <div className="text-gray-800 text-center">
      <h1 className="text-4xl font-bold mb-8">Welcome to TasteNest Dashboard!</h1>
      <p className="text-lg mb-10 max-w-xl mx-auto">
        Manage your restaurant smoothly by using the menu on the left to navigate
        between profiles, customers, menu previews, reservations, and more.
      </p>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {cards.map(({ title, description, image }, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:rotate-[0.5deg]"

          >
            <img
              src={image}
              alt={title}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardHome;
