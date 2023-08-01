import {createBrowserRouter, Navigate} from "react-router-dom";

import {AppRoutes} from "./AppRoutes";
import CarsPage from "../pages/CarsPage";
import {PostsPage} from "../pages/PostsPage";
import {CommentsPage} from "../pages/CommentsPage";
import {MainLayout} from "../layouts/MainLayout";


export const router = createBrowserRouter([
    {
        path: AppRoutes.MAIN,
        element: <MainLayout/>,
        errorElement: <div>Oooooppppsss</div>,
        children: [
            {
                index: true,
                element: <Navigate to={"cars"}/>
            },
            {
                path: AppRoutes.CARS,
                element: <CarsPage/>
            },
            {
                path: AppRoutes.POSTS,
                element: <PostsPage/>
            },
            {
                path: AppRoutes.COMMENTS,
                element: <CommentsPage/>
            },
        ]
    },
]);