import * as actionTypes from "../actionTypes";
export const signUpSuccess=(user)=>{
    return{
        type:actionTypes.SIGN_UP_SUCCESS
    }
}

export const signUpFailed=(err)=>{
    return{
        type:actionTypes.SIGN_UP_FAILED,
        payload:err
    
    }
};
// why we made  these function(above) ||
export const signup=(userData)=>{
    console.log("signupMiddleWare");
    console.log(userData);
    return async(dispatch, getState, {getFirebase,getFirestore})=>{
        console.log("signupMiddleWare line 19")
        // dispatch({
        //     type:actionTypes.SIGN_UP_REQUEST
        // })
        //try catch inside if else , good idea..??
        const firebase = getFirebase();    
        try{
            if(userData.password!=userData.passwordConfirm){
                dispatch({
                    type:actionTypes.SIGN_UP_FAILED,
                    payload:"passwords don't match"
                })
                return;
            }
            console.log("signupMiddleWare trying...",firebase.auth)
            await firebase.auth().createUserWithEmailAndPassword(userData.email,userData.password);
            dispatch({
                type:actionTypes.SIGN_UP_SUCCESS
            })
        }catch(err){
            dispatch({
                type:actionTypes.SIGN_UP_FAILED,
                error:err
            })
        }
    }
}