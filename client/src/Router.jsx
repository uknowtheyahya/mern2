import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from "./App";
import Home from "./home/Home";
import Shop from "./shop/Shop";
import About from "./components/About";
import Blog from "./components/Blog";
import Single from "./shop/Single";
import Dashboard from "./dashboard/Dashboard";
import DashboardLayout from "./dashboard/DashboardLayout";
import Upload from "./dashboard/Upload";
import Manage from "./dashboard/Manage"
import Edit from "./dashboard/Edit";
import Signup from "./components/Signup";
import Login from "./components/Login";
import PrivateRoute from "./privateroute/PrivateRoute";
import Logout from "./components/Logout"
import User from "./components/User";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
       {
        path:'/',
        element:<Home/>
       },
       {
        path:'/shop',
        element:<Shop/>
       },
       {
        path:'/about',
        element:<About/>
       },
       {
        path:'/blog',
        element:<Blog/>
       },
       {
        path:'/book/:id',
        element:<Single/>,
        loader: ({params})=> fetch(`http://localhost:5000/book/${params.id}`)
       },
       
      ]
    },
    {
      path: "/admin/dashboard",
      element: <DashboardLayout/>,
      children:[
        {
          path:"/admin/dashboard",
          element: <PrivateRoute><Dashboard/></PrivateRoute>
        },
        {
          path:"/admin/dashboard/upload",
          element: <Upload/>
        },
        {
          path:"/admin/dashboard/manage",
          element: <Manage/>
        },
        {
          path:"/admin/dashboard/edit-books/:id",
          element: <Edit/>,
          loader: ({params})=> fetch(`http://localhost:5000/book/${params.id}`)
        }
        

      ]
    },
    {
      path:"/sign-up",
      element:<Signup/>

    },
    {
      path:"login",
      element:<Login/>
    },
    {
      path:"logout",
      element:<Logout/>
    },
    {
      path:"user",
      element:<User/>
    },
  ]);
  export default router;