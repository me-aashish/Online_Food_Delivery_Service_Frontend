import { ResaturantCard } from "../constants/RestaurantCard";
import { useState } from "react";

/**
 * useState
 *  - used to create local react variable or local react state variable
 *  - for optimisation and readability purposes, to make variables in sync with the UI
 *  - eg 
 *      const stext = "hello" -->JS
 *      const [stext, setStext] = useState("hello") --> React
 *        - first argument is name of variable, second argument is fucntion to update the variable 
 *              (it returns array of two arguments)
 *  - 
 */

const Body = () => {
    const [serachtext, setSerachText] = useState();
    return (
        <>  
            <div className="search-container">
                <input type="text" 
                    placeholder="Search" 
                    className="serach-input" 
                    value={serachtext}
                    onChange={(e) => {
                        setSerachText(e.target.value);
                    }}
                />
                <button className="serach-btn">Search</button>
            </div>
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
        </>
    );
};

export default Body;
