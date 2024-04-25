import api from "./api"
import {CarData} from "@/models/cars"

const baseUrl = {
    baseURL: process.env.REACT_APP_BASE_URL
};




export function getCarById(carID: string) {
    return api.get(`api/v1/cars/${carID}`).then((res: any) => res.data);
};


export function getCarByQuery(yearQuery: string) {
    console.log(yearQuery)
    return api.get(`api/v1/cars${yearQuery}`).then((res: any) => res.data);


};


export function addNewCar(car: CarData) {
    return api.post('api/v1/cars', car, {});
}

export function deleteCarById(carId: string){
    return api.delete(`api/v1/cars/${carId}`, {});
}

