import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toDos: [],
};

const todoSlice = createSlice({
  name: "Todo",
  initialState,
  reducers:{}
});

export default todoSlice.reducer ;