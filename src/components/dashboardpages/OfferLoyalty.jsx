import React, { useState } from "react";
import { motion } from "framer-motion";

const offers = [
  {
    title: "Flat 20% Off on Orders Above ₹599",
    cards: [
      {
        label: "🔥 Dine-In Deal",
        desc: "Valid for dine-in orders above ₹599.",
        img: "https://cdn.pixabay.com/photo/2013/06/09/06/07/meat-123668_1280.jpg",
      },
      {
        label: "Takeaway Discount",
        desc: "15% off on takeaway above ₹499.",
        img: "https://cdn.pixabay.com/photo/2018/09/27/17/34/seafood-dinner-3707538_1280.jpg",
      },
      {
        label: "Online Delivery",
        desc: "Flat 20% off on online orders.",
        img: "https://cdn.pixabay.com/photo/2025/03/06/13/17/pasta-9450866_1280.jpg",
      },
    ],
  },
  {
    title: "Buy 1 Get 1 Free on Tuesdays",
    cards: [
      {
        label: "Cheesy Delight 🍕",
        desc: "Get another pizza free!",
        img: "https://cdn.pixabay.com/photo/2022/08/02/07/30/pizza-7359753_1280.jpg",
      },
      {
        label: "Veggie Tuesday",
        desc: "Free veg pizza on ₹499+ orders.",
        img: "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg",
      },
      {
        label: "Family Combo",
        desc: "Buy 2 get 2 medium pizzas free.",
        img: "https://cdn.pixabay.com/photo/2021/12/09/22/17/table-setting-6859276_1280.jpg",
      },
    ],
  },
  {
    title: "Summer Treats Under ₹199",
    cards: [
      {
        label: "Aam Panna",
        desc: "Refreshing raw mango summer cooler.",
        img: "https://cdn.pixabay.com/photo/2020/05/16/09/11/panna-cotta-5176649_1280.jpg",
      },
      {
        label: "Coconut Water",
        desc: "Naturally sweet and hydrating coconut drink.",
        img: "https://cdn.pixabay.com/photo/2017/08/24/06/29/coconut-2675546_1280.jpg",
      },
      {
        label: "Fruit Chaat",
        desc: "Tangy mixed fruits with chaat masala.",
        img: "https://cdn.pixabay.com/photo/2016/11/19/14/18/oatmeal-1839515_1280.jpg",
      },
    ],
  },
];

const OfferLoyalty = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredOffers = offers.map((offer) => ({
    ...offer,
    cards: offer.cards.filter(
      (card) =>
        card.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
        card.desc.toLowerCase().includes(searchTerm.toLowerCase())
    ),
  }));

  return (
    <>
      <h1 className="text-3xl font-bold text-center text-purple-800 mt-6 mb-4">
        TasteNest Offers
      </h1>

      <input
        type="text"
        placeholder="Search offers..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full max-w-md mx-auto block px-4 py-2 border border-purple-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 mb-6"
      />

      {filteredOffers.map(
        (offer, i) =>
          offer.cards.length > 0 && (
            <React.Fragment key={i}>
              <h2 className="text-2xl font-bold text-purple-700 mt-8 mb-4 text-center">
                {offer.title}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
                {offer.cards.map((card, j) => (
                  <motion.div
                    key={j}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white shadow-md rounded-xl overflow-hidden"
                  >
                    <img
                      src={card.img}
                      alt={card.label}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-bold text-red-600">
                        {card.label}
                      </h3>
                      <p className="text-sm text-gray-700">{card.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </React.Fragment>
          )
      )}
    </>
  );
};

export default OfferLoyalty;
