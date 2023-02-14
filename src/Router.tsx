import { createBrowserRouter } from "react-router-dom";
import AboutPage from "./pages/AboutPage/AboutPage";
import BlogsPage from "./pages/BlogsPage/BlogsPage";
import BlogViewPage from "./pages/BlogViewPage/BlogViewPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import DocumentationPage from "./Documentation/Documentation";
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ServicesPage from "./pages/ServicesPage/ServicesPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
        errorElement: <NotFoundPage />,
    },
    {
        path: '/contact',
        element: <ContactPage />,
    },
    {
        path: '/documentation',
        element: <DocumentationPage />,
    },
    {
        path: '/about',
        element: <AboutPage />,
    },
    {
        path: '/blogs',
        element: <BlogsPage />,
    },
    {
        path: '/blogs/:blogId',
        element: <BlogViewPage />,
    },
    {
        path: '/services',
        element: <ServicesPage />,
    },
    {
        path: '*',
        element: <NotFoundPage />,
    },
]);

export default router;