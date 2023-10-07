/**
 *
 *
 * HMR - Hot Module Replacement, done by parcel to work like nodemon, auto reload when saved
 *  - using File Watcher Algo( written in C++ )
 *  - MINIFY
 *  - Code Clean Up
 *  - Super Fast Build
 *  - Media Optimisation
 *  - Caching While Development
 *  - Compressions
 *  - COmpatibility with older version of browsers
 *  - HTTPS on dev env
 *  - Port no. management
 *  - Tree SHaking - Removing unwated code
 *
 *
 *
 *
 * Transitive Dependencies
 */

/**
 * App Layout
 *  - Header
 *      - Logo
 *      - Nav Items
 *      - Cart
 *  
 *  - Body
 *      - Search Bar
 *      - Restaurant List
 *      - Restaurant Card
 *          - Image
 *          - Name
 *          - Rating
 *          - Cuisines
 *  
 *  - Footer
 *      - Links
 *      - Copyrights
 */

import React from "react";
import ReactDOM from "react-dom/client"; //to remove warning, use /client
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";



/**
 * React.fragment allows to have multiple parent within a component
 *  - we can use shorthand of React.fragment as <>...</> as JSX expects only one parent.
 */

/**
 * <Outlet /> 
 *      - acts as a placeholder to inject the specific children of the ultimate parent when the specific route is hit.
 * 
 */

const AppLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurant/:id",
                element: <RestaurantMenu />
            }
        ]
    },
    
])


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
