const router = require("express").Router();
const checkAvailability = require("../utils/checkAvailability");
const saveReservation = require("../utils/saveReservation");
const validateData = require("../utils/validateData");

router.post("/", async (req, res) => {
  try {
    req.body.selectedDate = new Date(req.body.selectedDate);

    if (!validateData(req.body)) {
      res.status(406).send("* Invalid data");
    }

    const available = checkAvailability(
      req.body.selectedDate,
      req.body.timeSlot
    );
    if (available) {
      res.status(406).send("* Not enough spots, sorry!");
    } else {
      saveReservation(req.body);
      res.sendStatus(200);
    }
  } catch (e) {
    console.error("Error posting data...");
  }
});

module.exports = router;
