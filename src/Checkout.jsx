import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <>
      <div className="checkout">
        <div className="checkout_left">
          <img
            className="checkout_ad"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/ScanAndPay/Organized/More/IndependenceDay2019/OnSitePromotion/Updated/More_Page_Banner_1500x300.jpg"
            alt="advertisement banner"
          />
          <div>
            <h3>{user ? `Hello, ${user.email}` : " "}</h3>
            <h2 className="checkout_title">Your Cart</h2>
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
            {/* Checkout Product */}
            {/* Checkout Product */}
            {/* Checkout Product */}
            {/* Checkout Product */}
            {/* Checkout Product */}
          </div>
        </div>
        <div className="checkout_right">
          {/* Subtotal */}
          <Subtotal />
        </div>
      </div>
    </>
  );
}

export default Checkout;
