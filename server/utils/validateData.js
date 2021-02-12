module.exports = ({
  firstName,
  lastName,
  numberOfPeople,
  selectedDate,
  timeSlot,
}) =>
  firstName &&
  lastName &&
  numberOfPeople > 0 &&
  numberOfPeople <= 8 &&
  selectedDate.getDate() >= new Date().getDate() &&
  selectedDate.getFullYear() >= new Date().getFullYear() &&
  selectedDate.getMonth() >= new Date().getMonth() &&
  timeSlot;
