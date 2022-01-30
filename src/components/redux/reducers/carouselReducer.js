export const CarouselReducer = (state=[], action) =>{
    switch(action.type){
        case "GET_CAROUSEL" :
            return[...action.payload] ;
        default :
            return state;
    }

}