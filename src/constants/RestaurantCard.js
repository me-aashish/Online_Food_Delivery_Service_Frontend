import { RestaurantList } from "./RestaurantList"
export const ResaturantCard = (props) => {
    return (
        <div className="card">
            <img src={props.link}></img>
            <h2>{props.name}</h2>
            <h3>{props.cuisines.join(", ")}</h3>
            <h4>{props.location}</h4>
        </div>
    )
}
