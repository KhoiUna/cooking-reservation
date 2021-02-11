module.exports = {
  initialDate(index) {
    return new Date(Date.now() + 10 ** 8 * 6 * index);
  },
  timeSlot(time) {
    if (time + 1 < 12) {
      return `${time + 1}am`;
    }
    if (time - 11 === 0) {
      return "12pm";
    }
    if (time - 11 === 12) {
      return "0am";
    }
    return `${time - 11}pm`;
  },
  month(index) {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return monthNames[this.initialDate(index).getMonth()];
  },
  monthYear(index) {
    const monthYear = `${this.month(index)} ${this.initialDate(
      index
    ).getFullYear()}`;
    return monthYear;
  },
  isLeapYear(index) {
    const year = new Date(Date.now() + 10 ** 8 * 6 * index).getFullYear();
    if (year % 4 === 0) {
      if (year % 100 === 0) {
        if (year % 400 === 0) {
          return 29;
        } else {
          return 28;
        }
      } else {
        return 29;
      }
    } else {
      return 28;
    }
  },
  dateOfWeek(index, loopIndex) {
    const dateNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const monthObj = {
      January: 31,
      February: this.isLeapYear(index),
      March: 31,
      April: 30,
      May: 31,
      June: 30,
      July: 31,
      August: 31,
      September: 30,
      October: 31,
      November: 30,
      December: 31,
    };

    let nameIndex = this.initialDate(index).getDay() - 1 + loopIndex;
    if (nameIndex > 6) {
      nameIndex -= 7;
    }

    let date = this.initialDate(index).getDate() + loopIndex;
    if (date > monthObj[this.month(index)]) {
      date -= monthObj[this.month(index)];
    }

    const dateName = dateNames[nameIndex];
    return `${dateName} - ${date}`;
  },
};
