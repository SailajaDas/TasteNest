import React, { useState } from "react";

const faqs = [
  {
    question: "What are your restaurant hours?",
    answer: "We are open daily from 11:00 AM to 11:00 PM, including weekends and public holidays.",
  },
  {
    question: "Do you offer home delivery?",
    answer: "Yes, we offer home delivery within a 5 km radius for all orders above ₹299.",
  },
  {
    question: "Can I make a table reservation online?",
    answer: "Absolutely! Use our 'Table Reservation' page to book your table instantly.",
  },
  {
    question: "Do you provide vegetarian and vegan options?",
    answer: "Yes, our menu features a wide range of vegetarian and vegan-friendly dishes.",
  },
  {
    question: "How can I use TasteNest offers and loyalty points?",
    answer: "Login to your account to apply offers and redeem loyalty points during checkout.",
  },
];

const FaqHelp = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="px-6 py-10">
      <div className="mb-10">
        <img
          src="https://cdn.pixabay.com/photo/2016/11/29/10/09/bakery-1868925_1280.jpg"
          alt="restaurant interior"
          className="rounded-xl w-full h-64 object-cover shadow-lg"
        />
      </div>

      <h1 className="text-4xl font-bold text-purple-700 text-center mb-8">
        Frequently Asked Questions
      </h1>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg transition-all duration-300 border border-gray-200"
          >
            <button
              className="w-full text-left px-6 py-4 text-lg font-semibold text-purple-800 flex justify-between items-center"
              onClick={() => toggle(index)}
            >
              {faq.question}
              <span className="text-xl">
                {activeIndex === index ? "−" : "+"}
              </span>
            </button>
            {activeIndex === index && (
              <div className="px-6 pb-4 text-gray-700">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqHelp;
