import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { imageCDNLINK } from "../constants/imageCDNLink";
import useRestaurant from "../utils/useRestaurant";
import Shimmer from "./shimmer";

const RestaurantMenu = () => {
  const { id } = useParams();

  const restro = useRestaurant(id);

  // early return
  if(!restro) return <Shimmer />;

  return (
    <div className="menu">
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
        <img
          src={
            imageCDNLINK +
            restro?.data?.cards[0]?.card?.card?.info?.cloudinaryImageId
          }
        />
      </div>
      <div>
        <h1>Menu</h1>
        <ul>
          {restro?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.map((menuItems,index) => (
            <li key={index}>{menuItems.card.info.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
