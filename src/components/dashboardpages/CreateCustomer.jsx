import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CreateCustomer = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    gender: "",
    phone: "",
    dob: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    try {
      const result = await axios.post("http://localhost:3000/users", formData);
      console.log(result);
      toast.success("User created successfully");
      navigate("/dashboard/allusers");
    } catch (error) {
      toast.error("Error creating user");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md mx-auto my-10"
    >
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        User Registration
      </h2>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Username</label>
        <input
          type="text"
          name="username"
          className="w-full border rounded-lg px-4 py-2"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Email</label>
        <input
          type="email"
          name="email"
          className="w-full border rounded-lg px-4 py-2"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Password</label>
        <input
          type="password"
          name="password"
          className="w-full border rounded-lg px-4 py-2"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Gender</label>
        <select
          name="gender"
          className="w-full border rounded-lg px-4 py-2"
          value={formData.gender}
          onChange={handleChange}
          required
        >
          <option value="">Select</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Mobile Number</label>
        <input
          type="tel"
          name="phone"
          className="w-full border rounded-lg px-4 py-2"
          value={formData.phone}
          onChange={handleChange}
          required
          pattern="[0-9]{10}"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Date of Birth</label>
        <input
          type="date"
          name="dob"
          className="w-full border rounded-lg px-4 py-2"
          value={formData.dob}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Image URL</label>
        <input
          type="url"
          name="image"
          className="w-full border rounded-lg px-4 py-2"
          value={formData.image}
          onChange={handleChange}
        />
      </div>

      {/* ✅ Avatar Preview with Fallback */}
      <div className="mb-4 text-center">
        {formData.image ? (
          <img
            src={formData.image}
            alt="Preview"
            className="mx-auto h-24 w-24 rounded-full object-cover border-4 border-purple-500 shadow"
          />
        ) : (
          <div className="mx-auto h-24 w-24 rounded-full bg-purple-500 text-white flex items-center justify-center text-3xl font-bold border-4 border-purple-500 shadow">
            {formData.username?.charAt(0).toUpperCase() || "U"}
          </div>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition"
      >
        Register
      </button>
    </form>
  );
};

export default CreateCustomer;
