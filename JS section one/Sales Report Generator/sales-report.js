const readline = require('readline'); // using read line module for CLI functionality

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}); // initializing readline interface

const salesData = [];

rl.setPrompt('Enter sales entries (JSON objects), one per line. Type "end" to finish: '); // setting prompt to tell user to enter data in cli
rl.prompt(); // showing prompt to user

rl.on('line', (jsonStr) => {
    if (jsonStr.toLowerCase() === 'end') {
        rl.close();
        return;
    }
    let arrayData = JSON.parse(jsonStr); // parsing json string to object
    salesData.push(arrayData) // adding that data to array
}); // taking data after pressing enter key


rl.on('close', () => {
    let totalProducts = 0; // to count total number of products
    let totalAmount = 0; // to count total sales amount

    salesData.forEach((value, index) => {
        totalAmount += value.amount; // adding amount to totalProducts variable
        totalProducts += 1; // adding +1 to count number of prodcuts.
    }) // using forEach loop on array of objects to count each value and item;
    console.log(
`---Start---
Total Sales: ${totalAmount}$
Total Number Of Products: ${totalProducts}
---End---`);
});
