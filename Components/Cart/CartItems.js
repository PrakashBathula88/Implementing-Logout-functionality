import React from "react";


import "../Cart/Cart.css";
import CartPortal from "../CartModal/Cartportals";
import { useProductContext } from "../AddCart/CartProviders";
const Cart = ({ cartElements,Onclose }) => {
  const{HandleRemove}=useProductContext();
  return (
   <CartPortal onclose={Onclose}>
    <div className="All_cart_items">
     
      <table style={{ marginLeft: "8%" }}>
        <thead>
          <tr style={{ border: "2px solid red" }}>
            <th>IMAGE</th>
            <th>TITLE</th>
            <th>PRICE</th>
            <th>QUANTITY</th>
          </tr>
        </thead>
        <tbody>
          {cartElements.map((item, index) => (
            <tr key={index} style={{ borderBottom: "3px solid green" }}>
              <td>
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  style={{
                    width: "120px",
                    height: "110px",
                    borderRadius: "10px",
                  }}
                />
              </td>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
              <td style={{ marginLeft: "700px" }}>
                <button onClick={()=>HandleRemove(index)}>REMOVE</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </CartPortal>
  );
};

export default Cart;
