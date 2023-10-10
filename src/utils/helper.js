export function filterData(searchText, restaurant) {
    if (searchText) {
      console.log(restaurant);
      const newData = restaurant.filter((restro) =>
        restro?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
      );
      return newData;
    }
    return restaurant;
  }
  