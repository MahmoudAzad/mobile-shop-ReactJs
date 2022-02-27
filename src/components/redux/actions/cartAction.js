
export const CartAction = (data) =>{
    console.log("Action data iss =>" , data);
    return async dispatch =>{
        await dispatch({type:"SEND_CART" , payload:data});
    }
}