import * as actionTypes from "../actionTypes";
import initialState from "../initalState.json";

function signOutReducer(state=initialState.auth,action) {
    console.log(action)
    switch(action.type){
        case actionTypes.SIGN_OUT_FAILED:
            return{
                ErrorMessage:action.payload,
                loading:false
            }
        case actionTypes.SIGN_OUT_SUCCESS:
            return{
                loading:false,
                ErrorMessage:""
            }
        default : return state;
    }   
} 

export default signOutReducer;




