import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Page/Home";
import Login from "../Page/Login";
import SignUp from "../Page/SignUp";
import Cart from "../Page/Cart";
import Wishlist from "../Page/Wishlist";
import CategoryPage from "../Page/CategoryPage";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path:'login',
                Component: Login
            },
            {
                path:'signup',
                Component: SignUp
            },
            {
                path:'cart',
                Component: Cart
            },
            {
                path:'wishlist',
                Component: Wishlist
            },
            {
                path:'category/:categorySlug',
                Component: CategoryPage
            }

        ]
    }
]);