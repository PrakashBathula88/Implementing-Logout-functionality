import React, { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";
const ProductContext = createContext();

export const useProductContext = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
  const [CartItems, SetCartItems] = useState([]);
  const [Load, SetLoad] = useState(false);
  const [error, SetError] = useState(null);

  const AddTocart = (ListItems) => {
    SetCartItems([...CartItems, ListItems]);
    axios
      .post(
        "https://commerce-24c08-default-rtdb.firebaseio.com/cart.json",
        ListItems
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    const FetchData = async () => {
      try {
        const response = await axios.post(
          "https://commerce-24c08-default-rtdb.firebaseio.com/cart.json"
        );
        SetCartItems(response.data);
        SetLoad(true);
      } catch (error) {
        SetError("DATA ERROR");
        console.error(error);
      }
    };
    FetchData();
  }, []);

  const HandleRemove = (index) => {
    const NewItems = [...CartItems];
    NewItems.splice(index, 1);
    SetCartItems(NewItems);
  };

  return (
    <ProductContext.Provider value={{ AddTocart, CartItems, HandleRemove }}>
      {children}
    </ProductContext.Provider>
  );
};
