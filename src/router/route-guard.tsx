import { Navigate, Outlet } from 'react-router-dom';
import { PathConstants } from './constants';
import { useRouteGaurd } from './use-route-guard';
import { useAuth } from '../hooks/use-auth';
import { ReactElement } from 'react';

const RouteGuard = (): ReactElement => {
    const [, jwtToken, refreshToken] = useAuth();
    const [path, search, , protectedRoute, privateRoute] = useRouteGaurd();
    const locationRelativePath = `${path}${search}`;
    const privateRouteWithNotokens = privateRoute && !jwtToken && !refreshToken;
    // If the route is private and there are no tokens, redirect to ROOT
    if (privateRouteWithNotokens) {
        return (
            <Navigate
                to={PathConstants.ROOT}
                state={{ from: locationRelativePath }}
                replace={true}
            />
        );
    }
    // If the route is protected and the user is authenticated, redirect to the original location
    if (protectedRoute && jwtToken) {
        return <Navigate to={locationRelativePath} replace={true} />;
    }
    /// In all other cases (public route, protected route but not logged in), render the child routes
    return <Outlet />;
};
export { RouteGuard };
