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
import SearchResults from "../pages/SearchResults";
import Favorites from "../pages/Favorites";
import NotFound from "../pages/NotFound";

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
                path: 'my-list',
                Component: Favorites
            },
            {
                path: 'favourites',
                Component: Favorites
            },
            {
                path: ':category',
                Component: CategoryPage
            },
            {
                path: ':type/:id',
                Component: DetailsPage
            },
            {
                path: 'search/:query',
                Component: SearchResults
            },
            {
                path: '*',
                Component: NotFound
            }
        ]
    }
])

export default router;