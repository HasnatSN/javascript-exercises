const caesar = function (u_string, shift) {
  let alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  let array_u_string = u_string.split("");
  let is_letter = false;
  let decoded_string = "";

  for (letter of array_u_string) {
    if (letter == letter.toUpperCase()) {
      letter = letter.toLowerCase();

      if (alphabet.includes(letter)) {
        position_of_letter = alphabet.indexOf(letter);
        position_of_new_letter = position_of_letter + shift;

        while (position_of_new_letter >= alphabet.length) {
          position_of_new_letter = position_of_new_letter - alphabet.length;
        }

        while (position_of_new_letter < 0) {
          position_of_new_letter = position_of_new_letter + alphabet.length;
        }

        letter = alphabet[position_of_new_letter];
        letter = letter.toUpperCase();
      }

      decoded_string += letter;
    } else if (letter == letter.toLowerCase()) {
      if (alphabet.includes(letter)) {
        position_of_letter = alphabet.indexOf(letter);
        position_of_new_letter = position_of_letter + shift;

        while (position_of_new_letter >= alphabet.length) {
          position_of_new_letter = position_of_new_letter - alphabet.length;
        }

        while (position_of_new_letter < 0) {
          position_of_new_letter = position_of_new_letter + alphabet.length;
        }

        letter = alphabet[position_of_new_letter];
      }

      decoded_string += letter;
    }
  }

  return decoded_string;
};

// Do not edit below this line
module.exports = caesar;
