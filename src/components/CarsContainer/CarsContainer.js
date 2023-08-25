import React from 'react';

import CarForm from "./CarForm/CarForm";
import Cars from "./Cars/Cars";
import {useSelector} from "react-redux";

const CarsContainer = () => {
    const {isLoading, errors} = useSelector(state => state.cars);
    return (
        <div>
            {errors && <h3>Error: {JSON.stringify(errors)}</h3>}
            <CarForm/>
            <hr/>
            {isLoading && <h3>Loading...</h3>}
            <Cars/>
        </div>
    );
};

export default CarsContainer;