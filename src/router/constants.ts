const PathEndpointConstants = {
  ROOT: "/",
  OVERVIEW: "overview",
  ERROR: "error",
  ANALYSIS: "analysis",
  NOTIFICATIONS: "notifications",
  SETTINGS: "settings",
} as const;

const PathConstants = {
  ROOT: `${PathEndpointConstants.ROOT}`,
  OVERVIEW: `${PathEndpointConstants.OVERVIEW}`,
  ERROR: `/${PathEndpointConstants.ANALYSIS}`,
  ANALYSIS: `/${PathEndpointConstants.ERROR}`,
  NOTIFICATIONS: `/${PathEndpointConstants.NOTIFICATIONS}`,
  SETTINGS: `/${PathEndpointConstants.SETTINGS}`,
} as const;

export { PathEndpointConstants, PathConstants };
