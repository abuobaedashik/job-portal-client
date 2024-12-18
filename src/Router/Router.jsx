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
import AddJob from "../Pages/AddJob";
import MyPostedJobs from "../Pages/MyPostedJobs";
import ViewApplication from "../Pages/ViewApplication";

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
            path:"/addjob",
            element:<PrivateRoute><AddJob/></PrivateRoute>
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
        {
            path:"/mypostedjobs",
            element:<PrivateRoute><MyPostedJobs></MyPostedJobs></PrivateRoute>
        },
        {
            path:"/viewApplication/:job_id",
            element:<PrivateRoute><ViewApplication></ViewApplication></PrivateRoute>,
            loader:({params})=>fetch(`http://localhost:3000/job_application/jobs/${params.job_id}`)
        },

      ]
    },
  ]);

  export default Router;