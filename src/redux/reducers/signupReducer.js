import * as actionTypes from "../actionTypes";
import initialState from "../initalState.json";


function signupReducer(state=initialState.auth,action) {
    console.log("state=>",state, "action=>",action)
    switch(action.type){
        case actionTypes.SIGN_UP_FAILED:
            return{
                ErrorMessage:action.payload,
                loading:false
            }
        case actionTypes.SIGN_UP_REQUEST:
            return {
                ErrorMessage:"",
                loading:true
            }
        case actionTypes.SIGN_UP_SUCCESS:
            return{
                loading:false,
                ErrorMessage:""
            }
        case actionTypes.REMOVE_ERROR:
            return {
                loading:false,
                ErrorMessage:""
            }
        default : return state;
    }   
} 

export default signupReducer;
