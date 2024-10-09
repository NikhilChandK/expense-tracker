import { filter } from '../lib/helpers';

const PathEndpointConstants = {
    ROOT: '/',
    OVERVIEW: 'overview',
    ERROR: 'error',
    ANALYSIS: 'analysis',
    NOTIFICATIONS: 'notifications',
    SETTINGS: 'settings',
    LOGIN: 'login',
} as const;

const PathConstants = {
    ROOT: `${PathEndpointConstants.ROOT}`,
    OVERVIEW: `${PathEndpointConstants.OVERVIEW}`,
    ERROR: `/${PathEndpointConstants.ERROR}`,
    ANALYSIS: `/${PathEndpointConstants.ANALYSIS}`,
    NOTIFICATIONS: `/${PathEndpointConstants.NOTIFICATIONS}`,
    SETTINGS: `/${PathEndpointConstants.SETTINGS}`,
    LOGIN: `/${PathEndpointConstants.LOGIN}`,
} as const;

const ProtectedPathConstants = filter(
    PathConstants,
    (value) =>
        value === PathConstants.OVERVIEW ||
        value === PathConstants.ANALYSIS ||
        value === PathConstants.NOTIFICATIONS ||
        value === PathConstants.SETTINGS
);

const PrivatePathConstants = filter(
    PathConstants,
    (value) =>
        value === PathConstants.OVERVIEW ||
        value === PathConstants.ANALYSIS ||
        value === PathConstants.SETTINGS // Maybe only certain users can access settings
);

type Path = (typeof PathConstants)[keyof typeof PathConstants];

export {
    PathEndpointConstants,
    PathConstants,
    ProtectedPathConstants,
    PrivatePathConstants,
    type Path,
};
