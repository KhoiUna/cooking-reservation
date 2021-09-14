const sponsors = require("../db/sponsors");

module.exports = async (date) => {
  try {
    const res = await sponsors.findAll({
      attributes: ["id", "full_name", "school_email", "social_link"],
      //   where: {
      //     submitted_date: date,
      //   },
    });

    const sponsorsList = res.map((i) => i.dataValues);
    return sponsorsList;
  } catch (e) {
    console.error("Error getting sponsors list");
    console.error(e);
  }
};
