import { Component } from "react";
import ProfileClass from "./ProfileClass";

class About extends Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){
        
    }

    render(){
        return (
            <div>
                <h1>About Us Page</h1>
                <ProfileClass />
            </div>
        )
    }
}
export default About;


/**
 *  React Class Life Cycle - 
 *  - Parent constructor
 *  - Parent Render
 *  
 *  - First Child constructor
 *  - First Child Render
 *  - Second Child constructor
 *  - Second Child Render
 * 
 *  ----DOM updated for children-----
 * 
 *  - First Child componentDidMount       --> in case when first child componentDidMount is not declared as async
 *  - Second Child componentDidMount
 *  - Parent componentDidMount
 * 
 * 
 * 
 * 
 *  - --> if child componentDidMount is declared with async then life cycle is as follows - 
 *      -  Parent constructor
 *      - Parent Render
 *      
 *      - Child constructor
 *      - Child Render
 * 
 *      - Parent componentDidMount    --> because here react will encounter await and will go on to execute parent
 *  
 *      - Child componentDidMount
 *      
 *      - Child Render(again)    
 */

