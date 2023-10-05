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

const Title = () => {
    return (
       <a href="/"><img src = "https://media.istockphoto.com/id/1194881601/vector/hand-drawn-yummy-face-tongue-smile-delicious-icon-logo.jpg?s=612x612&w=0&k=20&c=Q7Usxg0qyFgZ1fNFG-5arq1FpKCpeoADDfrDC07ITBk=" className="logo" alt="logo"></img></a>
    );
};

const Header = () => {
   
    return(
        <div className="header">
            <Title/>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                    
                </ul>
            </div>
        </div>
    );
};

const restaurantList = [
    
]

const ResaturantCard = () => {
    return (
        <div className="card">
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/rkajxxqff1e5msbcmis9"></img>
            <h2>Chandigarh Flavours</h2>
            <h3>Indian, Chinese, Beverages</h3>
            <h4>Sector 46</h4>
        </div>
    )
}

const Body = () => {
    return (
        <div className="restaurant-list" >
            <ResaturantCard/>
            <ResaturantCard/>
            <ResaturantCard/>
            <ResaturantCard/>
            <ResaturantCard/>
            <ResaturantCard/>
            <ResaturantCard/>
            <ResaturantCard/>
        </div>
    );
};

const Footer = () => {
    return (
        <h2>Footer</h2>
    );
};

/**
 * React.fragment allows to have multiple parent within a component
 *  - we can use shorthand of React.fragment as <>...</> as JSX expects only one parent.
 */

const AppLayout = () => {
    return (
        <>
            <Header/>
            <Body/>
            <Footer/>
        </>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);
