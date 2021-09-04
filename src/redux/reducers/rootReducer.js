import { combineReducers } from "redux";
import contactReducer from "./contactReducer";
import documentReducer from "./documentReducer";
import EducationReducer from "./EducationReducer";
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from "react-redux-firebase";
import authReducer from "./authReducer";
import signupReducer from "./signupReducer";
import signOutReducer from "./signOutReducer";

const rootReducer =combineReducers({
    document:documentReducer,
    contact:contactReducer,
    education:EducationReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    auth:authReducer,
    signupReducer:signupReducer,
    signOutReducer:signOutReducer
})
export default rootReducer;