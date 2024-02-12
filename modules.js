// console.log(arguments);
// console.log(require("module").warpper);

// const Calculator = require("./testModuleOne");

// const calOne = new Calculator();
// console.log("Add: ", calOne.add(1, 2));
// console.log("Mul: ", calOne.multiply(1, 2));
// console.log("Div: ", calOne.divide(1, 2));

const Calc = require("./testModuleTwo");
const { add, mul, div } = new Calc();

console.log("Add: ", add(1, 2));
console.log("Mul: ", mul(1, 2));
console.log("Div: ", div(1, 2));
