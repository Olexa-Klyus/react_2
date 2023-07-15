import React, {useContext, useEffect} from 'react';
import {SomeContext} from "../../../App";

const SubChild2_2 = () => {
    const {setNumber} = useContext(SomeContext);
    let number = 25;

    useEffect(()=> {
        setNumber(number)
    }, [number, setNumber])

    return (
        <div>
            <br/>
            hello from SubChild2_2, my number is {number}
        </div>
    );
};

export default SubChild2_2;