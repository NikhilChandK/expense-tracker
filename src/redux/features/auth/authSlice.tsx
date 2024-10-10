import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { User } from '../../../services/auth/auth';

const initialState = {
    username: null,
    jwtToken: null,
    refreshToken: null,
} as {
    username: null | User;
    jwtToken: string | null;
    refreshToken: string | null;
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: () => initialState,
        setCredentials: (state, { payload: { jwtToken, refreshToken } }) => {
            state.jwtToken = jwtToken;
            state.refreshToken = refreshToken;
        },
        setUser: (state, { payload: { name } }) => {
            state.username = name;
        },
    },
});

const { logout, setCredentials, setUser } = authSlice.actions;

const authReducer = authSlice.reducer;

const selectCurrentUser = (state: RootState) => state.auth.username;
const selectJwtToken = (state: RootState) => state.auth.jwtToken;
const selectRefreshToken = (state: RootState) => state.auth.refreshToken;

export {
    logout,
    setCredentials,
    setUser,
    authReducer,
    selectCurrentUser,
    selectJwtToken,
    selectRefreshToken,
};
