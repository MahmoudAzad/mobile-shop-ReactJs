import { combineReducers } from "redux";
import { CarouselReducer } from "./carouselReducer";

export const Reducers = combineReducers({
    Carousel : CarouselReducer
})