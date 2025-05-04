import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
  name: "language",
  initialState: {
    language: "francais",
  },
  reducers: {
    changeToArabic: (state) => {
      state.language = "arabic";
      return state;
    },
    changeToItalien: (state) => {
      state.language = "italien ";
      return state;
    },
  },
});

// au momrn fde l'exppoty on considere reducers comme un seul reducer
export default languageSlice.reducer;

export const { changeToArabic, changeToItalien } = languageSlice.actions;
/*

one xporte deux chose (export default languageSlicereducer) et les actions

==> languageSlice.reducer pour declarer sa existance chez store.s

==> languageSlice.actions; on va les uiliser dans les composant react js 
*/

class Converter {
  constructor({ name: name }) {
    this.esmek = name;
  }
}

let hichem = new Converter({ name: "hichem" });

console.log(hichem);
