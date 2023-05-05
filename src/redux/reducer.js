// import { combineReducers } from "redux";

import { combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "redux/auth/auth-slice";
import { contactsReducer } from "./contacts/slice";


export const reducer = combineReducers({
  contacts: contactsReducer,
  auth: authReducer
})