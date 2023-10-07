import { useParams } from "react-router"
import { useEffect, useState } from "react";
import { imageCDNLINK } from "../constants/imageCDNLink";

const RestaurantMenu = () => {

    useEffect(() => {
        getRestaurant();
    }, [])

    const [restro, setRestro] = useState({});

    getRestaurant= async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.7333148&lng=76.7794179&restaurantId=49690&catalog_qa=undefined&submitAction=ENTER");

        const json = await data.json();
        console.log(json?.data?.cards[0]?.card?.card?.info);
        setRestro(json);
    }

    const { id } = useParams();
    return (
        <div>
            <h1>Welcome to restaurant with id : {restro?.data?.cards[0]?.card?.card?.info?.id} </h1>
            <h2>{restro?.data?.cards[0]?.card?.card?.info?.name}</h2>
            <h3>Locality : {restro?.data?.cards[0]?.card?.card?.info?.locality}</h3>
            <h4>Cuisines : {restro?.data?.cards[0]?.card?.card?.info?.cuisines.join(", ")}</h4>
            <h5>Rating : {restro?.data?.cards[0]?.card?.card?.info?.avgRatingString} / 5</h5>
            <img src = {imageCDNLINK + restro?.data?.cards[0]?.card?.card?.info?.cloudinaryImageId}/>

        </div>
    )
};

export default RestaurantMenu;