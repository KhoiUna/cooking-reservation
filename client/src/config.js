module.exports = {
  origin:
    window.location.hostname === "localhost"
      ? "http://localhost:5000"
      : "https://cooking-reservation.herokuapp.com",
};
