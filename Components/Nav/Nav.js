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
    <div  >
      <div className="Nav_items">
        <div className="Allnavitems">
        <NavLink to="../" >HOME</NavLink>
        <NavLink  to="/Album">ALBUM</NavLink>
        <NavLink >SEARCH</NavLink>
        <NavLink to="/about">ABOUT</NavLink>
        </div>
        <span>
          <IoPersonCircle />
        </span> 
        <span onClick={toggleVisibility}>
          <BsCart4 /> CART
          <span
            style={{
              padding: "3px",
              color: "pink",
              border: "2px solid blue",
              marginTop: "-20px",
              marginLeft: "20px",
            }}
          >
            {CartItems.length}
          </span>
        </span>
      </div>

      <div>
        <div>{visibleHomePageonly && <h1>The Generics</h1>}</div>

       {visibleHomePageonly &&<DummySlider />}
        {visible && <Cart cartElements={CartItems} />}
      </div>

     { visibleHomePageonly && <h3>Best Deals on SmartPhones</h3>}
    </div>
  );
};

export default Nav;
