import React from 'react';
import {useSelector} from "react-redux";

import Car from "./Car/Car";
import {useGetCars} from "../../hooks/useGetCars";
import {UseAddCar} from "../../hooks/useAddCar";


const CarsContainer = () => {
    const cars = useSelector(store => store.cars.results);
    const isLoading = useSelector(store => store.cars.isLoading)
    const newCar = {brand: "C", year: 2023, price: 10000}

    useGetCars();
    UseAddCar(newCar);

    return (<div>
            {isLoading
                ? <h1>Loading...</h1>
                : <>
                    {cars.map(car => (<Car key={car.id} car={car}/>))}
                </>
            }
        </div>
    );
};

export default CarsContainer;