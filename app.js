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


import React from "react";
import ReactDOM from "react-dom/client"; //to remove warning, use /client

const heading1 = React.createElement(
    "h1",
    {
        id: "tittle",
    },
    "Heading 1"
);

const heading2 = React.createElement(
    "h2",
    {
        id: "tittle",
    },
    "Heading 2"
);

const container = React.createElement(
    "div",
    {
        id: "container",
    },
    [heading1, heading2]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);