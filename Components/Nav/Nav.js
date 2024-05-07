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
    <div>
      <div className="Nav_items">
        <div className="Allnavitems">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/album">Album</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/about">About</NavLink>
        </div>
        <span>
         Login < IoPersonCircle />
        </span>
        <div>
          <span
            style={{
              marginRight: "50px",
            }}
            onClick={toggleVisibility}
          >
            <div className="cart_page_cart">
            <BsCart4 /> CART
            <span >{CartItems.length}</span>
            </div>
          </span>
        </div>
      </div>

      <div className="Gene_Cart_len">
      {visibleHomePageonly && <h1  >The Generics</h1>}

       <div style={{marginTop:"-50px"}}> {visibleHomePageonly && <DummySlider />}</div>
        {visible && <Cart cartElements={CartItems} />}
      </div>

      {visibleHomePageonly && <h3 style={{fontSize:"25px",fontFamily:"serif",position:"absolute",marginTop:"10px",color:"black"}}>Best Deals on SmartPhones</h3>}
    </div>
  );
};

export default Nav;
