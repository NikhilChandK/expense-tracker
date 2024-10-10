import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';
import { RootState } from '../redux/store';
import { endpoints } from './endpoints';
import { logout, setCredentials } from '../redux/features/auth/authSlice';

// Create our baseQuery instance
const baseQuery = fetchBaseQuery({
    baseUrl: '/',
    prepareHeaders: (headers, { getState }) => {
        // By default, if we have a token in the store, let's use that for authenticated requests
        const token = (getState() as RootState).auth.jwtToken;
        if (token) {
            headers.set('authentication', `Bearer ${token}`);
        }
        return headers;
    },
});
const baseQueryWithReauth: typeof baseQuery = async (
    args,
    api,
    extraOptions
) => {
    let result = await baseQuery(args, api, extraOptions);

    if (result?.error?.status === 401) {
        // Token has expired or unauthorized, try to refresh the token
        const refreshResult = await baseQuery(
            endpoints.REFRESH,
            api,
            extraOptions
        );
        if (refreshResult?.data) {
            // Store the new token
            api.dispatch(setCredentials(refreshResult.data));
            // Retry the original query with the new token
            result = await baseQuery(args, api, extraOptions);
        } else {
            // Refresh token failed, log out
            api.dispatch(logout());
        }
    }

    return result;
};
const baseQueryWithRetry = retry(baseQueryWithReauth, { maxRetries: 6 });

/**
 * Create a base API to inject endpoints into elsewhere.
 * Components using this API should import from the injected site,
 * in order to get the appropriate types,
 * and to ensure that the file injecting the endpoints is loaded
 */
export const api = createApi({
    /**
     * `reducerPath` is optional and will not be required by most users.
     * This is useful if you have multiple API definitions,
     * e.g. where each has a different domain, with no interaction between endpoints.
     * Otherwise, a single API definition should be used in order to support tag invalidation,
     * among other features
     */
    reducerPath: 'splitApi',
    /**
     * A bare bones base query would just be `baseQuery: fetchBaseQuery({ baseUrl: '/' })`
     */
    baseQuery: baseQueryWithRetry,
    /**
     * Tag types must be defined in the original API definition
     * for any tags that would be provided by injected endpoints
     */
    tagTypes: [],
    /**
     * This api has endpoints injected in adjacent files,
     * which is why no endpoints are shown below.
     * If you want all endpoints defined in the same file, they could be included here instead
     */
    endpoints: () => ({}),
});

export const enhancedApi = api.enhanceEndpoints({
    endpoints: () => ({
        getPost: () => 'test',
    }),
});
