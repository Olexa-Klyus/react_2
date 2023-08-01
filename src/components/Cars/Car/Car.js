import React from 'react';

export class Car extends React.Component {
    constructor(car) {
        super(car);
        this.state = {
            id: car.id,
            brand: car.brand,
            price: car.price,
            year: car.year
        }
    }

    render() {
        return (
            <div>
                <div>id: {this.id}</div>
                <div>brand: {this.brand}</div>
                <div>price: {this.price}</div>
                <div>year: {this.year}</div>
            </div>
        )
    }
}

export default Car;