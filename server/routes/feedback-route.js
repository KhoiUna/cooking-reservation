const router = require("express").Router();
const saveFeedback = require("../utils/saveFeedback");

router.post("/", (req, res) => {
  if (req.body.subject && req.body.feedback) {
    saveFeedback(req.body.subject, req.body.feedback);
    res.sendStatus(200);
  }
  res.status(406).send("* Invalid data");
});

module.exports = router;
