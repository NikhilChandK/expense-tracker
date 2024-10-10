import { useMemo } from 'react';
import {
    selectCurrentUser,
    selectJwtToken,
    selectRefreshToken,
} from '../redux/features/auth/authSlice';
import { useAppSelector } from '../redux/store';

const useAuth = () => {
    const selectedUser = useAppSelector(selectCurrentUser);
    const jwtToken = useAppSelector(selectJwtToken);
    const refreshToken = useAppSelector(selectRefreshToken);

    return useMemo(
        () => [selectedUser, jwtToken, refreshToken],
        [selectedUser, jwtToken, refreshToken]
    );
};
export { useAuth };
