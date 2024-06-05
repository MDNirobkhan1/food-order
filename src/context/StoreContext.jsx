/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = props => {
  const [cartItem, setCartitem] = useState({});

  const addToCart = itemId => {
    if (!cartItem[itemId]) {
      setCartitem(prev => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartitem(prev => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const removeFromCart = itemId => {
    setCartitem(prev => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  // useEffect(
  //   () => {
  //     console.log(cartItem);
  //   },
  //   [cartItem]
  // );

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        let itemInfo = food_list.find(product => product._id === item);
        totalAmount += itemInfo.price * cartItem[item];
      }
    }
    return totalAmount;
  };

  const contextValue = {
    food_list,
    cartItem,
    setCartitem,
    addToCart,
    removeFromCart,
    getTotalCartAmount
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
