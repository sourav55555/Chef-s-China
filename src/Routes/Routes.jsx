import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Blogs from '../Components/Home/Blogs';
import ChefRecipe from '../Components/Home/ChefRecipe/ChefRecipe';
import Home from '../Components/Home/Home';
import Login from '../Components/User/Login';
import Register from '../Components/User/Register';
import ErrorPage from '../Layout/ErrorPage';
import Main from '../Layout/Main';
import User from '../Layout/User';
import PrivateRout from './PrivateRout';

const router = createBrowserRouter([
        {
            path: "/",
            element: <Main/>,
            errorElement: <ErrorPage/>,
            children:[
                {
                    path:"/",
                    element: <Home/>,
                    loader: ()=> fetch("https://chefs-server.vercel.app/chefs")
                },
                {
                    path: "/recipe/:id",
                    element: <PrivateRout><ChefRecipe/></PrivateRout>,
                    loader: ({params})=> fetch(`https://chefs-server.vercel.app/chefs/${params.id}`)
                },
                {
                    path:"/blogs",
                    element: <Blogs/>
                }
            ]
        },
        {
            path: "user",
            element: <User/>,
            children:[
                {
                    path: "login",
                    element: <Login/>
                },
                {
                    path: "register",
                    element: <Register/>
                }
            ]
        }
    ])



export default router;