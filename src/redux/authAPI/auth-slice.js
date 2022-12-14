import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operation';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setGoogleData(state, { payload }) {
      state.user = {
        name: payload.name,
        email: payload.email,
      };
      state.token = payload.token;
      state.isLoggedIn = true;
    },
  },
  extraReducers: {
    [authOperations.register.fulfilled](state, action) {
      state.user = {
        name: action.payload.name,
        email: action.payload.email,
      };
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.logIn.fulfilled](state, action) {
      state.user = {
        name: action.payload.name,
        email: action.payload.email,
      };
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [authOperations.fetchCurrentUser.pending](state) {
      state.isFetchingCurrentUser = true;
    },
    [authOperations.fetchCurrentUser.fulfilled](state, action) {
      state.user = {
        name: action.payload.name,
        email: action.payload.email,
      };
      state.isLoggedIn = true;
      state.isFetchingCurrentUser = false;
    },
    [authOperations.fetchCurrentUser.rejected](state) {
      state.isFetchingCurrentUser = false;
    },
  },
});

export default authSlice;
export const { setGoogleData } = authSlice.actions;
