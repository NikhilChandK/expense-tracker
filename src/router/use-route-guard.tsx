import { useLocation } from 'react-router-dom';
import {
    Path,
    PrivatePathConstants,
    ProtectedPathConstants,
} from './constants';
import { useMemo } from 'react';

const useRouteGaurd = (): [
    string,
    string,
    { from: string },
    boolean,
    boolean,
] => {
    const location = useLocation();

    const path = location.pathname;
    const search = location.search;
    const state = location.state;

    const protectedRoute = useMemo(
        () => CheckForProtectedPath(path as Path),
        [path]
    );

    const privateRoute = useMemo(
        () => CheckForPrivatePath(path as Path),
        [path]
    );

    return [path, search, state, protectedRoute, privateRoute];
};

const CheckForProtectedPath = (path: Path): boolean =>
    Object.values(ProtectedPathConstants).includes(path);

const CheckForPrivatePath = (path: Path): boolean =>
    Object.values(PrivatePathConstants).includes(path);

export { useRouteGaurd };
