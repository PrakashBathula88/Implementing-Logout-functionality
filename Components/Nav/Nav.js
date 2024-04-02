import React, { useState } from "react";
import { IoPersonCircle } from "react-icons/io5";
import { BsCart4 } from "react-icons/bs";
import "../Nav/Nav.css";
import Cart from "../Cart/CartItems";
import DummySlider from "../Slider/Slider";
import { useProductContext } from "../AddCart/CartProviders";
const Nav = () => {
 const[Visible,SetVisible]= useState(false);
   const{CartItems}=useProductContext();
 const ToggleVisiblity=()=>{
  SetVisible(!Visible);
 }


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
        <span style={{ padding:"3px", color:"pink", border:"2px solid blue",marginTop:"-20px" ,marginLeft:"20px"}}>
        {CartItems.length}
        </span>
      </span>
      
      </div>
   
      <div>
        <h1>The Generics</h1>
        {Visible && <Cart cartElements={CartItems}/>}
      </div>
      <DummySlider/>
      <h3>Best Deals on SmartPhones</h3>
    </div>
  );
};

export default Nav;
