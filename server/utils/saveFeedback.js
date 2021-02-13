const Feedback = require("../db/Feedback");

module.exports = async (subject, feedback) =>
  await Feedback.create({
    subject: subject,
    feedback: feedback,
    submitted_date: new Date(new Date().toLocaleDateString()),
  });
