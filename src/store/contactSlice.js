import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contactList: [],
  keyword: ''
}

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    addItem(state, action) {
      state.contactList.push({
        id: Date.now(),
        name: action.payload.name,
        phone: action.payload.phone,
        img: action.payload.img
      })
    },
    removeItem(state, action) {
      let removeList = state.contactList.filter(item => item.id !== action.payload);
      state.contactList = removeList;
    },
    searchItem(state, action) {
      state.keyword = action.payload;
    }
  }
})

export const { addItem, removeItem, searchItem } = contactSlice.actions;
export default contactSlice.reducer;