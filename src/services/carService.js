import axios from "axios";

import {Endpoints} from "./endpoints";


const {REACT_APP_BASEURL} = process.env
const instance = axios.create({
    baseURL: REACT_APP_BASEURL
});
const baseApiUrl = "http://owu.linkpc.net/carsAPI/v1";

export const carService = {
    get: () => {
        return instance.get(baseApiUrl + Endpoints.cars)
        // .then(res => dispatch(carActions.setCars(res.data)));
    },
    post: (newCar) => {
        return instance.post(baseApiUrl + Endpoints.cars,
            newCar)
    },

    // delete: (id) => {
    //     return instance.delete(baseApiUrl + Endpoints.cars + id);
    // },

};