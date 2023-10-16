import { RestaurantList } from "./RestaurantList"
import { imageCDNLINK } from "./imageCDNLink"
export const ResaturantCard = (props) => {
    return (
        <div className="card w-[227px] h-[22rem] p-2 m-2 shadow-lg bg-pink-50 hover:bg-pink-100 rounded-lg">
            <img className="w-56 h-56" src={ imageCDNLINK +  props?.info?.cloudinaryImageId}></img>
            <h2 className="font-bold text-2xl">{props?.info?.name}</h2>
            <h3>{props?.info?.cuisines.join(", ").split(", ").slice(0,2).join(", ")}</h3>
            <h4>{props?.info?.locality}</h4>
        </div>
    )
}
