
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/* -------------------------------------------------------------------------- */
/*                    Define the type for user credentials                    */
/* -------------------------------------------------------------------------- */
interface UserCredentials {
  username: string;
  password: string;
}
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                          Define the initial state                          */
/* -------------------------------------------------------------------------- */
const initialState: UserCredentials = {
  username: '',
  password: '',
};
/* -------------------------------------------------------------------------- */

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<UserCredentials>) => {
      // This reducer function will update the user credentials
      state.username = action.payload.username;
      state.password = action.payload.password;
    },
    // Add more reducer functions as needed
  },
});

export const { actions, reducer } = authSlice;
export default reducer;
