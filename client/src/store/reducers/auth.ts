import {createSlice} from "@reduxjs/toolkit";

const authSlice = createSlice({
    name:'auth',
    initialState:{
        signInModal:false,
        signUpModal:false,
        user:null
    },
    reducers:{
        signInModalState:(state,action)=>{
            state.signInModal = action.payload;
        },
        signUpModalState:(state,action)=>{
            state.signUpModal = action.payload;
        },
        setUser:(state,action)=>{
            state.user=action.payload;
        }
        
    }
})

export const {signInModalState, signUpModalState, setUser} = authSlice.actions;
export default authSlice.reducer;