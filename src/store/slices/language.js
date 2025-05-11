import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
  name: "language",
  initialState: {
    currentLang: "en",
    availableLangs: ["en", "ar"],
  },
  reducers: {
    updateCurrentLang: (state, action) => {
      state.currentLang = action.payload;
    },
  },
});

export const { updateCurrentLang } = languageSlice.actions;
export default languageSlice.reducer;
