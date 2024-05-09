import React, { useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import "../Nav/Nav.css";
import Cart from "../Cart/CartItems";
import DummySlider from "../Slider/Slider";
import { useProductContext } from "../AddCart/CartProviders";

import Authcontext from "../LoginProvider/Loginprovider";

const Nav = () => {
  const [visible, setVisible] = useState(false);
  const { CartItems } = useProductContext();
  const Location = useLocation();

  const Authctx = useContext(Authcontext);
  const isLoggedin = Authctx.isLoggedin;

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  const logoutHandler = () => {
    Authctx.Logout();
 
  };

  const visibleHomePageonly = Location.pathname === "/";

  return (
    <div>
      <div className="Nav_items">
        <div className="Allnavitems">
          <Link to="/">HOME</Link>
          <Link to="/album">ALBUM</Link>
          <Link to="/contact">CONTACT</Link>
          <Link to="/about">ABOUT</Link>

          {!isLoggedin && (
            <li>
              <Link to="/signin">Login</Link>
            </li>
          )}

          {isLoggedin && (
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          )}

          {isLoggedin && (
            <li>
              <button
                onClick={logoutHandler}
                style={{
                  height: "34px",
                  width: "80px",
                  border: "1px solid white",
                  backgroundColor: "black",
                  color: "blue",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Logout
              </button>
            </li>
          )}
        </div>

        <div>
          <span
            style={{
              marginRight: "50px",
            }}
            onClick={toggleVisibility}
          >
            <div className="cart_page_cart">
              <BsCart4 /> CART
              <span>{CartItems.length}</span>
            </div>
          </span>
        </div>
      </div>

      <div className="Gene_Cart_len">
        {visibleHomePageonly && <h1>The Generics</h1>}

        <div style={{ marginTop: "-50px" }}>
          {" "}
          {visibleHomePageonly && <DummySlider />}
        </div>
        {visible && <Cart cartElements={CartItems} />}
      </div>

      {visibleHomePageonly && (
        <h3
          style={{
            fontSize: "25px",
            fontFamily: "serif",
            position: "absolute",
            marginTop: "10px",
            color: "black",
          }}
        >
          Best Deals on SmartPhones
        </h3>
      )}
    </div>
  );
};

export default Nav;
