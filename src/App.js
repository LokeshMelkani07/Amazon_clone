import "./App.css";
import Home from "./Home";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./Header";
import Login from "./Login";
import Payment from "./Payment";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";

const promise = loadStripe(
  "pk_test_51LC2NxSI0MGahHVvswsQ9U6wYwWPq0TwgIsaW9TfBwfrbJ1DDPunX0YRMTZAhAG1AJEpRxffxas4GZXfm4Bhz4vD00lrcjiAsa"
);

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    // Will only run once when app component loads so we use []
    auth.onAuthStateChanged((authUser) => {
      console.log("The User is ", authUser);

      if (authUser) {
        // User just logged in or was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // User is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/checkout" element={<Checkout />} />
        <Route exact path="/login" element={<Login />} />
        <Route
          exact
          path="/payment"
          element={
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          }
        />
        <Route exact path="/payment/orders" element={<Orders />} />
        <Route exact path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
