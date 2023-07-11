import React, {useContext} from 'react';
import {SomeContext} from "../../../App";


const SubChild1_1 = () => {
    const {hello, number} = useContext(SomeContext);
    return (
        <div>
            {hello}<br/>
            this is SubChild1_1<br/>
            number from SubChild2_2 is >>> {number}
        </div>
    );
};

export default SubChild1_1;