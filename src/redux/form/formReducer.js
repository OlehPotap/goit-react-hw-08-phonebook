
import { createReducer } from '@reduxjs/toolkit';
import { getContactsList, postContactsList, delContactsList } from './formOperations';

export const formReducer = createReducer([], {
  [getContactsList.fulfilled]: (state, {payload})=> {
   return [...state, ...payload]},

   [postContactsList.fulfilled]: (state, {payload}) => {
    return [...state, payload]},

   [delContactsList.fulfilled]: (state, {payload}) => {
    return [...state].filter((el)=>{return el.id !== payload})},
})

export const loading = createReducer(false,
  {
  })

// export default formReducer;

