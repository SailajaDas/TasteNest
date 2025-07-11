import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const AllUsers = () => {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/users");
      setUsers(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const { data } = await axios.delete(`http://localhost:3000/users/${id}`);
      console.log(data);
      toast.success("Deleted Successfully", { position: "top-right" });
      fetchData(); 
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, { position: "top-right" });
    }
  };

  return (
    <>
      <h2 className="text-3xl font-extrabold text-center text-purple-700 mt-10 mb-8">
        All Registered Customers
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 pb-10 place-items-center">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white shadow-xl rounded-2xl w-full max-w-sm p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={
                user.image && user.image.trim() !== ""
                  ? user.image
                  : `https://ui-avatars.com/api/?name=${user.username}&background=8b5cf6&color=fff`
              }
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover border-4 border-purple-500 shadow-sm"
            />
            <h2 className="mt-4 text-xl font-bold text-gray-800">{user.username}</h2>
            <p className="text-gray-500 text-sm">{user.email}</p>

            <p className="text-sm mt-4 text-gray-700">
              <span className="font-semibold">User ID:</span> {user.id}
            </p>
            <p className="text-sm text-gray-700">
              <span className="font-semibold">Gender:</span> {user.gender}
            </p>
            <p className="text-sm text-gray-700">
              <span className="font-semibold">Password:</span> {user.password}
            </p>

            <div className="mt-6 flex justify-between w-full gap-4">
              <button className="flex-1 bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition">
               <Link to={`/edituser/${user.id}`}>Edit Profile</Link>
              </button>

              <button
                onClick={() => handleDelete(user.id)}
                className="flex-1 bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition"
              >
                Delete Profile
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AllUsers;
