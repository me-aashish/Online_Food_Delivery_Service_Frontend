import { Component } from "react";
import Profile from "./Profile";

class ProfileClass extends Component{
    constructor(props){
        super(props);

        this.state = {
            userInfo: {
                    name : "Dummy Name",
                    location : "Dummy Location"
            }
        }
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/me-aashish");
        const json = await data.json();
        console.log(json);

        this.setState({
            userInfo: json
        })
    }


    render(){
        return (
            <div className="userInfo-container">  
                <img src={this.state.userInfo?.avatar_url} />
                <h2>Name : {this.state.userInfo?.name}</h2>
                <h2>Location: {this.state.userInfo?.location}</h2>
            </div>
        )
    }
}

export default ProfileClass;