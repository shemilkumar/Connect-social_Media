import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  name: string;
  email: string;
}

export interface UserInitialState {
  user: User;
}

const initialState: UserInitialState = {
  user: {
    name: "",
    email: "",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state: UserInitialState, action: PayloadAction<User>) => {
      state.user = action.payload;
    },

    deleteUserData: (state: UserInitialState) => {
      state.user = initialState.user;
    },
  },
});

export const { setUserData, deleteUserData } = userSlice.actions;

export default userSlice.reducer;
