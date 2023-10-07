import { useState } from "react";
import { Link } from "react-router-dom";
export const Title = () => {
    return (
        <a href="/"><img src="https://media.istockphoto.com/id/1194881601/vector/hand-drawn-yummy-face-tongue-smile-delicious-icon-logo.jpg?s=612x612&w=0&k=20&c=Q7Usxg0qyFgZ1fNFG-5arq1FpKCpeoADDfrDC07ITBk=" className="logo" alt="logo"></img></a>
    );
};

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul className="nav-lists">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li>Contact</li>
                    <li>Cart</li>

                </ul>
            </div>
            {isLoggedIn ? <button className="auth-btn" onClick={() => setIsLoggedIn(false)}>Log Out</button> : <button className="auth-btn" onClick={() => setIsLoggedIn(true)}>Log In</button>}
        </div>
    );
};

export default Header;
