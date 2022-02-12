export const WeeklyReducer = (state=[], action) =>{
    switch(action.type){
        case "GET_WEEKLY" :
            return[...action.payload] ;
        default :
            return state;
    }

}