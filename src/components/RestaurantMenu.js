import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { imageCDNLINK } from "../constants/imageCDNLink";

const RestaurantMenu = () => {
  const [restro, setRestro] = useState({});  
  useEffect(() => {
    getRestaurant();
  }, []);


  getRestaurant = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.7333148&lng=76.7794179&restaurantId=49690&catalog_qa=undefined&submitAction=ENTER"
    );

    const json = await data.json();
    console.log(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards);
    json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards.map((menuItems)=>{
      console.log(menuItems.card.info.name);
    })

    // console.log(restro?.data?.cards[0]?.card?.card?.info?.id);
    setRestro(json);
  };

  const { id } = useParams();
  return (
    <div>
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
          {restro?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards.map((menuItems) => (
            <li>{menuItems.card.info.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
