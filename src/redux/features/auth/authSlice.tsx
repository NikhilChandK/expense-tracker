import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { User } from '../../../services/auth/auth';

const initialState = {
    user: null,
    token: null,
    refreshToken: null,
    isAuthenticated: false,
} as {
    user: null | User;
    token: string | null;
    refreshToken: string | null;
    isAuthenticated: boolean;
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: () => initialState,
        setCredentials: (state, { payload }) => {
            state.token = payload.token;
            state.refreshToken = payload.refreshToken;
            state.user = payload.user;
            state.isAuthenticated = true;
        },
    },
});

const { logout, setCredentials } = authSlice.actions;

const auth = authSlice.reducer;

const selectIsAuthenticated = (state: RootState) => state.auth.isAuthenticated;
const selectCurrentUser = (state: RootState) => state.auth.user;

export {
    logout,
    setCredentials,
    auth,
    selectIsAuthenticated,
    selectCurrentUser,
};
