import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { IoPersonCircle } from "react-icons/io5";
import { BsCart4 } from "react-icons/bs";
import "../Nav/Nav.css";
import Cart from "../Cart/CartItems";
import DummySlider from "../Slider/Slider";
import { useProductContext } from "../AddCart/CartProviders";

const Nav = () => {
  const [visible, setVisible] = useState(false);
  const { CartItems } = useProductContext();
  const Location = useLocation();

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  const visibleHomePageonly = Location.pathname === "/";

  return (
    <div
      style={{
        width: "100vw",
      }}
    >
      <div className="Nav_items">
        <div className="Allnavitems">
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/album">ALBUM</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/about">ABOUT</NavLink>
        </div>
        <span>
          <IoPersonCircle />
        </span>
        <div>
          <span
            style={{
              marginRight: "50px",
            }}
            onClick={toggleVisibility}
          >
            <BsCart4 /> CART
            <span>{CartItems.length}</span>
          </span>
        </div>
      </div>

      <div>
        <div >{visibleHomePageonly && <h1 >The Generics</h1>}</div>

        {visibleHomePageonly && <DummySlider />}
        {visible && <Cart cartElements={CartItems} />}
      </div>

      {visibleHomePageonly && <h3>Best Deals on SmartPhones</h3>}
    </div>
  );
};

export default Nav;
