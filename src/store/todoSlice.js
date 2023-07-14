import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const todoSlice = createSlice({
  name: "todo",
  initialState: { todos: [] },
  reducers: {
    addTodo(state, action) {
      console.log(state);
      console.log(action);
      state.todos.push({
        id: nanoid(),
        text: action.payload.text,
        completed: false,
      });
    },
    romoveTodo(state, action) {},
    toggleTodoCompleted(state, action) {},
  },
});

export const { addTodo, romoveTodo, toggleTodoCompleted } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
