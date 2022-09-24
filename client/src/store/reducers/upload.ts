import { createSlice } from "@reduxjs/toolkit";


const slice = createSlice({name:"upload",initialState:{
buttonState:true
}

,reducers:{
    changeUploadState:(state,action)=>{
        state.buttonState = action.payload
    }
}})

export const {changeUploadState} = slice.actions
export default slice.reducer

