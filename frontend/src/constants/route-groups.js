import { ROUTE_MAP } from "./routes";

export const AUTHENTICATED_ROUTES = [
    ROUTE_MAP.HOME,
    ROUTE_MAP.LOGOUT,
    ...Object.values(ROUTE_MAP.DASHBOARD),
]

export const UNAUTHENTICATED_ROUTES = [
    ROUTE_MAP.LOGIN,
    ROUTE_MAP.SIGNUP,
]