import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import MainLayout from "../Pages/MainLayout";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Details from "../Pages/Details";
import PrivateRoute from "./PrivateRoute";
import ApplyJob from "../Pages/ApplyJob";
import MyApplication from "../Pages/MyApplication";

  const Router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/jobDetails/:id",
            element:<PrivateRoute><Details></Details></PrivateRoute>,
            loader:({params})=>fetch(`http://localhost:3000/jobs/${params.id}`)
        },
        {
            path:"/applyjob/:id",
            element:<PrivateRoute><ApplyJob></ApplyJob></PrivateRoute>,
            loader:({params})=>fetch(`http://localhost:3000/jobs/${params.id}`)
        },
        {
            path:"/myapplication",
            element:<PrivateRoute><MyApplication/></PrivateRoute>
        },
        {
            path:"/register",
            element:<Register></Register>
        },
        {
            path:"/login",
            element:<Login></Login>
        },
        {
            path:"/about",
            element:<div></div>
        },

      ]
    },
  ]);

  export default Router;