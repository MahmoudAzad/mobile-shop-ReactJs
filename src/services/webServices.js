import axios from "axios";
import { Store } from "../components/redux/store/store";
import config from "./config.json";

export const getCarousel = () =>{
    return axios.get(`${config.localapi}/carousels`);
}

export const getCarouselActive = () =>{
    return axios.get(`${config.localapi}/articles`);
}

export const getWeekly = () =>{
    return axios.get(`${config.localapi}/weeklies`);
}

export const getWeeklyById = id =>{
    const data =  Store.getState().Weekly;
    return data.find(item => item.id.toString() === id.toString());
}

export const getCategory = () =>{
    return axios.get(`${config.localapi}/categories`);
}