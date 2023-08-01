import Navbar from "../Navbar/Navbar";
import {Outlet} from "react-router-dom";

export const AppLayout = () => (
    <>
        <Navbar/>
        <Outlet/>
    </>
);