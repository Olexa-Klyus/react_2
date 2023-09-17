import React from 'react';

const Pagination2 = () => {
    return (
        <div>
            <button onClick={getPrev} className="button_prev">prev</button>
            <button onClick={getNext} className="button_next">next</button>
        </div>
    );
};

export default Pagination2;