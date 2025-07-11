import React, { useState } from "react";
import { motion } from "framer-motion";

const foodItems = [
  {
    id: 1,
    name: "Margherita Pizza",
    description: "Classic cheese and tomato pizza with fresh basil.",
    price: "₹249",
    image: "https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062_1280.jpg",
  },
  {
    id: 2,
    name: "Paneer Tikka",
    description: "Grilled paneer cubes marinated in Indian spices.",
    price: "₹199",
    image: "https://cdn.pixabay.com/photo/2020/03/18/07/19/dish-4943028_1280.jpg",
  },
  {
    id: 3,
    name: "Masala Dosa",
    description: "Crispy South Indian dosa stuffed with spicy potato filling.",
    price: "₹159",
    image: "https://cdn.pixabay.com/photo/2016/10/25/13/42/indian-1768906_1280.jpg",
  },
  {
    id: 4,
    name: "Butter Chicken",
    description: "Creamy, rich North Indian chicken curry.",
    price: "₹299",
    image: "https://cdn.pixabay.com/photo/2017/06/26/13/58/chicken-2443901_1280.jpg",
  },
  {
    id: 5,
    name: "Chole Bhature",
    description: "Spiced chickpeas served with deep-fried bread.",
    price: "₹179",
    image: "https://cdn.pixabay.com/photo/2022/12/28/17/44/bowl-7683485_1280.jpg",
  },
  {
    id: 6,
    name: "Tandoori Chicken",
    description: "Roasted chicken marinated in yogurt and spices.",
    price: "₹299",
    image: "https://cdn.pixabay.com/photo/2016/06/26/22/45/india-1481494_1280.jpg",
  },
  {
    id: 7,
    name: "Gulab Jamun",
    description: "Soft milk-solid balls soaked in rose-flavored syrup.",
    price: "₹99",
    image: "https://cdn.pixabay.com/photo/2025/04/17/06/00/how-to-create-new-colour-9539269_1280.jpg",
  },
  {
    id: 8,
    name: "Veg Biryani",
    description: "Aromatic basmati rice cooked with spices and veggies.",
    price: "₹229",
    image: "https://cdn.pixabay.com/photo/2024/02/10/00/53/biryani-8563961_1280.jpg",
  },
  {
    id: 9,
    name: "Chocolate Mousse",
    description: "Smooth, airy chocolate dessert with whipped cream.",
    price: "₹149",
    image: "https://cdn.pixabay.com/photo/2018/01/12/16/31/nougat-3078581_1280.jpg",
  },
];

const MenuPreview = () => {
  const [search, setSearch] = useState("");

  const filteredItems = foodItems.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <h1 className="text-4xl font-bold text-center text-purple-800 mt-6 mb-4">
        TasteNest Menu Preview
      </h1>

      <input
        type="text"
        placeholder="Search dishes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full max-w-md mx-auto block px-4 py-2 border border-purple-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 mb-6"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 pb-10">
        {filteredItems.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
              <p className="text-gray-600 text-sm my-2">{item.description}</p>
              <div className="text-purple-600 font-bold text-lg">{item.price}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default MenuPreview;
