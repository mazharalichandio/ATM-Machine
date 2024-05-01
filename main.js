import inquirer from "inquirer";
import chalk from "chalk";
let myBalance = 10000; //Dollar
let myPin = 2345;
console.log(chalk.green("\n \tWelcome dear Mazhar -ATM Machine\n"));
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: chalk.yellow("enter your pin code"),
        type: "number"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log(chalk.greenBright("Correct pin code!!!"));
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["Withdraw", "chek balance"]
        }
    ]);
    //console.log(operationAns);
    if (operationAns.operation === "Withdraw") {
        let WithdrawAns = await inquirer.prompt([
            {
                name: "WithdrawMethod",
                message: "Select a withdrawal method",
                type: "list",
                choices: ["Fast Cash", "Enter Ammount"]
            }
        ]);
        if (WithdrawAns.WithdrawMethod === "Fast Cash") {
            let FastCashAns = await inquirer.prompt([
                {
                    name: "FastCash",
                    message: "Select Amount:",
                    type: "list",
                    choices: [1000, 2000, 5000, 10000, 20000]
                }
            ]);
            if (FastCashAns.FastCash > myBalance) {
                console.log(chalk.red("Innsufficient Balance"));
            }
            else {
                myBalance -= FastCashAns.FastCash;
                console.log(`${FastCashAns.FastCash} Withdraw Successfuly`);
                console.log(`Your Remaining Balance is:${myBalance}`);
            }
        }
        else if (WithdrawAns.WithdrawMethod === "Enter Ammount") {
            let AmountAns = await inquirer.prompt([
                {
                    name: "amount",
                    message: "enter your amount",
                    type: "number",
                }
            ]);
            if (AmountAns.amount > myBalance) {
                console.log("Innsufficient Balance");
            }
            else {
                myBalance -= AmountAns.amount;
                console.log(`${AmountAns.amount} Withdraw Successfuly`);
                console.log(`Your Remaining Balance is:${myBalance}`);
            }
        }
    }
    else if (operationAns.operation === "chek balance") {
        console.log(`your balance is: ${myBalance}`);
    }
}
else {
    console.log(chalk.red("Incorrect pin Number, Try Again!"));
}
