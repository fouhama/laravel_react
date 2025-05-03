import Layout from "@/layouts/Layout";
import LayoutStudent from "@/layouts/LayoutStudent";
import Dashboard from "@/pages/Dashboard";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import NotFound from "@/pages/NotFound";
import Register from "@/pages/Register";
import Users from "@/pages/Users";
import { createBrowserRouter } from "react-router-dom";


export const Route = createBrowserRouter([
    {
        element : <Layout/>,
        children:[
            {
                path: '/',
                element: <Home/>
            },
            {
                path: 'users',
                element: <Users/>
            },
          
        ],
    },{
        element : <LayoutStudent/>,
        children:[
            {
                path :'/dashboard',
                element: <Dashboard/>
            }
        ]
    },
    {
        path: 'login',
        element: <Login/>
    },{
        path:'register',
        element: <Register/>
    }

    ,{
        path : '*',
        element : <NotFound/>
    }
])