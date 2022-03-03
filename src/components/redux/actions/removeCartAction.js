
export const RemoveCartAction = (data) =>{
    return async dispatch =>{
        await dispatch({type:"REMOVE_CART" , payload:data});
    }
}