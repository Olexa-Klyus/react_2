import {carService} from "../../services";

export const CarActionTypes = {
    SET_CARS: "SET_CARS",
    ADD_CAR: "ADD_CAR",
    EDIT_CAR: "EDIT_CAR",
}

export const carActions = {
    setCars: (data) => ({type: CarActionTypes.SET_CARS, payload: data}),
    editCar: (data) => ({type: CarActionTypes.EDIT_CAR, payload: data}),
    // addCar: (newCar) => ({type: CarActionTypes.ADD_CAR, payload: newCar}),
};


export const getCars = () => (dispatch) => {
    carService.getAll()
        .then(res => dispatch(carActions.setCars(res.data)))
};

export const addCar = (newCar) => async dispatch => {
    await carService.create(newCar)
    await dispatch(getCars())
};

export const updateCar = (id, car) => async dispatch => {
    await carService.updateById(id, car);
    dispatch(carActions.editCar(null));
    await dispatch(getCars());
};

export const deleteCar = (id) => async dispatch=>{
    await carService.deleteById(id);
    await dispatch(getCars());
};





