import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
   name: "counter",
   initialState: {
      todo: "",
      todos: [],
      allValue: {},
      name: "",
      surname: "",
      fatherName: "",
      mail: "",
      field: "",
      motivation: "",
      gender: "",
      dataDelete: [],
      show: false,

   },
   reducers: {
      inputValue: (state, action) => {
         //   state.todo = action.payload
         console.log(action.payload);
      },
      todosMap: (state, action) => {
         state.todos = [...state.todos, state.allValue]
      },
      addId: (state, action) => {
         state.allValue = {
            id: Math.floor(Math.random() * 1000),
            value: state.todo,
            completed: false,
            name: state.name,
            surname: state.surname,
            fatherName: state.fatherName,
            mail: state.mail,
            field: state.field,
            motivation: state.motivation,
            gender: state.gender
         }
      },
      name: (state, action) => {
         state.name = action.payload
      },
      surname: (state, action) => {
         state.surname = action.payload
      },
      fatherName: (state, action) => {
         state.fatherName = action.payload
      },
      mail: (state, action) => {
         state.mail = action.payload
      },
      field: (state, action) => {
         state.field = action.payload
      },
      motivation: (state, action) => {
         state.motivation = action.payload
      },
      gender: (state, action) => {
         state.gender = action.payload
      },
      contactDelete: (state, action) => {
         state.todos = state.todos.filter(item => item.id !== action.payload)
      },
      showModal: (state, action) => {
         state.todos = state.todos.map((i) => {
            if(i.id === action.payload){
               state.show = !state.show
               console.log(i.id, action.payload);
            }
            return i;
         })
      },
      hideModal: (state, action) => {
         state.show = !state.show
      }

   }
})
export const { inputValue, todosMap, addId, name, surname, mail, fatherName, field, motivation, gender, contactDelete, showModal, hideModal } = counterSlice.actions;
export default counterSlice.reducer