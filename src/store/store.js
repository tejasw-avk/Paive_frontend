// src/store/store.js
import { configureStore } from "@reduxjs/toolkit";
import forgotPasswordReducer from "../redux/forgotPasswordSlice"
import { forgotPassword } from "../redux/forgotPasswordSlice";
import createApplicationReducer from "../redux/createApplicationSlice"
/*
import { combineReducers } from "redux";
 
// Initial State for Login
const initialLoginState = {
  user: null,
  token: null,
  loading: false,
  error: null,
};
 
// Login Reducer
const loginReducer = (state = initialLoginState, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return { ...state, loading: true, error: null };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        loading: false,
      };
    case "LOGIN_FAILURE":
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};
 
// Add any other reducers here
const rootReducer = combineReducers({
  login: loginReducer,
});
*/ 
const store = configureStore({ 
  reducer:{forgotPassword: forgotPasswordReducer,
           createApplication: createApplicationReducer
  } });
 
export default store;