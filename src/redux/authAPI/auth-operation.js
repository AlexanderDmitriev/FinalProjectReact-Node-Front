import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast'

axios.defaults.baseURL = 'https://book-reader-43-back.herokuapp.com/api';
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk(
  '/auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/signup', credentials);
      token.set(data.token);
      toast.success(`Ви успішно зареєструвалися`);
      return data;
    } catch (error) {
      toast.error(`На жаль, реєстрація була неуспішною`);
      return rejectWithValue(error.message);
    }
  }
);

const logIn = createAsyncThunk(
  '/auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/login', credentials);
      token.set(data.token);
      toast.success(`Ласкаво просимо до BookReading`);
      return data;
    } catch (error) {
      toast.error(`Увійти до системи не вдалося. Спробуйте трохи пізніше`);
      return rejectWithValue(error.message);
    }
  }
);

const logOut = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('/users/logout');
      token.unset();
      toast.success(`Ви успішно вийшли з профілю`);
    } catch (error) {
      toast.error(`На жаль, вихід з профілю не був успішним. Спробуйте ще раз пізніше.`);
      return rejectWithValue(error.message);
    }
  }
);

const fetchCurrentUser = createAsyncThunk(
  '/auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      toast.error(`На жаль, не вдалося знайти такого користувача.`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const authOperations = {
  register,
  logIn,
  logOut,
  fetchCurrentUser,
};
export default authOperations;
