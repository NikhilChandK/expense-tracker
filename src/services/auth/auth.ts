import { api } from '../api';
import { endpoints } from '../endpoints';
import { setCredentials, setUser } from '../../redux/features/auth/authSlice';
import { DecodeToken } from '../../lib/token-helpers';

export interface User {
    username: string;
}

export const authApi = api.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<
            { jwtToken: string; refreshToken: string },
            any
        >({
            query: (credentials: any) => ({
                url: endpoints.LOGIN,
                method: 'POST',
                body: credentials,
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    // Store the token and refresh token in the state
                    dispatch(
                        setCredentials({
                            jwtToken: data.jwtToken, // Updated to match API response
                            refreshToken: data.refreshToken,
                        })
                    );
                    // Store user details by decoding token
                    dispatch(setUser(DecodeToken(data.jwtToken))); // Ensure DecodeToken works as expected
                } catch (error) {
                    console.error('Login error:', error); // Log any errors that occur
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
