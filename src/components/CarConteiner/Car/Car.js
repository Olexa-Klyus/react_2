import React from 'react';

// const deleteCar = (car, setCars) => {
//     fetch(`http://owu.linkpc.net/carsAPI/v1/cars/${car.id}`,
//         {
//             method: "DELETE",
//             headers: {"content-type": "application/json"}
//         }).then(res => res.json()).then(res => setCars(res))
// }

const Car = ({car}) => {
    const {id, brand, price, year} = car;
    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            {/*<button>Update</button>*/}
            {/*<button onClick={deleteCar}>Delete</button>*/}
        </div>
    );
};

export default Car;