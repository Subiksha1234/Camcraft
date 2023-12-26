import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name:'user',
    initialState: {value:{name:''}},
    reducers:{
        username:(state,action) =>{            
            state.value = action.payload
        }
    }
});

export const {username} = userSlice.actions;
export default userSlice.reducer;