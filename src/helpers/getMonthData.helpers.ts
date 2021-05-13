import moment from "moment";

export const firstDayOfMonth = (dateObject: moment.Moment): number => {
  const firstDay: string = moment(dateObject).startOf("month").format("d");
  return parseInt(firstDay);
};

export const daysInMonth = (month: number, year: number) => {
  return new Date(year, month, 0).getDate();
};