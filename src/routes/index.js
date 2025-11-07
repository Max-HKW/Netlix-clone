/**
 * Node modules
 */
import { createBrowserRouter } from "react-router";

/**
 * Components
 */
import RootLayout from "../components/layout/RootLayout";

/**
 * Pages
 */
import Home from "../pages/Home";

const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home
            }
        ]
    }
])

export default router;