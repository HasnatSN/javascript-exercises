const add = function(...numbers) {

  let sum = 0;

	for (num of numbers) {
    sum += num 
  }

  return sum;

};

const subtract = function(n1, n2) {

  return n1 - n2;
	
};

const sum = function(numbers) {
  
  let sum = 0;

  for (num of numbers) {
    sum += parseInt(num);
  }

  return sum;


};

const multiply = function(numbers) {

  let sum = 1;

  for (num of numbers) {
    sum *= num;
  }

  return sum;

};

const power = function(n1, n2) {
	return n1 ** n2;
};

const factorial = function(n1) {

  let fact_num = 1

  for (i = 1; i <= n1; i++) {
    fact_num *= i;
  }
	
  return fact_num;


};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
