import { configureStore } from "@reduxjs/toolkit";
import authReducer from './reducers/auth'
import uploadReducer from "./reducers/upload"

export const store = configureStore({
    reducer:{
        auth:authReducer,
        upload:uploadReducer
    }
});

export type RootState = ReturnType<typeof store.getState>
