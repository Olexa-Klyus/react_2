import {useForm} from "react-hook-form";
import {useEffect} from "react";

import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../../validators/carValidator";

const CarForm = ({setOnSave, carForUpdate, setCarForUpdate}) => {
    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm({
        mode: "all",
        resolver: joiResolver(carValidator)
    });

    // update; set values of the car to fields
    useEffect(() => {
        if (carForUpdate) {
            setValue("brand", carForUpdate.brand, {shouldValidate: true})
            setValue("price", carForUpdate.price, {shouldValidate: true})
            setValue("year", carForUpdate.year, {shouldValidate: true})
        }
    }, [carForUpdate])


    // const setFormValues = () => {
    //     setValue("brand", "brand name", {shouldValidate: false})
    //     setValue("price", "1", {shouldValidate: true})
    //     setValue("year", "2019", {shouldValidate: true})
    // }


    const save = (obj) => {
        fetch("http://owu.linkpc.net/carsAPI/v1/cars", {
            headers: {"content-type": "application/json"},
            body: JSON.stringify(obj),
            method: "POST"
        })
            .then(value => {
                if (!value.ok) {
                    throw Error(value.status + ": request is not ok")
                }
                return value.json()
            })

            .then(() => {
                setOnSave(prev => !prev)
                reset()
            })

            .catch(e => {
                console.log(e)
            })
    }
    const update = (car) => {
        fetch(`http://owu.linkpc.net/carsAPI/v1/cars/${carForUpdate.id}`, {
            headers: {"content-type": "application/json"},
            body: JSON.stringify(car),
            method: "PUT"
        })
            .then(value => value.json())
            .then(() => {
                setOnSave(prev => !prev)
                setCarForUpdate(null)
                reset()
            })
    }

    return (
        <div>
            <form onSubmit={handleSubmit(!carForUpdate ? save : update)}>
                <label><input type="text" placeholder={"brand"} {...register("brand", {
                    // required: true
                })}/></label>
                {errors.brand && <span>{errors.brand.message}</span>}

                <label><input type="text" placeholder={"price"} {...register("price", {
                    valueAsNumber: true,
                    // required: true,
                    // min: {value: 0, message: "enter a price gte 0"},
                    // max: {value: 1000000, message: "enter a price lte 1000000"},
                })}/></label>
                {errors.price && <span>{errors.price.message}</span>}

                <label><input type="text" placeholder={"year"} {...register("year", {
                    valueAsNumber: true,
                    // required: true,
                    // min: {value: 1990, message: "enter a year gte 1990"},
                    // max: {value: new Date().getFullYear(), message: "year can`t be greater then current"}
                })}/></label>
                {errors.year && <span>{errors.year.message}</span>}

                <button disabled={!isValid}>{!carForUpdate ? "Save" : "Update"}</button>
            </form>
        </div>
    );
};

export default CarForm;


// prev
// import React, {useState} from 'react';
// const CarForm = ({setOnSave}) => {
//
//     const initialState = {
//         brand: "",
//         price: "",
//         year: ""
//     }
//
//     const [car, setCar] = useState(initialState);
//
//
//     const save = (e) => {
//         e.preventDefault();
//
//         fetch("http://owu.linkpc.net/carsAPI/v1/cars", {
//             headers: {"content-type": "application/json"},
//             body: JSON.stringify(car),
//             method: "POST"
//         })
//             .then(value => value.json()).then(() => {
//             setOnSave(prev => !prev)
//             setCar(initialState)
//         })
//     }
//
//     const inputChange = (e) => {
//         setCar(prev => ({...prev, [e.target.name]: e.target.value}))
//     }
//
//     return (
//         <form onSubmit={save}>
//             <div><label>brand: <input type="text" value={car.brand} name={"brand"} onChange={inputChange}/></label>
//             </div>
//             <div><label>price: <input type="text" value={car.price} name={"price"} onChange={inputChange}/></label>
//             </div>
//             <div><label>year: <input type="text" value={car.year} name={"year"} onChange={inputChange}/></label></div>
//             <button>Save</button>
//         </form>
//     );
// };
//
// export default CarForm;