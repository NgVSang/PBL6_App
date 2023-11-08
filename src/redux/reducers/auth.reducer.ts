import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ICredential, IUser} from '../../types';
import {RootState} from '../store';

export type AuthState = {
  loggedin: boolean;
  user?: IUser;
  credential?: ICredential;
  fcmToken?: string;
};

const initialState: AuthState = {
  loggedin: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    setCredential: (state, action: PayloadAction<ICredential>) => {
      state.loggedin = true;
      state.credential = action.payload;
    },
    setUser: (state, action: PayloadAction<IUser>) => {
      state.loggedin = true;
      state.user = action.payload;
    },
    logout: (state, action: PayloadAction) => {
      state.loggedin = false;
      state.user = undefined;
      state.credential = undefined;
    },
  },
});

export const authSelector = (state: RootState) => state.auth;

export const {logout, setCredential, setUser} = authSlice.actions;
export default authSlice.reducer;
