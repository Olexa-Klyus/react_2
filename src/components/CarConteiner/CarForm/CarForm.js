import React, {useState} from 'react';

const CarForm = ({setOnSave}) => {
    const initialState = {
        brand: "",
        price: "",
        year: ""
    }

    const [car, setCar] = useState(initialState);

    const save = (e) => {
        e.preventDefault();

        fetch("http://owu.linkpc.net/carsAPI/v1/cars", {
            headers: {"content-type": "application/json"},
            body: JSON.stringify(car),
            method: "POST"
        })
            .then(value => value.json()).then(() => {
            setOnSave(prev => !prev)
            setCar(initialState)
        })
    }

    const inputChange = (e) => {
        setCar(prev => ({...prev, [e.target.name]: e.target.value}))
    }

    return (
        <form onSubmit={save}>
            <div><label>brand: <input type="text" value={car.brand} name={"brand"} onChange={inputChange}/></label>
            </div>
            <div><label>price: <input type="text" value={car.price} name={"price"} onChange={inputChange}/></label>
            </div>
            <div><label>year: <input type="text" value={car.year} name={"year"} onChange={inputChange}/></label></div>
            <button>Save</button>
        </form>
    );
};

export default CarForm;