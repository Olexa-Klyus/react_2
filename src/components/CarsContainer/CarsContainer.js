import React from 'react';

import Cars from "./Cars/Cars";
import CarForm from "./CarForm/CarForm";


const CarsContainer = () => {
    return (<div>
            <CarForm/>
            <hr/>
            <Cars/>
        </div>
    );
};

export default CarsContainer;