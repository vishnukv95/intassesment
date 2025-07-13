import { configureStore } from "@reduxjs/toolkit";
import studentReducer from '../features/StudentSlice'

export const store = configureStore({
    reducer:{
          students: studentReducer
    }
})