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

export { PathEndpointConstants, PathConstants };
