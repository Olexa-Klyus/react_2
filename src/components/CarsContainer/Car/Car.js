import React from "react";
import {useDispatch} from "react-redux";

import {carActions, deleteCar} from "../../../reduxCore";

const Car = ({car}) => {
    const dispatch = useDispatch();

    const {id, brand, year, price} = car;

    return (
        <div>
            <p>{id}:<b> {brand}</b></p>
            <p>year: {year}, {price}$</p>
            <button onClick={()=>dispatch(carActions.editCar(car))}>Update</button>
            <button onClick={()=> dispatch(deleteCar(id))}>Delete</button>
        </div>
    );
};

export default Car;
