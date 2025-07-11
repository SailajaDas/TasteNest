import React from "react";

const teamMembers = [
  {
    name: "Chef Aryan Kapoor",
    role: "Head Chef",
    image: "https://cdn.pixabay.com/photo/2024/03/05/14/11/chef-8614629_1280.jpg",
    bio: "Master of fusion cuisine with over 15 years of global experience.",
  },
  {
    name: "Meera Desai",
    role: "Restaurant Manager",
    image: "https://cdn.pixabay.com/photo/2023/07/15/07/34/man-8128287_1280.jpg",
    bio: "Passionate about service and creating memorable guest experiences.",
  },
  {
    name: "Rahul Verma",
    role: "Pastry Chef",
    image: "https://cdn.pixabay.com/photo/2018/09/25/08/40/chefs-3701719_1280.jpg",
    bio: "Loves crafting desserts that blend tradition with surprise.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-slate-200 dark:bg-gray-900 text-gray-800 dark:text-gray-100 font-sans">
      {/* Header */}
      <section className="bg-gradient-to-r from-violet-500 to-purple-600 dark:from-gray-800 dark:to-gray-900 text-gray-100 dark:text-white py-24 px-6 md:px-20 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Our Story</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Where Passion Meets the Plate — Experience the soul of TasteNest.
        </p>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6 md:px-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Crafting Culinary Memories</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            TasteNest was born from a love of food and community. Our founders envisioned a place where everyone — from foodies to families — could gather around a table and enjoy the magic of a shared meal.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Every dish we serve is handcrafted with fresh ingredients, vibrant flavors, and a dash of creativity. From comforting classics to bold innovations, our menu celebrates the rich diversity of global cuisine.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            More than just a restaurant, TasteNest is a celebration of connection — between people, cultures, and their cravings.
          </p>
        </div>
        <div>
          <img
            src="https://cdn.pixabay.com/photo/2020/06/10/13/30/food-5282718_1280.jpg"
            alt="Chef at work"
            className="rounded-xl shadow-lg hover:scale-105 transition duration-500"
          />
        </div>
      </section>

      {/* Vision */}
      <section className="bg-slate-200 dark:bg-gray-800 py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          To create an unforgettable dining experience where every visit feels like a warm welcome home — with extraordinary food, heartfelt service, and an ambiance that feeds your soul.
        </p>
      </section>

      {/* Team Highlight */}
      <section className="py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-10">Meet Our Team</h2>
        <div className="grid gap-10 md:grid-cols-3">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-violet-600 font-medium">{member.role}</p>
              <p className="text-gray-900 dark:text-gray-300 text-sm mt-2">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
