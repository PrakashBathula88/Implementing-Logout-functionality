import React, { useState } from "react";
import { IoPersonCircle } from "react-icons/io5";
import { BsCart4 } from "react-icons/bs";
import "../Nav/Nav.css";
import Cart from "../Cart/CartItems";
import DummySlider from "../Slider/Slider";
const Nav = () => {
 const[Visible,SetVisible]= useState(false);

 const ToggleVisiblity=()=>{
  SetVisible(!Visible);
 }


 const CartElements=[
  {
    title: "Iphone 12",

    price: "99,999",

    imageUrl:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/k/l/l/-original-imagtc5fz9spysyk.jpeg?q=70",
      quantity: 1,
  },

  {
    title: "One Plus 12",

    price: "69,999",

    imageUrl:
      "https://m.media-amazon.com/images/I/41pR0qlI0yL._SX300_SY300_QL70_FMwebp_.jpg",
      quantity: 1,
  },

  {
    title: "Realme ",

    price: "19,999",

    imageUrl:
      "https://m.media-amazon.com/images/I/41tSQSq1xJL._SX300_SY300_QL70_FMwebp_.jpg",

      quantity: 1,
  },

  {
    title: "Realme Nazro",

    price: "17,999",

    imageUrl:
      "https://m.media-amazon.com/images/I/8195A49fZbL._AC_UY327_FMwebp_QL65_.jpg",
      quantity: 5,

  },
  {
    title: "Redmi ",

    price: "17,889",

    imageUrl:
      "https://m.media-amazon.com/images/I/813ZN8Pj-HL._AC_UY327_FMwebp_QL65_.jpg",
      quantity: 9,
  },
];
  return (
    <div>
      <div className="Nav_items">
        <span>HOME</span>
        <span>STORE</span>
        <span>SEARCH</span>
        <span>ABOUT</span>
     
      <span>
        <IoPersonCircle />
      </span>
      <span onClick={ToggleVisiblity}>
        <BsCart4 /> CART
      </span>
    
      </div>
   
      <div>
        <h1>The Generics</h1>
        {Visible && <Cart cartElements={CartElements}/>}
      </div>
      <DummySlider/>
      <h3>Best Deals on SmartPhones</h3>
    </div>
  );
};

export default Nav;
