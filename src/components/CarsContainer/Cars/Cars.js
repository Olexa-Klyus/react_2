import React, {useEffect} from 'react';
import Car from "../Car/Car";
import {useDispatch, useSelector} from "react-redux";

import {getCars} from "../../../reduxCore";

const Cars = () => {
    const dispatch = useDispatch();
    const cars = useSelector(store => store.cars.results);

    useEffect(() => {
        dispatch(getCars())
    }, [dispatch]);

    return (
        <div>
            {cars.map(car => (<Car key={car.id} car={car}/>))}
        </div>
    );
};

export default Cars;