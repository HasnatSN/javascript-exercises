const sumAll = function (n1, n2) {
  if (n1 < 0 || n2 < 0) {
    return (result = "ERROR");
  } else if (!Number.isInteger(n1) || !Number.isInteger(n2)) {
    return (result = "ERROR");
  } else {
    smaller_n = Math.min(n1, n2);
    bigger_n = Math.max(n1, n2);

    let result = 0;

    for (i = smaller_n; i <= bigger_n; i++) {
      result += i;
    }

    return result;
  }
};

// Do not edit below this line
module.exports = sumAll;
