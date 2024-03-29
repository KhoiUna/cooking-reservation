const router = require("express").Router();
const checkAvailability = require("../utils/checkAvailability");
const saveReservation = require("../utils/saveReservation");
const validateData = require("../helpers/validateData");
const getDateReservations = require("../utils/getDateReservations.js");
const deleteReservation = require("../utils/deleteReservation.js");

router.get("/", async (req, res, next) => {
  try {
    const dateIndex = req.query.dateIndex;
    const reservations = await getDateReservations(dateIndex);
    res.status(200).json(reservations);
  } catch (e) {
    console.error("Error getting data...");
    console.error(e);
    next(e);
  }
});

router.delete("/", async (req, res, next) => {
  try {
    if (!(await deleteReservation(req.body.reservationId)))
      return res.sendStatus(406);

    res.sendStatus(200);
  } catch (e) {
    console.error("Error deleting data...");
    console.error(e);
    next(e);
  }
});

router.post("/", async (req, res, next) => {
  try {
    req.body.selectedDate = new Date(
      new Date(req.body.selectedDate).toLocaleDateString()
    );

    if (!validateData(req.body)) {
      return res.status(406).send("* Invalid data");
    }

    const availablility = await checkAvailability(
      req.body.selectedDate,
      req.body.timeSlot,
      req.body.numberOfPeople
    );
    if (!availablility) {
      res.status(406).send("* Not enough spots, sorry!");
    } else {
      saveReservation(req.body);
      res.sendStatus(200);
    }
    next();
  } catch (e) {
    console.error("Error posting data...");
    console.error(e);
    next(e);
  }
});

module.exports = router;
