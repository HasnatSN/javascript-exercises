const leapYears = function (u_year) {
  let is_leap = false;

  if (u_year % 4 == 0) {
    is_leap = true;

    if (u_year % 100 == 0) {
      is_leap = false;

      if (u_year % 400 == 0) {
        is_leap = true;
      }
    }
  }

  return is_leap;
};

// Do not edit below this line
module.exports = leapYears;
