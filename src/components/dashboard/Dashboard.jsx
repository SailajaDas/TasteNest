import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import {
  User,
  UserPlus,
  Users,
  Utensils,
  CalendarDays,
  Gift,
  MessageCircle,
  HelpCircle,
} from "lucide-react";

const Dashboard = () => {
  const navItems = [
    { label: "Profile",
       path: "/dashboard/profile",
        icon: <User size={20} /> },
    {
      label: "Create Customer",
      path: "/dashboard/createcustomers",
      icon: <UserPlus size={20} />,
    },
    {
      label: "All Customers",
      path: "/dashboard/allusers",
      icon: <Users size={20} />,
    },
    {
      label: "Menu Preview",
      path: "/dashboard/menupreview",
      icon: <Utensils size={20} />,
    },
    {
      label: "Table Reservation",
      path: "/dashboard/tablereservation",
      icon: <CalendarDays size={20} />,
    },
    {
      label: "Offer Loyalty",
      path: "/dashboard/offerloyalty",
      icon: <Gift size={20} />,
    },
    {
      label: "Customer Reviews",
      path: "/dashboard/customerreviews",
      icon: <MessageCircle size={20} />,
    },
    {
      label: "FAQ Help",
      path: "/dashboard/faqhelp",
      icon: <HelpCircle size={20} />,
    },
  ];

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-[20%] bg-gradient-to-b from-indigo-500 to-purple-600 p-4 text-white space-y-4">
       
        {navItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-xl shadow-md transition-transform transform hover:scale-105 ${
                isActive ? "bg-white/20" : "hover:bg-indigo-600"
              }`
            }
          >
            {item.icon}
            <span className="font-semibold text-sm">{item.label}</span>
          </NavLink>
        ))}
      </aside>

      {/* Main Content */}
      <main className="w-[80%] bg-gradient-to-r from-purple-300 via-blue-300 to-cyan-300 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
