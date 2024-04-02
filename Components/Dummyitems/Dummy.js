import React from "react";
import "../Dummyitems/Phones.css"
import { IoMdCart } from "react-icons/io";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { useProductContext } from "../AddCart/CartProviders";
const Dummy = () => {
    const{ AddTocart}=useProductContext();
  const productsArr = [
    {
      title: "Iphone 12",

      price: "98,899",

      imageUrl:
        "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/k/l/l/-original-imagtc5fz9spysyk.jpeg?q=70",
        
    },

    {
      title: "One Plus 12",

      price: "69,999",

      imageUrl:
        "https://m.media-amazon.com/images/I/41pR0qlI0yL._SX300_SY300_QL70_FMwebp_.jpg",
       
    },

    {
      title: "Realme ",

      price: "19,999",

      imageUrl:
        "https://m.media-amazon.com/images/I/41tSQSq1xJL._SX300_SY300_QL70_FMwebp_.jpg",

        
    },

    {
      title: "Realme Nazro",

      price: "17,999",

      imageUrl:
        "https://m.media-amazon.com/images/I/8195A49fZbL._AC_UY327_FMwebp_QL65_.jpg",
        

    },
    {
      title: "Redmi ",

      price: "17,889",

      imageUrl:
        "https://m.media-amazon.com/images/I/813ZN8Pj-HL._AC_UY327_FMwebp_QL65_.jpg",
    
    },
  ];

  const AddProductsToCart=(product)=>{
   AddTocart(product)
  }
  
  return (
    <div>
      <div className="container">
        {productsArr.map((product, index) => (
          <div key={index}  className="All_products">
            <span>
            <img src={product.imageUrl} alt={product.title}></img>
            </span>
            <span className="PRODUCT">
            <h1>{product.title}</h1>
           
            <span className="price_logo"><LiaRupeeSignSolid />{product.price}</span>
            
            <button  className="Cart_logo" onClick={()=>AddProductsToCart(product)}>
              <IoMdCart />
              Cart
            </button>
           
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dummy;
