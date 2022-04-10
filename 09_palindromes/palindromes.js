const palindromes = function (u_string) {
  u_string = u_string.replace(/\W/g, "");
  u_string = u_string.toLowerCase();
  u_string = u_string.replace(/\s/g, "");
  u_array = u_string.split("");

  let i = 1;
  let reversed_array = [];

  for (letter of u_array) {
    reversed_array.push(u_array[u_array.length - i]);
    i++;
  }

  let reversed_string = reversed_array.join("");

  if (u_string == reversed_string) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
