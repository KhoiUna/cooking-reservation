const { Op } = require("sequelize");
const reservations = require("../db/Reservations");

module.exports = async () => {
  try {
    const res = await reservations.findAll({
      attributes: ["selected_date", "time_slot"],
      where: {
        selected_date: {
          [Op.and]: {
            [Op.gte]: new Date(2021, 08, 18),
          },
        },
      },
    });

    const timeList = res.map((i) => i.dataValues);
    return timeList;
  } catch (e) {
    console.error("Error getting time list");
    console.error(e);
  }
};
