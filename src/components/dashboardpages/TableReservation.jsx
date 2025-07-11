

import React, { useState } from "react";
import { motion } from "framer-motion";

const TableReservation = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Reservation confirmed for ${formData.name} on ${formData.date} at ${formData.time}`);
  };

  return (
    <>
      {/* Top Banner Image */}
      <motion.img
        src="https://cdn.pixabay.com/photo/2019/07/12/18/22/lamps-4333322_1280.jpg"
        alt="Restaurant Ambience"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full h-64 object-cover rounded-b-xl shadow-lg"
      />

      <h1 className="text-4xl font-bold text-center text-purple-800 mt-8 mb-4">
        Reserve Your Table
      </h1>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-xl mx-auto bg-white shadow-xl rounded-xl p-8 space-y-6"
      >
        <div>
          <label className="block text-sm font-semibold mb-1 text-purple-700">
            Name
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-purple-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-purple-500"
            placeholder="Your full name"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1 text-purple-700">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-purple-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-purple-500"
            placeholder="e.g. 9876543210"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold mb-1 text-purple-700">
              Date
            </label>
            <input
              type="date"
              name="date"
              required
              value={formData.date}
              onChange={handleChange}
              className="w-full border border-purple-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1 text-purple-700">
              Time
            </label>
            <input
              type="time"
              name="time"
              required
              value={formData.time}
              onChange={handleChange}
              className="w-full border border-purple-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1 text-purple-700">
            Number of Guests
          </label>
          <input
            type="number"
            name="guests"
            min="1"
            max="20"
            required
            value={formData.guests}
            onChange={handleChange}
            className="w-full border border-purple-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          type="submit"
          className="w-full bg-purple-700 text-white font-semibold py-2 rounded-md hover:bg-purple-800 transition"
        >
          Book Table
        </motion.button>
      </motion.form>

      {/* Bottom Decorative Image */}
      <motion.img
        src="https://cdn.pixabay.com/photo/2019/09/08/19/13/pistoia-4461681_1280.jpg"
        alt="Fine Dining"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="w-full h-64 object-cover rounded-t-xl mt-10 shadow-lg"
      />
    </>
  );
};

export default TableReservation;
