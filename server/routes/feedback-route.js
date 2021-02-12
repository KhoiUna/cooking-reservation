const router = require("express").Router();

router.post("/", (req, res) => {
  console.log(req.body);
  const obj = { ...req.body, time: new Date() };
  console.log(obj);
  res.sendStatus(200);
});

module.exports = router;
