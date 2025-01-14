import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout.jsx";
import Home from "./pages/home/Home.jsx";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";
import Details from "./components/Details/Details.jsx";
import AuthProvider from "./components/AuthPovider/AuthProvider.jsx";
import Error from "./pages/error/Error.jsx";
import UpdateProfile from "./pages/updateProfile/UpdateProfile.jsx";
import Contact from "./pages/contact/Contact.jsx";
import PrivetRoute from "./pages/privet/PrivetRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement:<Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/land.json"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/details/:id",
        element:<PrivetRoute> <Details></Details></PrivetRoute>,
        loader: () => fetch("/land.json"),
      },
      {
        path: "/updateProfile",
        element: <PrivetRoute><UpdateProfile></UpdateProfile></PrivetRoute>,
       
      },
      {
        path: "/contact",
        element: <PrivetRoute><Contact></Contact></PrivetRoute>,
       
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
