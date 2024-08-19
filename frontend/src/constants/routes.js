export const ROUTE_MAP = {
    // Authentication
    LOGIN: "/",
    SIGNUP: "/signup",
    LOGOUT: "/logout",

    // Main pages
    HOME: "/home",

    // Project related
    DASHBOARD: {
        PROJECT: "/project/:id",
        PROJECT_DASHBOARD: "/project/:id/podcast-widget",
        CREATE_PROJECT: "/project/:id/create-podcast",
        PROJECT_SETTINGS: "/project/:id/settings",
        ADD_PODCAST: "/project/:id/add-podcast",
        UPGRADE: "/project/:id/upgrade",
        PROJECT_HELP: "/project/:id/help",
    },

    // Error pages
    NOT_FOUND: "/404",
    SERVER_ERROR: "/500",
}