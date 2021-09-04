import * as actionTasks from "../actionTypes";
import initialState from "../initalState.json";
export default function documentReducer(state=initialState,action){
    switch(action.type){
        case actionTasks.SET_SKIN:
            return action.payload
        case actionTasks.UPDATE_SKIN:
            return{
                id:state.id,
                skinCd:action.payload
            }
            default :
            return state;
    }
}
