import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Page/Home";
import Login from "../Page/Login";
import SignUp from "../Page/SignUp";
import Cart from "../Page/Cart";
import Wishlist from "../Page/Wishlist";
import CategoryPage from "../Page/CategoryPage";
import LedTvPage from "../Page/LedTvPage";
import RefrigeratorPage from "../Page/Kitchen/RefrigeratorPage";
import OvensMicrowavesPage from "../Page/Kitchen/OvensMicrowavesPage";
import DishwashersPage from "../Page/Kitchen/DishwashersPage";
import BreakfastMakersPage from "../Page/Kitchen/BreakfastMakersPage";
import BlendersMixersPage from "../Page/Kitchen/BlendersMixersPage";
import CoffeeBeveragePage from "../Page/Kitchen/CoffeeBeveragePage";
import CookersPage from "../Page/Kitchen/CookersPage";
import Giftcard from "../Page/Giftcard";


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
            },
            {
                path:'led-tv',
                Component: LedTvPage
            },
            {
                path:'kitchen/refrigerator',
                Component: RefrigeratorPage
            },
            {
                path:'kitchen/ovens-microwaves',
                Component: OvensMicrowavesPage
            },
            {
                path:'kitchen/dishwashers',
                Component: DishwashersPage
            },
            {
                path:'kitchen/breakfast-makers',
                Component: BreakfastMakersPage
            },
            {
                path:'kitchen/blenders-mixers',
                Component: BlendersMixersPage
            },
            {
                path:'kitchen/coffee-beverage',
                Component: CoffeeBeveragePage
            },
            {
                path:'kitchen/cookers',
                Component: CookersPage
            },
            {
                path:'/giftcards',
                Component: Giftcard
            }

        ]
    }
]);