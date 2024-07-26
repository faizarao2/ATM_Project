#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 2002;
console.log(`Pin is ${myPin}`);
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "enter your pin"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("correct pin code.!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "please select option",
            choices: ["withdrawal", "check balance", "fastCash"]
        }
    ]);
    console.log(operationAns);
    if (operationAns.operation === "withdrawal") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "enter your amount"
            }
        ]);
        // =, -=, +=
        if (myBalance >= amountAns.amount) {
            console.log(myBalance -= amountAns.amount);
            console.log(`your remaining balance is ${myBalance}`);
        }
        else {
            console.log("Insufficiant balance");
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log(`Your remaining balance is: ${myBalance} `);
    }
    else if (operationAns.operation === "fastCash") {
        let amountAnswer = await inquirer.prompt([
            {
                name: "amounts",
                type: "list",
                message: "select your amount",
                choices: [500, 1000, 5000, 10000]
            }
        ]);
        // =, -=, +=
        myBalance -= amountAnswer.amounts;
        console.log(`your remaining balance is: ${myBalance}`);
    }
}
else {
    console.log("Incorrect pin number");
}
