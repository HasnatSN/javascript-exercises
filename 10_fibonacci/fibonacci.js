const fibonacci = function (u_position) {
  fibonacci_array = [];

  if (u_position > 0) {
    for (i = 0; i < u_position + 1; i++) {
      if (i < 2) {
        fibonacci_array.push(1);
      } else {
        fibonacci_array.push(
          fibonacci_array[fibonacci_array.length - 1] +
            fibonacci_array[fibonacci_array.length - 2]
        );
      }
    }

    return fibonacci_array[u_position - 1];
  } else {
    return "OOPS";
  }
};

// Do not edit below this line
module.exports = fibonacci;
