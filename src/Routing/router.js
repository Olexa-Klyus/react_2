import {createBrowserRouter, Outlet} from "react-router-dom";
import {AppRoutes} from "./AppRoutes";

import Navbar from "../components/Navbar/Navbar";
import {Cars} from "../components/Cars/Cars";
import Posts from "../components/Posts/Posts";
import Comments from "../components/Comments/Comments";

const AppLayout = () => (
    <>
        <Navbar/>
        <Outlet/>
    </>
)

export const router = createBrowserRouter([
    {
        element: <AppLayout/>,
        errorElement: <div>Oooooppppsss</div>,
        children: [
            {
                path: AppRoutes.MAIN,
                element: <div>Welcome!</div>,
            },
            {
                path: AppRoutes.CARS,
                element: <Cars/>
            },
            {
                path: AppRoutes.POSTS,
                element: <Posts/>
            },
            {
                path: AppRoutes.COMMENTS,
                element: <Comments/>
            },
        ]
    },
]);