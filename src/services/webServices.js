import axios from "axios";
import config from "./config.json";

export const getCarousel = () =>{
    return axios.get(`${config.localapi}/carousels`);
}

export const getCarouselActive = () =>{
    return axios.get(`${config.localapi}/articles`);
}