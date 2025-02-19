import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ArticlesListPage from "./pages/ArticlesListPage";
import ArticlePage, { loader as articleLoader } from "./pages/ArticlePage";
import NotFoundPage from "./pages/NotFoundPage";
import LoginPage from "./pages/LoginPage";
import CreateAccountPage from "./pages/CreateAccountPage";

/*
 ** Using the React Router components to set our routes and our router
 ** Layout is displayed on all the routes.
 ** Also, whatever page matches the URL path from the children, will be rendered in the Outlet of the Layout component.
 ** errorElement --> serves for 404 not found page in case of wrong path (path with no corresponding page) even under /articles/wrong-article-name
 */
const routes = [
    {
        path: "/",
        element: <Layout />,
        errorElement: <NotFoundPage />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "/about",
                element: <AboutPage />,
            },
            {
                path: "/articles",
                element: <ArticlesListPage />,
            },
            {
                path: "/articles/:name",
                element: <ArticlePage />,
                // loader function for frontend-backend connection.
                // Defined in the component's file.
                loader: articleLoader,
            },
            // paths for log-in and sign-up
            {
                path: "/login",
                element: <LoginPage />,
            },
            {
                path: "/create-account",
                element: <CreateAccountPage />,
            },
        ],
    },
];

const router = createBrowserRouter(routes);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
