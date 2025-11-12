console.log("yay this is day 2");

const num1 = 23;
const num2 = 10;

// MATHEMATICAL OPERATORS
const sum = num1 + num2;
const minus = num2 - num1;
const mul = num1 * num2;
const division = num1 / num2;
const power = num1 ** 2;

console.log(sum, minus, mul, division, power);

// ASSIGNMENT OPERATORS
let sum2 = 23;
// sum2 += 5; // sum2 = sum2 + 5
// sum2 -= 5; // sum2 = sum2 - 5
// sum2 *= 2; // sum2 = sum2 * 2
// sum2 /= 2; // sum2 = sum2 / 2

// COMPARISON OPERATOR

// >, <, <= , >=, ==, ===, !=

// 5 == "5"   true
// 5 === "5"  false

console.log(sum2);

//  FUNCTIONS

// 1. FUNCTION DECLARATION
// 2. FUNCTION EXPRESSION
// 3. ARROW FUNCTION

// FUNCTION DECLARATION

add1(5, -24);

function add1(a, b) {
  const summation = a + b;
  // console.log("summation of a and b is:", summation);
  return summation;
}

const addTest = add1(10, 31);
add1(5, -24);
add1(1, 1);

console.log(addTest);

//FUNCTION EXPRESSION
const add2 = function () {};
add2();

// ARROW FUNCTION
const add3 = () => {
  console.log("arrow function");
};

const add4 = (a, b) => {
  const summation = a + b;
  // console.log("summation of a and b is:", summation);
  return summation;
};

/*
1. function declaration => function name(parameter){}
2. function expression => const name = function(parameter){}
3. arrow function => const name = (parameter) => {}
*/
