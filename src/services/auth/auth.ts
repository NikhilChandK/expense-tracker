import { retry } from '@reduxjs/toolkit/query';
import { api } from '../api';
import { endpoints } from '../endpoints';
import { setCredentials } from '../../redux/features/auth/authSlice';

export interface User {
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
}

export const authApi = api.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<{ jwtToken: string; user: User }, any>({
            query: (credentials: any) => ({
                url: endpoints.LOGIN,
                method: 'POST',
                body: credentials,
            }),
            extraOptions: {
                backoff: () => {
                    // We intentionally error once on login, and this breaks out of retrying. The next login attempt will succeed.
                    retry.fail({ fake: 'error' });
                },
            },
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    // Store the token and refresh token in the state
                    dispatch(setCredentials(data));
                } catch (error) {
                    // Handle login errors here
                }
            },
        }),
        refresh: builder.mutation({
            query: () => ({
                url: endpoints.REFRESH,
                method: 'POST',
            }),
        }),
    }),
});

export const { useLoginMutation, useRefreshMutation } = authApi;
