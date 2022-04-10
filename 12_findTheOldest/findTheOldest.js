const findTheOldest = function (array_of_objects) {
  let age = 0;
  let o_name = "";

  for (object of array_of_objects) {
    if (object.hasOwnProperty("yearOfDeath")) {
      if (object.yearOfDeath - object.yearOfBirth > age) {
        age = object.yearOfDeath - object.yearOfBirth;
        correct_person = object;
      }
    } else {
      if (2022 - object.yearOfBirth > age) {
        age = 2022 - object.yearOfBirth;
        correct_person = object;
      }
    }
  }

  return correct_person;
};

// Do not edit below this line
module.exports = findTheOldest;
