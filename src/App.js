import React, {useState} from "react";

import "./index.css"
import {TestUseMemo} from "./components/TestUseMemo/TestUseMemo";
import Navbar from "./components/Navbar/Navbar";
import {TestUseCallback} from "./components/TestUseCallback/TestUseCallback";
import TestUseToggle from "./components/TestUseToggle/TestUseToggle";

function App() {
    const [number, setNumber] = useState(1);

    // let data = {number: 10, name: "first"};
    return (
        <div>
            <Navbar/>
            Hello! <br/><br/>
            <button onClick={()=>setNumber(prev=>++prev)}>Click</button>
            <TestUseMemo number={number}/>
            <TestUseCallback number={number}/>
            <TestUseToggle number={number}/>
        </div>
    );
}

export default App;
