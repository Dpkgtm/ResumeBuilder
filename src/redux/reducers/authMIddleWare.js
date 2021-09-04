// import { getFirebase } from "react-redux-firebase";
import * as actionTypes from "../actionTypes";
export const signInSucess=(users)=>{
    return {
        type:actionTypes.SIGN_IN_SUCCESS,
       
    }
}

//thunk
export const singInFailed=(err)=>{
    return {
        type:actionTypes.SIGN_IN_FAILED,
        payload:err
    }
}

//thunk
export const signIn=(userData)=>{
    return async (dispatch,getState,{getFirebase,getFirestore})=>{
        dispatch({
            type:actionTypes.SIGN_IN_REQUEST
        })
    const firebase=getFirebase();
    try{
        console.log(userData);
        let data=await firebase.auth().signInWithEmailAndPassword(userData.email,userData.password);

        dispatch({
            type:actionTypes.SIGN_IN_SUCCESS
        })
    }catch(err){

        dispatch({
            type:actionTypes.SIGN_IN_FAILED,
            error:err
        })
        setTimeout(()=>{
            dispatch({
                type:actionTypes.REMOVE_ERROR
            })
        },2000)
    }  
    }
}

