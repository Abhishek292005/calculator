function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

let button = document.querySelector("#btn");

button.addEventListener("click", function () {

    let num1 = Number(document.querySelector("#num1").value);
    let num2 = Number(document.querySelector("#num2").value);
    let operator = document.querySelector("#operator").value;

    let result;

    if (operator === "+") {
        result = add(num1, num2);
    }
    else if (operator === "-") {
        result = subtract(num1, num2);
    }
    else if (operator === "*") {
        result = multiply(num1, num2);
    }
    else if (operator === "/") {

        if (num2 === 0) {
            result = "Cannot divide by zero";
        }
        else {
            result = divide(num1, num2);
        }

    }
    else {
        result = "Invalid Operator";
    }

    document.querySelector("#result").innerText = result;

});