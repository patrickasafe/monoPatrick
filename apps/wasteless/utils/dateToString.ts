export const dateToString = (inputDate: Date) => {
  let date, month, year;

  date = inputDate.getDate();
  month = inputDate.getMonth() + 1; // take care of the month's number here ⚠️
  year = inputDate.getFullYear();

  date = date.toString().padStart(2, "0");

  month = month.toString().padStart(2, "0");

  return `${date}/${month}/${year}`;
};
