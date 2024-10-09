import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { User } from '../../../services/auth/auth';

const initialState = {
    user: null,
    jwtToken: null,
    refreshToken: null,
    isAuthenticated: true,
} as {
    user: null | User;
    jwtToken: string | null;
    refreshToken: string | null;
    isAuthenticated: boolean;
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: () => initialState,
        setCredentials: (state, { payload }) => {
            state.jwtToken = payload.jwtToken;
            state.refreshToken = payload.refreshToken;
            state.user = payload.user;
            state.isAuthenticated = false;
        },
    },
});

const { logout, setCredentials } = authSlice.actions;

const authReducer = authSlice.reducer;

const selectCurrentUser = (state: RootState) => state.auth.user;
const selectIsAuthenticated = (state: RootState) => state.auth.isAuthenticated;
const selectJwtToken = (state: RootState) => state.auth.jwtToken;
const selectRefreshToken = (state: RootState) => state.auth.refreshToken;

export {
    logout,
    setCredentials,
    authReducer,
    selectCurrentUser,
    selectIsAuthenticated,
    selectJwtToken,
    selectRefreshToken,
};
