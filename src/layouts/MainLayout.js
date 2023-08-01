import React, {Component} from 'react';

import Navbar from "../components/Navbar/Navbar";
import {Outlet} from "react-router-dom";

class MainLayout extends Component {

    render() {
        return (
            <div>
                <Navbar/>
                <Outlet/>
            </div>
        );
    }
}

export {MainLayout};