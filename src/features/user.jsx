import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  username: "",
  email: "",
  password: "",
  isLoggedIn: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState: { value: { initialStateValue } },
  reducers: {
    setLogin: (state, action) => {
      state.value.isLoggedIn = true;
      state.value.username = action.payload.username;
      state.value.email = action.payload.email;
      state.value.password = action.payload.password;
    },
  },
});

export const { setLogin } = userSlice.actions;

export default userSlice.reducer;
