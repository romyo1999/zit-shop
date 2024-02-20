// server.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

app.post("/createOrder", async (req, res) => {
  try {
    const amount=req.body
    const response = await axios.post(
      "https://api.sandbox.paypal.com/v2/checkout/orders",
      {
        intent: "CAPTURE",
        purchase_units: [
          {
            amount: {
              currency_code: "USD",
              value: amount, // adjust this amount as needed
            },
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer YOUR_PAYPAL_SECRET_KEY`,
        },
      }
    );

    res.json({ orderId: response.data.id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
