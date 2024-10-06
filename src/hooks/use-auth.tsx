import { useMemo } from 'react';
import {
    selectCurrentUser,
    selectIsAuthenticated,
} from '../redux/features/auth/authSlice';
import { useAppSelector } from '../redux/store';

const useAuth = () => {
    const isAuthenticated = useAppSelector(selectIsAuthenticated);
    const selectedUser = useAppSelector(selectCurrentUser);
    return useMemo(
        () => [isAuthenticated, selectedUser],
        [isAuthenticated, selectedUser]
    );
};
export { useAuth };
