import React from 'react'
import Car from "./Car/Car";

export class Cars extends React.Component {
    constructor({props}) {
        super(props);
        this.state = {}
    }

    async componentDidMount() {
        try {
            const res = await fetch("http://owu.linkpc.net/carsAPI/v1/cars")
            const cars = await res.json()
            this.setState(cars)
            console.log(cars)
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        const cars = this.state
        console.log(cars)
        return (
            <div>
                {[cars].map(car => <Car key={car.id} car={car}/>)}
            </div>
        )
    }
}