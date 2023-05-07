import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allMessages: [],
  readMessages: [],
  favoriteMsgs: [],
  deleteMsgs: [],
};

export const viewSelectedMsg = createSlice({
  name: "selectedMsg",
  initialState,
  reducers: {
    allMsg: (state, action) => {
      state.allMessages = action.payload;
    },
    viewMsgs: (state, action) => {
      state.readMessages = action.payload;
    },
    addFavorites: (state, action) => {
      state.favoriteMsgs = [...state.favoriteMsgs, action.payload];
    },
    deleteMsg: (state, action) => {
      state.favoriteMsgs = [...state.favoriteMsgs, action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { viewMsgs,addFavorites,allMsg } = viewSelectedMsg.actions;

export default viewSelectedMsg.reducer;
