import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@src/redux/store";
import { fetchTodoById, fetchTodos } from "@src/redux/todos.thunk";

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface TodoState {
  value: Todo[];
  status: "idle" | "loading" | "failed";
}

const initialState: TodoState = {
  status: "idle",
  value: [],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodoById.fulfilled, (state, action) => {
        state.status = "idle";
        state.value.push(action.payload);
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = "idle";
        state.value = action.payload;
      });
  },
});

// Action creators are generated for each case reducer function
// export const {} = todoSlice.actions;

export const selectTodos = (state: RootState) => state.todos.value;

export default todoSlice.reducer;
