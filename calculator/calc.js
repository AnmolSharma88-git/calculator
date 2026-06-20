let display = document.getElementById("display");

// numbers

let one = document.getElementById("one");
one.addEventListener("click", function () {

    if (display.value == "0") {
        display.value = "1";
    } else {
        display.value += "1";
    }
});

let two = document.getElementById("two");
two.addEventListener("click", function () {

    if (display.value == "0") {
        display.value = "2";
    } else {
        display.value += "2";
    }
});

let three = document.getElementById("three");
three.addEventListener("click", function () {

    if (display.value == "0") {
        display.value = "3";
    } else {
        display.value += "3";
    }
});

let four = document.getElementById("four");
four.addEventListener("click", function () {

    if (display.value == "0") {
        display.value = "4";
    } else {
        display.value += "4";
    }
});

let five = document.getElementById("five");
five.addEventListener("click", function () {

    if (display.value == "0") {
        display.value = "5";
    } else {
        display.value += "5";
    }
});

let six = document.getElementById("six");
six.addEventListener("click", function () {

    if (display.value == "0") {
        display.value = "6";
    } else {
        display.value += "6";
    }
});

let seven = document.getElementById("seven");
seven.addEventListener("click", function () {

    if (display.value == "0") {
        display.value = "7";
    } else {
        display.value += "7";
    }
});

let eight = document.getElementById("eight");
eight.addEventListener("click", function () {

    if (display.value == "0") {
        display.value = "8";
    } else {
        display.value += "8";
    }
});

let nine = document.getElementById("nine");
nine.addEventListener("click", function () {

    if (display.value == "0") {
        display.value = "9";
    } else {
        display.value += "9";
    }
});

let zero = document.getElementById("zero");
zero.addEventListener("click", function () {

    if (display.value != "0") {
        display.value += "0";
    }
});

let doubleZero = document.getElementById("doubleZero");
doubleZero.addEventListener("click", function () {

    if (display.value != "0") {
        display.value += "00";
    }
    
});

// CHECK DID NOT ALLLOWED DOT AFTER ANY OPR 
let dot = document.getElementById("dot");
dot.addEventListener("click", function () {
    let lastChar = display.value[display.value.length - 1];

    if (display.value == "0") {
        display.value = "0.";
    } 

    else if (
        lastChar == "+" ||
        lastChar == "-" ||
        lastChar == "*" ||
        lastChar == "/" ||
        lastChar == "%"
    ) {
        return;
    }

    else  {
        display.value += ".";
    }

    
});

function changeOperator(newOpr) {

    let lastChar = display.value[display.value.length - 1];

    if (
        lastChar == "+" ||
        lastChar == "-" ||
        lastChar == "*" ||
        lastChar == "/" ||
        lastChar == "%"
    ) {
        display.value = display.value.slice(0, -1) + newOpr;
    }
    else {
        display.value += newOpr;
    }
}

// operators

let plus = document.getElementById("plus");

plus.addEventListener("click", function () {

    if (display.value == "") {
        return;
    }

    let lastChar = display.value[display.value.length - 1];

    changeOperator("+");
});

// minus

let minus = document.getElementById("minus");

minus.addEventListener("click", function () {

    if (display.value == "") {
        return;
    }

    let lastChar = display.value[display.value.length - 1];

    changeOperator("-");
});

// multiply

let multiply = document.getElementById("multiply");

multiply.addEventListener("click", function () {

    let lastChar = display.value[display.value.length - 1];

    changeOperator("*");
});

// divide

let divide = document.getElementById("divide");

divide.addEventListener("click", function () {

    let lastChar = display.value[display.value.length - 1];
    changeOperator("/");
});

// modulus

let percent = document.getElementById("percent");

percent.addEventListener("click", function () {
    changeOperator("%");
});

// delete

del.addEventListener("click", function () {

    display.value = display.value.slice(0, -1);

    if (display.value == "") {
        display.value = "0";
    }
});

// clear

let ac = document.getElementById("ac");

ac.addEventListener("click", function () {
    display.value = "0";
});

// result

let equal = document.getElementById("equal");

equal.addEventListener("click", function () {

    let expression = display.value;

    let numbers = [];
    let operators = [];

    let num = "";

    for (let i = 0; i < expression.length; i++) {

        let ch = expression[i];

        if (
            ch == "+" ||
            ch == "-" ||
            ch == "*" ||
            ch == "/" ||
            ch == "%"
        ) {

            numbers[numbers.length] = Number(num);
            operators[operators.length] = ch;

            num = "";
        }
        else {

            num += ch;
        }
    }

    numbers[numbers.length] = Number(num);

    console.log(numbers);
    console.log(operators);

    try {

        let result = eval(expression);

        display.value = result;

    } catch {

        display.value = "Error";
    }
});