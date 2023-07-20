import {createBrowserRouter, Outlet} from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";
import {AppRoutes} from "./AppRoutes";
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


// const UserId = () => {
//     const {userId} = useParams()  // це хук, який виділяє параметри, які користувач(ка) ввів у браузері, тобто все післяостаннього слеша
//     fetch(`1vvdfdffd/${userId}`)  // щоб не робити окремий шлях для кожного id
//     return (
//         <div>user id</div>
//     )
// }

export const router = createBrowserRouter([
    {
        element: <AppLayout/>,
        errorElement: <>Oooooppppsss</>,
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
                element: <Comments/>
            },
            {
                path: AppRoutes.POSTS,
                element: <Post/>
            },

            // {
            //     path: AppRoutes.USERS,
            //     element: <Users/>,
            //     children: [
            //         {
            //             path: AppRoutes.USERS_INFO,
            //             element: <div>users info</div>,
            //         },
            //     ]
            // },
        ]
    },
]);