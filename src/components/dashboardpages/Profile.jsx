import React from "react";
import { motion } from "framer-motion";
import { MdEmail, MdPhone, MdCake } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";

const Profile = () => {
  const user = {
    name: "Sailaja Das",
    email: "lija@123",
    phone: "7856903434",
    dob: "2025-06-13",
    gender: "Female",
    image:
      "https://cdn.pixabay.com/photo/2024/06/25/13/12/woman-8852664_1280.jpg",
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.03 }}
      className="bg-white/30 dark:bg-gray-800/40 backdrop-blur-lg border border-purple-200 dark:border-purple-600 p-6 rounded-2xl shadow-2xl w-full max-w-sm mx-auto text-center mt-10 transition-all duration-300"
    >
      <img
        src={user.image}
        alt="profile"
        className="w-28 h-28 rounded-full mx-auto object-cover shadow-lg border-4 border-purple-300 dark:border-purple-500"
      />
      <h2 className="mt-4 text-2xl font-extrabold text-purple-800 dark:text-purple-300">{user.name}</h2>

      <div className="mt-4 space-y-2 text-gray-700 dark:text-gray-200 text-left">
        <p className="flex items-center justify-center gap-2">
          <MdEmail className="text-purple-600 dark:text-purple-400" /> {user.email}
        </p>
        <p className="flex items-center justify-center gap-2">
          <MdPhone className="text-purple-600 dark:text-purple-400" /> {user.phone}
        </p>
        <p className="flex items-center justify-center gap-2">
          <MdCake className="text-purple-600 dark:text-purple-400" /> {user.dob}
        </p>
        <p className="flex items-center justify-center gap-2">
          <FaUserAlt className="text-purple-600 dark:text-purple-400" /> {user.gender}
        </p>
      </div>
    </motion.div>
  );
};

export default Profile;
