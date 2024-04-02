
import React from "react";

const Cart = ({ cartElements }) => {
  return (
    <div style={{display:"grid",  justifyContent:"space-between" ,alignItems:"center", marginTop:"20px", marginLeft:"71%", }}>
      <table >
        <thead>
          <tr >
            <th>IMAGE</th>
            <th>TITLE</th>
            <th>PRICE</th>
            <th>QUANTITY</th>
           
          </tr>
        </thead>
        <tbody >
          {cartElements.map((item, index) => (
            <tr key={index}  style={{ borderBottom: "3px solid green"}}>
              <td>
                <img src={item.imageUrl} alt={item.title} style={{width:"100px" ,height:"80px"}} />
              </td>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
              <td>
                <button>REMOVE</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Cart;


//style={{width:"100px" ,height:"80px"}}