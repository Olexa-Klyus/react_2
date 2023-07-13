import React, {useContext} from 'react';
import {SomeContext} from "../../../App";

const SubChild2_2 = () => {
    const {setNumber} = useContext(SomeContext);
    let number = 25;

    // виклик setNumber помістити в useEffect, бо інакше в браузері в консолі помилки будуть
    setNumber(number);

    return (
        <div>
            <br/>
            hello from SubChild2_2, my number is {number}
        </div>
    );
};

export default SubChild2_2;