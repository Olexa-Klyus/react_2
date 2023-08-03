import React, {useRef} from 'react';

import {useArray} from "../../hooks/useArray";

// 5
const TestUseArray = () => {
    const {data, add, remove} = useArray([]);
    const inpt = useRef();

    const addItem = () => {
        const lastElement = data.slice(-1);
        const id = lastElement.length ? lastElement[0].id + 1 : 1
        add({id, name: inpt.current.value})
        inpt.current.value = "";
    }

    return (
        <div>
            <div>
                <input type="text" ref={inpt}/>
                <br/><br/>
                <button onClick={addItem}>Add</button>
            </div>
            <div>
                {data.map((item) => (
                    <div key={item.id}>
                        {item.id}: {item.name}
                        <button onClick={() => remove(item.id)}>Remove</button>
                        <br/><br/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TestUseArray;