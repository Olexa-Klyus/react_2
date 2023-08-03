import React from 'react';

import {useToggle} from "../../hooks/useToggle";

// 3
const TestUseToggle = ({number}) => {
    let compStatus = (number % 2) ? true : false;

    useToggle()
    return (
        <div>
            3. component status: <b>{compStatus.toString()}</b>
            <br/><hr/>
        </div>
    );
};

export default TestUseToggle;


