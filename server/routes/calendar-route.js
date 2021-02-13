const getReservations = require("../utils/getReservations");
const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    const dateIndex = req.query.dateIndex;
    const reservations = await getReservations(dateIndex);
    res.status(200).json(reservations);
  } catch (e) {
    console.error("Error getting reservations...");
    console.error(e);
  }
});

module.exports = router;
