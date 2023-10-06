import { ResaturantCard } from "../constants/RestaurantCard";
import { useState, useEffect } from "react";
import { RestaurantList } from "../constants/RestaurantList";

/**
 * useState
 *  - used to create local react variable or local react state variable
 *  - for optimisation and readability purposes, to make variables in sync with the UI
 *  - react can't track normal variables in the virtual DOM, so we have to use special react "state variables" for that.
 *  - eg
 *      const stext = "hello" -->JS
 *      const [stext, setStext] = useState("hello") --> React
 *        - first argument is name of variable, second argument is fucntion to update the variable
 *              (it returns array of two arguments)
 *  -
 */

/**
 * useEffect(()=>{
 * },[]);
 *          - empty dependency array ([]) -> called once after render
 *          - dependency array eg. [serachText] -> called once after initial render + everytime after re-render i.e. 
 *              when serachText is changed.  
 *
 * 
 */

function filterData(searchText, restaurant){
    if(searchText){
        console.log(restaurant);
        const newData = restaurant.filter((restro)=> restro?.info?.name?.includes(searchText));
        return newData;
    }
    return restaurant;
}

const Body = () => {
  const [searchText, setSerachText] = useState("");
  const [restaurant, setRestaurant] = useState(RestaurantList);
  
  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants(){
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7333148&lng=76.7794179&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

      const json = await data.json();
      console.log(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
        setRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search"
          className="serach-input"
          value={searchText}
          onChange={(e) => {
            setSerachText(e.target.value);
          }}
        />
        <button className="serach-btn" onClick={() => {
            const newData = filterData(searchText, restaurant);
            setRestaurant(newData);
        }}>
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {restaurant.map((restro, index) => {
          return <ResaturantCard {...restro} key={index} />;
        })}
      </div>
    </>
  );
};

export default Body;
