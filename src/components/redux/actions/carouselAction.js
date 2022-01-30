import { getCarousel } from "../../../services/webServices"

export const CarouselAction = () =>{
    return async dispatch =>{
        const{data} = await getCarousel();
        await dispatch({type:"GET_CAROUSEL" , payload:data});
    }
}