import React, {useMemo} from 'react';

// 1
export const TestUseMemo = ({number}) => {
    const someFunction = (number) => {
        let res = 0;
        for (let i = 1; i < 1000000000; i++) {
            res += number;
        }
        return res;
    }

    const someRes = useMemo(() => someFunction(number), [number]);


    return (
        <div>
            <br/>
            1. TestUseMemo -- useMemo -- result: <b>{someRes}</b>
            <br/><br/>
            <button onClick={() => console.log("click")}>log click</button>
            <br/><hr/>
        </div>
    );
};