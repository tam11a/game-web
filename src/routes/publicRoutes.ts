import { lazy } from "react";
import { ROUTES as PUBLIC_ROUTES } from "./paths";

export const publicRoutes = [
    {
        path: PUBLIC_ROUTES.HOME,
        Component: lazy(() => import("@pages/Home"))
    }
]