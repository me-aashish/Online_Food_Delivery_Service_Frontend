import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { imageCDNLINK } from "../constants/imageCDNLink";
import useRestaurant from "../utils/useRestaurant";
import Shimmer from "./Shimmer";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  const { id } = useParams();

  const restro = useRestaurant(id);
  const dispatch = useDispatch();
  const handleAddItem = (foodItem) => {
    dispatch(addItem(foodItem));
  }
  // early return
  if(!restro) return <Shimmer />;

  return (
    <div className="flex p-2 m-2">
      <div>
        <h1>
          Welcome to restaurant with id :{" "}
          {restro?.data?.cards[0]?.card?.card?.info?.id}{" "}
        </h1>
        <h2>{restro?.data?.cards[0]?.card?.card?.info?.name}</h2>
        <h3>Locality : {restro?.data?.cards[0]?.card?.card?.info?.locality}</h3>
        <h4>
          Cuisines :{" "}
          {restro?.data?.cards[0]?.card?.card?.info?.cuisines.join(", ")}
        </h4>
        <h5>
          Rating : {restro?.data?.cards[0]?.card?.card?.info?.avgRatingString} /
          5
        </h5>
        <img className="w-28"
          src={
            imageCDNLINK +
            restro?.data?.cards[0]?.card?.card?.info?.cloudinaryImageId
          }
        />
      </div>
      <div>
        
      </div>
      <div className="ml-96">
        <h1>Menu</h1>
        <ul className="">
          {restro?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.map((menuItems,index) => (
            <>
            <li className="ml-8 list-disc" key={index}>{menuItems?.card?.info?.name}<button className="p-2 m-2 hover:bg-pink-200 rounded-lg bg-purple-200 shadow-lg" key={index*100} onClick={()=> handleAddItem(menuItems?.card?.info)}>Add Item</button></li>
            </>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
