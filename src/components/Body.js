import { ResaturantCard } from "../constants/RestaurantCard";
import { useState } from "react";
import { RestaurantList } from "../constants/RestaurantList";

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
                {
                    RestaurantList.map((restro) => {
                        return <ResaturantCard {...restro} />
                    })
                }
                {/* <ResaturantCard {...RestaurantList[0]}/>
                <ResaturantCard {...RestaurantList[1]}/>
                <ResaturantCard {...RestaurantList[2]}/>
                <ResaturantCard {...RestaurantList[3]}/>
                <ResaturantCard {...RestaurantList[4]}/>
                <ResaturantCard {...RestaurantList[5]}/>
                <ResaturantCard {...RestaurantList[6]}/>
                <ResaturantCard {...RestaurantList[7]}/> */}
                
            </div>
        </>
    );
};

export default Body;
