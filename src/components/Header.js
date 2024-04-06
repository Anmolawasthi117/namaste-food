import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";

export const Title = () => {
  return (
    <div className="logo">
      <img
        src="https://play-lh.googleusercontent.com/cxDGR17fbZTINMRU6jgZJsCfSxSgYkX7NWPLLz3uiMrWUMsPeB-Pk46B59V0AbuywgKb=w240-h480-rw"
        alt="logo"
      />
      <h2>Food Sqaure</h2>
    </div>
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { user } = useContext(userContext);
  const cartItem = useSelector((store) => store.cart.items);
  // console.log(cartItem);

  return (
    <div className="navbar bg-orange-400 flex justify-between items-center font-bold">
      <Title />
      <div className="menu  ">
        <ul>
          <li>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/offers">Offers</Link>
            <Link to="/instamart">Instamart</Link>
            <Link to="/cart">Cart - {cartItem.length} items</Link>
          </li>
        </ul>
      </div>
      {isLoggedIn ? (
        <button className="login-btn bg-orange-300" onClick={() => setIsLoggedIn(false)}>
          Logout
        </button>
      ) : (
        <button className="login-btn bg-inherit" onClick={() => setIsLoggedIn(true)}>
          Login
        </button>
      )}
    </div>
  );
};

export default Header;
