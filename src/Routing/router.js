import {createBrowserRouter} from "react-router-dom";

import {TestUseMemo} from "../components/TestUseMemo/TestUseMemo";
import App from "../App";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children:[
            {
                path: "/testmemo",
                element: <TestUseMemo/>
            },
        ]
    },


]);