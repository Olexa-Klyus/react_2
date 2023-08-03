import React, {memo} from 'react';

const TestUseCallbackChild = memo(({someFunction}) => {
    const res = someFunction();
    return (
        <div>
            2. TestUseMemo -- useCallback -- result: <b>{res}</b>
        </div>
    );
})

export default TestUseCallbackChild;