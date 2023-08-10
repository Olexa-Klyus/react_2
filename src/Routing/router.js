import {createBrowserRouter} from "react-router-dom";

import CarsContainer from "../components/Lesson9/CarsContainer";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <div>Hello world!</div>,
    },
    {
        path: "/cars",
        element: <CarsContainer/>,
    },

]);