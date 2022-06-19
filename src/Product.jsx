import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  // console.log(basket);
  const addToBasket = () => {
    // Dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      {/* Title */}
      <div className="product_info">
        <p style={{ fontWeight: "bold" }}>{title}</p>
        {/* Price */}
        <p className="product_price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        {/* Rating */}
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      {/* Add to Cart */}
      <button onClick={addToBasket}>Add to Cart</button>
    </div>
  );
}

export default Product;
