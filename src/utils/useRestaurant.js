import { useEffect, useState } from "react";

const useRestaurant = (id) => {
    const [restro, setRestro] = useState(null);  
  useEffect(() => {
    getRestaurant();
  }, []);

  
  const getRestaurant = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.7333148&lng=76.7794179&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
    );

    const json = await data.json();
    // console.log(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards);
    // json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards.map((menuItems)=>{
    //   console.log(menuItems.card.info.name);
    // })

    // console.log(restro?.data?.cards[0]?.card?.card?.info?.id);
    setRestro(json);
  };

  return restro;
}

export default useRestaurant;