export const CartReducer = (state=[], action) =>{
    switch(action.type){
        case "SEND_CART" :
            console.log("reducer => action.payload =>" , action.payload);
            return [...state,action.payload] ;
        default :
            return state;
    }

}