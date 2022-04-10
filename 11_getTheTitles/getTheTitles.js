const getTheTitles = function (array_of_objects) {
  titles = [];

  for (object of array_of_objects) {
    titles.push(object.title);
  }

  return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
