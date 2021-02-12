const Reservations = require("../db/Reservations");

module.exports = async ({
  firstName,
  lastName,
  numberOfPeople,
  selectedDate,
  timeSlot,
}) =>
  await Reservations.create({
    first_name: firstName,
    last_name: lastName,
    number_of_people: numberOfPeople,
    selected_date: selectedDate,
    time_slot: timeSlot,
  });
