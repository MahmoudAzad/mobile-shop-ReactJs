import { combineReducers } from "redux";
import { CarouselReducer } from "./carouselReducer";
import { CategoriesReducer } from "./categoriesReducer";
import { WeeklyReducer } from "./weeklyReducer";

export const Reducers = combineReducers({
    Carousel : CarouselReducer,
    Weekly : WeeklyReducer,
    Categories : CategoriesReducer,
})