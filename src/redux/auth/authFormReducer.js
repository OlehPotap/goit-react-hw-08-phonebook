import { createReducer } from '@reduxjs/toolkit';
import { register } from "./authFormOperations";
import { login } from "./authFormOperations";

const initialState = {
    user: {name: null, email: null},
    token: null,
    isLogedIn: false
};

export const RegisterReducer = createReducer(initialState, {
    [register.fulfilled]: (state, {payload}) => {
        console.log(state.user)
        state.user = payload.user;
        state.token = payload.token;
        state.isLogedIn = true;
}})

export const LoginReducer = createReducer(initialState, {
    [login.fulfilled]: (state, {payload}) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLogedIn = true;
}})