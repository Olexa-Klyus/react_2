import {owuApiService} from "./owuApiService";
import {urls} from "../urls/urls";

class CarService{
    getAll(){
        return owuApiService.get(urls.owu.cars)
    }
}

export const carService = new CarService();