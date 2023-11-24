import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home/Home";
import Gallery from "../Pages/Gallery/Gallery";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Classes from "../Pages/Classes/Classes";
import Trainer from "../Pages/Trainer/Trainer";
import Dashboard from "../Pages/Dashboard/Dashboard";

export const router = createBrowserRouter([{
  path: '/',
  element: <MainLayouts />,
  children: [
    {
      path: '/',
      element:<Home />
    },
    {
      path: '/gallery',
      element:<Gallery />
    },
    {
      path: '/login',
      element:<Login />
    },
    {
      path: '/signUp',
      element:<SignUp />
    },
    {
      path: '/classes',
      element:<Classes />
    },
    {
      path: '/trainer',
      element:<Trainer />
    },
    {
      path: '/dashboard',
      element:<Dashboard />
    },
  ]
  
}
  
])