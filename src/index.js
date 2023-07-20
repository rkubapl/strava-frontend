import * as React from "react";
import { createRoot } from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Home from "./Home";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBicycle, faPersonWalking } from '@fortawesome/free-solid-svg-icons';

library.add(faBicycle, faPersonWalking)

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    }
]);

createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);