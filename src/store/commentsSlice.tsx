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
      console.log('action payload', action.payload);
      state.comments = action.payload;
    }
  },
});

export const { addComment } = commentsSlice.actions;
export default commentsSlice.reducer;