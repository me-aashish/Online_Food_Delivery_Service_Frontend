import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import store from "../utils/store";
import logoLink from "../constants/logoLink";
export const Title = () => {
  return (
    <a href="/">
      <img data-testid = "logo"
        src={logoLink}
        className="h-28 pr-2"
        alt="logo"
      ></img>
    </a>
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-pink-50 shadow-xl sticky top-0">
      <Title />
      <div className="nav-items">
        <ul className="flex py-9">
          <li className="px-2 hover:bg-pink-200 rounded-lg">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2 hover:bg-pink-200 rounded-lg">
            <Link to="/about">About</Link>
          </li>
          <li className="px-2 hover:bg-pink-200 rounded-lg">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-2 hover:bg-pink-200 rounded-lg">
            <Link to="/restaurant/instamart">Instamart</Link>
          </li>
          {/* <li className="px-2 hover:bg-pink-200 rounded-lg 2xl:">
            <Link to="/cart">🛒 - {cartItems.length} items</Link>
          </li> */}
          <li className="px-2 hover:bg-pink-200 rounded-lg">
          <Link to="/cart">  
            <div>
              <strong className="relative inline-flex items-center  border-gray-200 px-2.5 py-1.5 text-xs font-medium">
                {cartItems.length > 0 && <span class="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-red-600 flex justify-center items-center items">
                  <span>{cartItems.length}</span>
                </span>}
                <span className="drop-shadow-lg"> 🛒 </span>
              </strong>
            </div>
            </Link>
          </li>
        </ul>
      </div>
      {isLoggedIn ? (
        <button
          className="w-16 h-12 mt-5 mr-4 hover:bg-pink-200 rounded-lg bg-purple-200 shadow-lg"
          onClick={() => setIsLoggedIn(false)}
        >
          Log Out
        </button>
      ) : (
        <button
          className="w-16 h-12 mt-5 mr-4 hover:bg-pink-200 rounded-lg bg-purple-200 shadow-lg"
          onClick={() => setIsLoggedIn(true)}
        >
          Log In
        </button>
      )}
    </div>
  );
};

export default Header;
