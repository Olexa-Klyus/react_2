import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";

import {addCar, updateCar} from "../../../reduxCore";

const CarForm = () => {
    const {register, reset, setValue, handleSubmit} = useForm();

    const dispatch = useDispatch();
    const carForUpd = useSelector(store => store.cars.carForUpd);

    if (carForUpd) {
        setValue("brand", carForUpd.brand)
        setValue("price", carForUpd.price)
        setValue("year", carForUpd.year)
    }
    const save = async (car) => {
        await dispatch(addCar(car));
        reset();
    }
    const update = async (car) => {
        await dispatch(updateCar(carForUpd.id, car))
        reset();
    }

    return (
        <form onSubmit={handleSubmit(carForUpd ? update : save)}>

            <input type="text" placeholder={"brand"}{...register("brand")}></input>
            <input type="text" placeholder={"price"}{...register("price")}></input>
            <input type="text" placeholder={"year"}{...register("year")}></input>

            <button>{carForUpd ? "Update" : "Save"}</button>

        </form>
    );
};

export default CarForm;