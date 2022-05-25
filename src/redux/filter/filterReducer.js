import {changeFilterValue} from './filterAction'
import { createReducer } from '@reduxjs/toolkit';

const InitialState = ''

const filterReducer = createReducer(InitialState, {
    [changeFilterValue]: (state, action) =>  {
        return action.payload
    }
})

export default filterReducer;

