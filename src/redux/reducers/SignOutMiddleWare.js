
import * as actionTypes from "../actionTypes";

export const signout =()=>{
    return async (dispatch, getState, {getFirebase,getFirestore})=>{
        console.log("signout ");
        try{
            const firebase=getFirebase();
            await firebase.auth().signOut();
            dispatch({
                type:actionTypes.SIGN_OUT_SUCCESS
            })
        }
        catch(err){
           dispatch({
               type:actionTypes.SIGN_OUT_FAILED,
               payload:err
           })

        }
        
    }
}

