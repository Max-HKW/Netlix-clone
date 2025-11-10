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
import DetailsPage from "../pages/DetailsPage";

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
            },
            {
                path: ':type/:id',
                Component: DetailsPage
            }
        ]
    }
])

export default router;