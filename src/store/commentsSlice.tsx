import InitialState, { AddCommentAction } from './types/comments';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: InitialState = {
    comments: [],
};

export const commentsSlice = createSlice({
  name: AddCommentAction,
  initialState: initialState,
  reducers: {
    addComment: (state, action: PayloadAction<any>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      console.log('action payload', action.payload);
      state.comments = action.payload;
    }
  },
});

// Action creators are generated for each case reducer function
export const { addComment } = commentsSlice.actions;
// You must export the reducer as follows for it to be able to be read by the store.
export default commentsSlice.reducer;