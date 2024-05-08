import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import "../Nav/Nav.css";
import Cart from "../Cart/CartItems";
import DummySlider from "../Slider/Slider";
import { useProductContext } from "../AddCart/CartProviders";
import { useAuth } from "../LoginProvider/Loginprovider";

const Nav = () => {
  const [visible, setVisible] = useState(false);
  const { CartItems } = useProductContext();
  const Location = useLocation();
  const { token } = useAuth();

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  const visibleHomePageonly = Location.pathname === "/";

  return (
    <div>
      <div className="Nav_items">
        <div className="Allnavitems">
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/album">ALBUM</NavLink>
          <NavLink to="/contact">CONTACT</NavLink>
          <NavLink to="/about">ABOUT</NavLink>
          {/* {token ? ( */}
            <NavLink to="/signin">SIGNIN</NavLink>
      
            <NavLink to="/profile">Profile</NavLink>
      
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
