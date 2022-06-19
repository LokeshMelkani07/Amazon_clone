import React from "react";
import "./Header.css";
import logo from "./images/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import { MdShoppingCart } from "react-icons/md";
import Home from "./Home";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <>
      <div className="header">
        <Link to="/">
          <img className="header_logo" src={logo} alt="logo" />
        </Link>
        <div className="header_search">
          <input type="text" className="header_searchInput" />
          <SearchIcon className="header_searchIcon" />
          {/* logo */}
        </div>
        <div className="header_nav">
          <Link to={!user && "/login"}>
            <div onClick={handleAuthentication} className="header_option">
              <span className="header_optionLineOne">
                {user ? `Hello ${user.email}` : "Hello Guest"}{" "}
              </span>
              <span className="header_optionLineTwo">
                {user ? "Sign Out" : "Sign in"}
              </span>
            </div>
          </Link>
          <Link to="./Payment/Orders">
            <div className="header_option">
              <span className="header_optionLineOne">Returns</span>
              <span className="header_optionLineTwo">& Orders</span>
            </div>
          </Link>
          <div className="header_option">
            <span className="header_optionLineOne">Your</span>
            <span className="header_optionLineTwo">Prime</span>
          </div>
          <Link to="/checkout">
            <div className="header_optionBasket">
              <MdShoppingCart />
              <span className="header_optionLineTwo header_basketCount">
                {basket?.length}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
