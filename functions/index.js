const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51LC2NxSI0MGahHVvkeIWHZvpB5BljxVCabuL5wdXZS8mK4MrlWacak5f71wWRkWLlaKDCPHgSLXyAnizpIuQsXPY008KI0dX34"
);

// API

// - App config
const app = express();

// - Middleware
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("Hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment request Recieved !! for the amount => ", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // sub-units of currency
    currency: "inr",
  });
  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen Command
exports.api = functions.https.onRequest(app);

// Example Endpoint
// http://localhost:5001/clone-f3161/us-central1/api
