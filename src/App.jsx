import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./components/dashboard/Dashboard";

import ProtectedRoute from "./privaterouting/ProtectedRoute";
import MenuPreview from "./components/dashboardpages/MenuPreview";
import TableReservation from "./components/dashboardpages/TableReservation";
import OfferLoyalty from "./components/dashboardpages/OfferLoyalty";
import CustomerReviews from "./components/dashboardpages/CustomerReviews";
import FaqHelp from "./components/dashboardpages/FaqHelp";
import Profile from "./components/dashboardpages/Profile";

import Allusers from "./components/dashboardpages/Allusers";
import CreateCustomer from "./components/dashboardpages/CreateCustomer";
import EditUser from "./components/dashboardpages/EditUser";
import DashboardHome from "./components/dashboardpages/DashboardHome";
import Error from "./pages/Error";

const App = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement:<Error/>,
      children: [
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/services",
          element: <Service />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/dashboard",
          element: (
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          ),
          children: [
            {
              path: "/dashboard/dashboardhome",
              element: <ProtectedRoute><DashboardHome /></ProtectedRoute>,
            },
            {
              path: "/dashboard/menupreview",
              element: <MenuPreview />,
            },
            {
              path: "/dashboard/tablereservation",
              element: <TableReservation />,
            },
            {
              path: "/dashboard/offerloyalty",
              element: <OfferLoyalty />,
            },
            {
              path: "/dashboard/customerreviews",
              element: <CustomerReviews />,
            },
            {
              path: "/dashboard/profile",
              element: <Profile />,
            },
            {
              path: "/dashboard/createcustomers",
              element: <CreateCustomer />,
            },
            {
              path: "/dashboard/allusers",
              element: <Allusers />,
            },

            {
              path: "/dashboard/faqhelp",
              element: (
                <ProtectedRoute>
                  <FaqHelp />
                </ProtectedRoute>
              ),
            },
          ],
        },
        {
          path: "/edituser/:slug",
          element: (
            <ProtectedRoute>
              <EditUser />
            </ProtectedRoute>
          ),
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
};

export default App;
