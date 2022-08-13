function getDaysBetween(date1, date2) {
  let between = Math.abs(date2 - date1);
  let days = between / (1000 * 3600 * 24);
  console.log(days);
}

getDaysBetween(new Date('10 / 08 / 2022'), new Date('11 / 09 / 2022'));
