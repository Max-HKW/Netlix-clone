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
import CategoryPage from "../pages/CategoryPage";

const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: 'preferiti',
                Component: Home
            },
            {
                path: ':category',
                Component: CategoryPage
            }
        ]
    }
])

export default router;