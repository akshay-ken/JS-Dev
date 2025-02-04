# Sales Report Generator

This project is a command-line interface (CLI) tool for generating sales reports based on user input.

## How to Use

1. Run the script using Node.js:
    ```sh
    node sales-report.js
    ```

2. Enter sales entries as JSON objects, one per line. Each entry should include an amount field. For example:
    ```json
    {"amount": 100}
    {"amount": 200}
    ```

3. Type `end` to finish entering data and generate the report.

## Example
```json
{"product": "Laptop", "amount": 999.99}
{"product": "Phone", "amount": 699.99}
{"product": "Laptop", "amount": 899.99}
{"product": "Monitor", "amount": 299.99}
end


## Dependencies
This project requires the [readline]module, which is included with Node.js.