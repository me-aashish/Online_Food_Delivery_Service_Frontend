import { imageCDNLINK } from "../constants/imageCDNLink";

const FoodItemInCart = (props) => {
        console.log(props.item);
        return (
          <div className = "w-56 p-2 m-2 shadow-lg bg-pink-50">
            <img
              src={imageCDNLINK + "/" + props.item?.imageId}
              className="h-40 w-44 m-2 p-2"
            ></img>
            <h1>{props.item?.name}</h1>
            <h1>Rs. {props.item?.price / 100}</h1>
            <h1>Category : {props.item?.category}</h1>
          </div>
        );
}

export default FoodItemInCart;