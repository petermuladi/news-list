
// This is a Redux slice for managing the state related to users.
// It defines the initial state and creates an extra reducer for handling the
// successful completion of the addToNewsLetter thunk, which updates the state
// with the action payload.

import { createSlice } from '@reduxjs/toolkit';
import { addToNewsLetter } from '../Thunks/FetchNewsLetter';

// Default State is Required!
const initialState = {

  action: {}

};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {

    builder
       //Result with payload
      .addCase(addToNewsLetter.fulfilled, (state, action) => {
        state.action = action.payload;

      });
  }
});
export default usersSlice.reducer