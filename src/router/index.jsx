import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from '../pages/home'
import About from "../pages/about";
import Services from "../pages/services";
import Contact from "../pages/contact";

const router = createBrowserRouter([
  {
    path : '/',
    element:<MainLayout/>,
    children :[
      {
        index:true,
        element: <Home/>
      },
      {
        path:'about',
        element:<About/>
      },
      {
        path: 'services',
        element:<Services/>
      },
      {
        path:'contact',
        element:<Contact/>
      }
    ]
  }
])

export default router