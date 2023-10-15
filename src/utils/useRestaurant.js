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
    setRestro(json);
  };

  return restro;
}

export default useRestaurant;