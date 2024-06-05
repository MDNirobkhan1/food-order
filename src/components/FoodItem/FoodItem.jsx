/* eslint-disable react/prop-types */

import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ item }) => {
  const { _id, name, description, image, price } = item;
  const { cartItem, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img src={image} alt="" className="food-item-img" />
        {!cartItem[_id]
          ? <img
              className="add cursor-pointer"
              onClick={() => addToCart(_id)}
              src={assets.add_icon_white}
              alt=""
            />
          : <div className="food-item-counter">
              <img
                onClick={() => removeFromCart(_id)}
                src={assets.remove_icon_red}
                alt=""
              />
              <p>
                {cartItem[_id]}
              </p>
              <img
                onClick={() => addToCart(_id)}
                src={assets.add_icon_green}
                alt=""
              />
            </div>}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>
            {name}
          </p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-description">
          {description}
        </p>
        <p className="food-item-price">
          $ {price}
        </p>
      </div>
    </div>
  );
};

export default FoodItem;
