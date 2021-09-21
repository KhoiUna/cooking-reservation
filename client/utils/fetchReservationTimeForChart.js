import { origin } from "../config/config";
import FormatTime from "../helpers/FormatTime";

export default async function fetchReservationTimeForChart() {
  const res = await (await fetch(`${origin}/api/time`)).json();

  //Format response to an array for Google Charts
  const timeData = res.map((item) => [
    "",
    {
      v: new Date(item.selected_date).getDay() + 1,
      f: FormatTime.getDayOfWeek(item.selected_date),
    },
    item.time_slot,
    Number(item.number_of_people),
  ]);
  timeData.unshift(["ID", "Day of the week", "Time slot", "# of Reservations"]);

  return timeData;
}
