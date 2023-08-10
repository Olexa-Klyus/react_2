import {CarActionTypes} from "../reducers/carsReducer";
import {carService} from "../../services/carService";

export const carActions = {
    setCars: (data) => ({type: CarActionTypes.SET_CARS, payload: data}),
    setError: (data) => ({type: CarActionTypes.SET_ERROR, payload: data}),
    setIsLoading: (isLoading) => ({type: CarActionTypes.SET_IS_LOADING, payload: isLoading}),
    addCar: (newCar) => ({type: CarActionTypes.ADD_CAR, payload: newCar}),
    // deleteCar: (data)=> ({type: CarActionTypes.ADD_CAR, payload: data}),
}

export const getCars = () => (dispatch) => {
    dispatch(carActions.setIsLoading(true));

    carService.get()
        .then(res => dispatch(carActions.setCars(res.data)))
};

export const addCar = (newCar) => (dispatch) => {
    carService.post(newCar)
        .then(res => dispatch(carActions.addCar(res.data)))
};

// export const deleteCar = (id) => (dispatch) => {
//     carService.delete(id)
//         .then(res => dispatch(carActions.deleteCar(res.data)))
// };






