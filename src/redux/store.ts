import { configureStore, ConfigureStoreOptions } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { useDispatch, useSelector } from 'react-redux';
import { api } from '../services/api';
import { authReducer } from './features/auth/authSlice';
// The store setup is wrapped in `createStore` to allow reuse
// when setting up tests that need the same store config
export const createStore = (
    options?: ConfigureStoreOptions['preloadedState'] | undefined
) => {
    const store = configureStore({
        reducer: {
            [api.reducerPath]: api.reducer,
            auth: authReducer,
        },
        // Adding the api middleware enables caching, invalidation, polling,
        // and other useful features of `rtk-query`.
        middleware: (getDefaultMiddleware) => {
            return getDefaultMiddleware().concat(api.middleware);
        },
        ...options,
    });
    // configure listeners using the provided defaults
    // optional, but required for `refetchOnFocus`/`refetchOnReconnect` behaviors
    setupListeners(store.dispatch);
    return store;
};

const store = createStore();

export type RootState = ReturnType<typeof store.getState>;
// Infer the type of `store`
export type AppStore = typeof store;
// Infer the `AppDispatch` type from the store itself
export type AppDispatch = typeof store.dispatch;

const useAppDispatch = useDispatch.withTypes<AppDispatch>();
const useAppSelector = useSelector.withTypes<RootState>();

export { store, useAppDispatch, useAppSelector };
