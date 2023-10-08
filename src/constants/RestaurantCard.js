import { RestaurantList } from "./RestaurantList"
import { imageCDNLINK } from "./imageCDNLink"
export const ResaturantCard = (props) => {
    return (
        <div className="card">
            <img src={ imageCDNLINK +  props?.info?.cloudinaryImageId}></img>
            <h2>{props?.info?.name}</h2>
            <h3>{props?.info?.cuisines.join(", ").split(", ").slice(0,2).join(", ")}</h3>
            <h4>{props?.info?.locality}</h4>
        </div>
    )
}
