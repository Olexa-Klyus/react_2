import React from "react";

// import {useDeleteCar} from "../../../hooks/useDeleteCar";

const Car = ({car}) => {
    const {id, brand, year, price} = car;
    return (
        <div>
            <p>{id}:<b> {brand}</b></p>
            <p>year: {year}, {price}$</p>
            {/*<button onClick={useDeleteCar(id)}></button>*/}
        </div>
    );
};

export default Car;
