import { getCategory } from "../../../services/webServices";

export const CategoriesAction = () =>{
    return async dispatch =>{
        const{data} = await getCategory();
        await dispatch({type:"GET_CATEGORIES" , payload:data});
    }
}