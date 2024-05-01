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
        "https://crudcrud.com/api/a8db78836fed4a8e8347d17b6359d24c/cart",
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
          "https://crudcrud.com/api/a8db78836fed4a8e8347d17b6359d24c/cart"
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
