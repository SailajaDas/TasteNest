import React from "react";

const services = [
  {
    title: "Dine-In Experience",
    description:
      "Relax and enjoy a cozy ambiance with delightful dishes freshly prepared by our chefs.",
    image: "https://cdn.pixabay.com/photo/2020/10/29/13/34/table-5696243_1280.jpg",
  },
  {
    title: "Online Ordering",
    description:
      "Order easily from home and enjoy your favorite meals delivered hot and fast.",
    image: "https://cdn.pixabay.com/photo/2021/02/08/12/40/lasagna-5994612_1280.jpg",
  },
  {
    title: "Private Dining",
    description:
      "Celebrate special moments in our exclusive private rooms with personalized service.",
    image: "https://cdn.pixabay.com/photo/2015/11/26/22/28/woman-1064664_1280.jpg",
  },
  {
    title: "Catering Services",
    description:
      "From weddings to corporate events, we deliver a delicious spread for every occasion.",
    image: "https://cdn.pixabay.com/photo/2023/04/24/03/16/camping-7947056_1280.jpg",
  },
  {
    title: "Chef’s Specials",
    description:
      "Discover weekly specials crafted with seasonal ingredients and global inspiration.",
    image: "https://cdn.pixabay.com/photo/2021/09/20/06/55/spaghetti-6639970_1280.jpg",
  },
  {
    title: "Healthy Meals",
    description:
      "We offer a variety of healthy and nutritious meals for health-conscious food lovers.",
    image: "https://cdn.pixabay.com/photo/2020/05/12/16/24/raspberries-5163812_1280.jpg",
  },
];

const Service = () => {
  return (
    <div className="min-h-screen bg-slate-200 dark:bg-gray-900 text-gray-800 dark:text-white font-sans">
      {/* Header */}
      <section className="bg-gradient-to-r from-violet-600 to-purple-500 dark:from-gray-800 dark:to-gray-900 text-white py-20 px-6 md:px-20 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Our Services</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          TasteNest brings you a range of culinary services with passion and perfection.
        </p>
      </section>

      {/* Cards */}
      <section className="py-16 px-6 md:px-20">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-purple-100 dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-20 transition duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-violet-700 dark:text-violet-400 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Service;
