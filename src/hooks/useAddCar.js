import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";

import {addCar} from "../reduxCore/actions/carActions";

export const UseAddCar = (newCar) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(addCar(newCar))
    }, []);
}