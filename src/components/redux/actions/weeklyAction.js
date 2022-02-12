import { getWeekly } from "../../../services/webServices"

export const WeeklyAction = () =>{
    return async dispatch =>{
        const{data} = await getWeekly();
        await dispatch({type:"GET_WEEKLY" , payload:data});
    }
}