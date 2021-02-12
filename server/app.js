require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

//Routes
const reserveRoute = require("./routes/reserve-route");
app.use("/api/reserve", reserveRoute);

const feedbackRoute = require("./routes/feedback-route");
app.use("/api/feedback", feedbackRoute);

app.listen(PORT, () => {
  console.log("On " + PORT);
});
