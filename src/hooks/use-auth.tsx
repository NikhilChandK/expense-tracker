import { useMemo } from 'react';
import {
    selectCurrentUser,
    selectIsAuthenticated,
    selectJwtToken,
    selectRefreshToken,
} from '../redux/features/auth/authSlice';
import { useAppSelector } from '../redux/store';

const useAuth = () => {
    const isAuthenticated = useAppSelector(selectIsAuthenticated);
    const selectedUser = useAppSelector(selectCurrentUser);
    const jwtToken = useAppSelector(selectJwtToken);
    const refreshToken = useAppSelector(selectRefreshToken);

    return useMemo(
        () => [isAuthenticated, selectedUser, jwtToken, refreshToken],
        [isAuthenticated, selectedUser, jwtToken, refreshToken]
    );
};
export { useAuth };
