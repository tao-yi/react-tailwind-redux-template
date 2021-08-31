import { createAsyncThunk } from "@reduxjs/toolkit";
import todoApi from "@src/api/todo";

// First, create the thunk
export const fetchTodoById = createAsyncThunk(
  "todos/fetchTodoById",
  async (todoId: number) => {
    const response = await todoApi.fetchById(todoId);
    return response.data;
  },
);

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const response = await todoApi.fetchAll();
  return response;
});
