const repeatString = function (text, times) {
  if (times >= 0) {
    let output = "";
    for (let i = 0; i < times; i++) {
      output += text;
    }

    return output;
  } else {
      let output = "ERROR";
      return output;
  }
};

// Do not edit below this line
module.exports = repeatString;
