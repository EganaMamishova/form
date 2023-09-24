import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name:"counter",
    initialState:{
      todo:"",
      todos:[]
    },
    reducers:{
     inputValue:(state, action)=>{
        state.todo = action.payload
     },
     todosMap:(state,action)=>{
        state.todos = [...state.todos, state.todo]
     }
    }
})
export const { inputValue, todosMap} = counterSlice.actions;
export default counterSlice.reducer