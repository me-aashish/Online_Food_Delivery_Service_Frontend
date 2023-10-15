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

import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client"; //to remove warning, use /client
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
// import Instamart from "./components/Instamart";
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

/**
 *
 * Chunking or Code Splitting or Dynamic Bundling or Lazy Loading or On Demand Loading or Dynamic Import
 *
 */

// LAZY LOADING
const Instamart = lazy(() => import("./components/Instamart"));
//upon On Demand Loading -> upon Render -> react will suspend loading -> hence we will not be able to see lazy loaded component while moving to that component, so we'll have to use "<SUSPENSE></SUSPENSE>"

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        // for nested routes -> make childrens of children
        children: [
          {
            path: "profile", // use relative route, don't use "/" before children of children path
            // if we do /profile then react router dom wil consider it as - localhost:1234 profile
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/restaurant/instamart",
        element: (
          <Suspense>
            <Instamart />
          </Suspense> // using suspense so that react wont stop loading 
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
