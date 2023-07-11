import React from 'react';

const SubChild2_2 = ({setNumber}) => {
    let number = 25;
    setNumber(number);
    return (
        <div>
            <br/>
            hello from SubChild2_2, my number is {number}
        </div>
    );
};

export default SubChild2_2;