import * as actionTasks from "../actionTypes";
import initialState from "../initalState.json";
export default function EducationReducer(state=initialState.educationSection,action) {
   switch(action.type){
       case actionTasks.UPDATE_EDUCATION:
           return {...action.payload}
        case actionTasks.ADD_EDUCATION:
            return action.payload
        default :return state;
   }
}
