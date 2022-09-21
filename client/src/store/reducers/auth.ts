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
        }
        
    }
})

export const {signInModalState} = authSlice.actions;
export default authSlice.reducer;