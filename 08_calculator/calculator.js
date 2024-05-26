const add = function(a,b) {
	return a+b
};

const subtract = function(a,b) {
  return a-b
};

const sum = function(inp) {
	return inp.reduce((total,current) => total + current,0)
};

const multiply = function(inp) {
  return inp.reduce((product,current) => product * current)
};

const power = function(a,b) {
	return Math.pow(a,b)
};

const factorial = function(num) {
  if(num === 0)return 1
  let fact = 1
  for(i=num;i>0;i--){
    fact *= i
  }
  return fact
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
