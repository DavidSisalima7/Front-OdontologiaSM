import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { Dispatch } from '../../store';

export interface Login {
  email: string;
  password: string;
}
export interface AuthState {
  accessToken: string | null;
}
const initialState: AuthState = {
  accessToken: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Funciones que retornan un objeto
    setAccessToken: (state, action: PayloadAction<string | null>) => {
      state.accessToken = action.payload;
    }
  }
});

export const { setAccessToken } = authSlice.actions;
export default authSlice.reducer;

export const login = async (
  data: Login,
  dispatch: Dispatch
): Promise<AxiosResponse | AxiosError> => {
  try {
    const response: AxiosResponse = await axios.post('/login', data);
    dispatch(setAccessToken(response.data.token));
    return response;
  } catch (error) {
    return error as AxiosError;
  }
};
