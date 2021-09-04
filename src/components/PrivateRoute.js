import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isLoaded, isEmpty } from "react-redux-firebase";
import { connect } from "react-redux";
// import { useSelector } from "react-redux";
const PrivateRoute=(props)=>{
    let auth=props.auth;
    let Component=props.component;
    console.log(props)
    console.log(props.auth.uid);
    return(
        <Route

        render={({props})=>{
            return (auth.uid ?
                <Component {...props}></Component>
                :<Redirect {...props} to="/"></Redirect>
                )
        }}
        ></Route>
    )
}
const mapStateToProps=(state)=>{
    return {auth:state.firebase.auth}

}
export default connect(mapStateToProps)(PrivateRoute);