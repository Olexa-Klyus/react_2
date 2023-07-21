import {createBrowserRouter, Outlet} from "react-router-dom";
import {AppRoutes} from "./AppRoutes";

import Navbar from "../components/Navbar/Navbar";
import {Todos} from "../components/Todos/Todos";
import {Albums} from "../components/Albums/Albums";
import Comments from "../components/Comments/Comments";
import Post from "../components/Post/Post";

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
                path: AppRoutes.TODOS,
                element: <Todos/>,
            },
            {
                path: AppRoutes.ALBUMS,
                element: <Albums/>
            },
            {
                path: AppRoutes.COMMENTS,
                element: [<Outlet/>, <Comments/>],
                children:[
                    {
                        path: AppRoutes.POSTS,
                        // element: <Post/>,
                        children:[
                            {
                                path: AppRoutes.POST_ID,
                                element: <Post/>,
                                errorElement: <div>"Sorry, such post doesn't exist. Try again"<hr/></div>
                            },
                        ]
                    },
                ]
            },

        ]
    },
]);