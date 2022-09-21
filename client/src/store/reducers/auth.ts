import {createSlice} from "@reduxjs/toolkit";

const authSlice = createSlice({
    name:'auth',
    initialState:{
        signInModal:false,
        signUpModal:false,
    },
    reducers:{
        signInModalState:(state,action)=>{
            state.signInModal = action.payload;
        },
        signUpModalState:(state,action)=>{
            state.signUpModal = action.payload;
        },
        
    }
})

export const {signInModalState, signUpModalState} = authSlice.actions;
export default authSlice.reducer;