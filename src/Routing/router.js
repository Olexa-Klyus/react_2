import {createBrowserRouter} from "react-router-dom";

import Lesson9 from "../components/Lesson9/Lesson9";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <div>Hello world!</div>,
    },
    {
        path: "/lesson9",
        element: <Lesson9/>,
    },

]);