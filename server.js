const express = require("express");
// const cors = require("cors");

const app = express();

app.use(express.json());

// app.use(
//   cors({
//     origin: "*",
//   })
// );
//

const Dress = require("./modelss/dressModel");

const db = require("./db");
const dressesRoute = require("./routes/dressesRoute");
const userRoute = require("./routes/userRoute");
const orderRoute = require("./routes/ordersRoute");

app.use("/api/dresses/", dressesRoute);
app.use("/api/users/", userRoute);
app.use("/api/orders/", orderRoute);

app.get("/", (req, res) =>
  res.send("Hello World..!Your Server started get line...!" + port)
);

const port = process.env.PORT || 8000;

app.listen(port, () => `Hello World..!Server started...!`);
