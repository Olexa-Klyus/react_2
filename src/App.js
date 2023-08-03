import React from "react";

import "./index.css"
import {TestUseMemo} from "./components/TestUseMemo/TestUseMemo";
import Navbar from "./components/Navbar/Navbar";

function App() {
    let data = {number: 10, name: "first"};
    return (
        <div>
            <Navbar/>
            Hello!
            <TestUseMemo data={data}/>
        </div>
    );
}

export default App;
