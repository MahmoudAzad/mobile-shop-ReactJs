export const CartReducer = (state=[], action) =>{
    switch(action.type){
        case "SEND_CART" :
            const product = state.find(item => item.id === action.payload.id);
            if(product){
                product.quantify +=1;
                const products = state.filter(item => item.id !== action.payload.id);
                return [...products,product];
            }
            console.log("reducer => action.payload =>" , action.payload);

            action.payload.quantify =1;
            return [...state,action.payload] ;

            case "REMOVE_CART" :
                return state.filter(item => item.id !== action.payload.id);
        default :
            return state;
    }

}