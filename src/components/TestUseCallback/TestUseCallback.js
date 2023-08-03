import React, {useCallback} from "react";

import TestUseCallbackChild from "./TestUseCallbackChild/TestUseCallbackChild";

// 2
export const TestUseCallback = ({number}) => {

    const someFunction = useCallback(() => {
        let res = 0;
        for (let i = 1; i < 1000000000; i++) {
            res += number;
        }
        return res;
    }, [number])


    return (
        <div>
            <TestUseCallbackChild someFunction={someFunction}/><br/>
            number: {number}
            <br/><br/>
            <button onClick={() => console.log("click")}>log click</button>
            <br/><hr/>

        </div>
    );
};