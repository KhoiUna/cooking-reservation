const router = require("express").Router();
const saveFeedback = require("../utils/saveFeedback");

router.post("/", async (req, res) => {
  try {
    if (!req.body.subject.trim() && !req.body.feedback.trim()) {
      res.status(406).send("* Invalid data");
    } else {
      saveFeedback(req.body.subject, req.body.feedback);
      res.sendStatus(200);
    }
  } catch (e) {
    console.error("Error posting feedback");
    console.error(e);
  }
});

module.exports = router;
