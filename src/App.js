import {createContext, useState} from "react";

import Child1 from "./components/Child1/Child1";
import Child2 from "./components/Child2/Child2";

let hello = "hello";
export const SomeContext = createContext("default_context")
const App = () => {
    const [number, setNumber] = useState(null)

    return (
        <SomeContext.Provider value={{hello, number, setNumber}}>
            <div>
                <Child1/>
                <Child2 setNumber={setNumber}/>
            </div>
        </SomeContext.Provider>
    );
}

export default App;
