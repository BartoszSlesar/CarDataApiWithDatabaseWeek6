import axios from "axios";
import {CarData} from "@/models/cars";

const axiosParams = {
    baseURL: process.env.REACT_APP_BASE_URL
};

const axiosInstance = axios.create(axiosParams)

function api(axios: any) {
    return {
        get:  (url:string, config = {}) => axios.get(url, config),
        post: (url:string, body:CarData, config = {}) => axios.post(url, body, config),
        put: (url:string, body:CarData, config = {}) => axios.put(url, body, config),
        patch: (url:string, body:CarData, config = {}) => axios.patch(url, body, config),
        delete: (url:string, config = {}) => axios.delete(url, config),
    };
};

export default api(axiosInstance);