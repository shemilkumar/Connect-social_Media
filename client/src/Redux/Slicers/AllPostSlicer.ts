import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface initialStateProps {
  allPosts: [];
  isLoading: boolean;
}

const initialState: initialStateProps = {
  allPosts: [],
  isLoading: false,
};

const allPostSlice = createSlice({
  name: "allPosts",
  initialState,
  reducers: {
    fetchAllPosts: (state: initialStateProps) => {
      // state.allPosts = data;
      // state.isLoading = isLoading;
    },
  },
});

export const { fetchAllPosts } = allPostSlice.actions;
export default allPostSlice.reducer;
