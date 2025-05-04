import { createSlice } from "@reduxjs/toolkit";
function getRandomHexColor() {
  const hex = Math.floor(Math.random() * 0xffffff).toString(16);
  return `#${hex.padStart(6, "0")}`;
}
// #fdfdfdf

const buttonColorsSlice = createSlice({
  name: "buttonColors",
  initialState: {
    color: "#FF0000",
  },
  reducers: {
    changeColor: (state) => {
      state.color = getRandomHexColor();
      return state;
    },
  },
});

export default buttonColorsSlice.reducer;

export const { changeColor } = buttonColorsSlice.actions;
