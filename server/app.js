require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const app = express();
const { origin } = require("./config");

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(
  cors({
    origin: origin,
    optionsSuccessStatus: 200,
    credentials: true,
  })
);

//Routes
const calendarRoute = require("./routes/calendar-route");
app.use("/api/calendar", calendarRoute);

const reserveRoute = require("./routes/reserve-route");
app.use("/api/reserve", reserveRoute);

const feedbackRoute = require("./routes/feedback-route");
app.use("/api/feedback", feedbackRoute);

//Error handling
app.use((err, req, res, next) => {
  const status = err.status || 500;
  res.status(status).send(err.message);
});

app.listen(PORT, () => {
  console.log("On port " + PORT);
});
