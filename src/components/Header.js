import { useState } from "react";
export const Title = () => {
    return (
       <a href="/"><img src = "https://media.istockphoto.com/id/1194881601/vector/hand-drawn-yummy-face-tongue-smile-delicious-icon-logo.jpg?s=612x612&w=0&k=20&c=Q7Usxg0qyFgZ1fNFG-5arq1FpKCpeoADDfrDC07ITBk=" className="logo" alt="logo"></img></a>
    );
};

const Header = () => {
   const [isLoggedIn, setIsLoggedIn] = useState(false);
    return(
        <div className="header">
            <Title/>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                    
                </ul>
            </div>
            { isLoggedIn ? <button onClick = {() => setIsLoggedIn(false)}>Log Out</button> :  <button onClick = {() => setIsLoggedIn(true)}>Log In</button>}
        </div>
    );
};

export default Header;
