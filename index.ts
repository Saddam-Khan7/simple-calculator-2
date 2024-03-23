#! /usr/bin/env node

import inquirer from "inquirer";

const ans = await inquirer.prompt([
  { message: "enter first number", type: "number", name: "firstNumber" },
  { message: "enter second number", type: "number", name: "secondNumber" },
  {
    message: "select one of the operators to perform operation",
    type: "list",
    name: "operator",
    choices: ["addition", "subtraction", "multiplication", "division"],
  },
]);

// conditonal statement
if (ans.operator === "addition") {
  console.log(ans.firstNumber + ans.secondNumber);
} else if (ans.operator === "subtraction") {
  console.log(ans.firstNumber - ans.secondNumber);
} else if (ans.operator === "multiplication") {
  console.log(ans.firstNumber * ans.secondNumber);
} else if (ans.operator === "division") {
  console.log(ans.firstNumber / ans.secondNumber);
} else {
  console.log("plz select valid operator");
}
