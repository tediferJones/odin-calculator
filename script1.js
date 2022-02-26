
function add(firstTerm, secondTerm) {
    return firstTerm + secondTerm;
}

function subtract(firstTerm, secondTerm) {
    return firstTerm - secondTerm
}

function multiply(firstTerm, secondTerm) {
    return firstTerm * secondTerm
}

function divide(firstTerm, secondTerm) {
    return firstTerm / secondTerm
}

function operate(firstTerm, operator, secondTerm) {
    if (operator === "+") {
        return add(firstTerm, secondTerm);
    } else if (operator === "-") {
        return subtract(firstTerm, secondTerm);
    } else if (operator === "*") {
        return multiply(firstTerm, secondTerm);
    } else if (operator === "/") {
        return divide(firstTerm, secondTerm);
    } else {
        return "ERROR"
    }
}

let firstTerm = null;
let secondTerm = null;
let currentOperator = null;
let previousOperator = null;
let result = null;
let chained = null;
let decimalPresent = false;

const displayVar = document.querySelector("#displayContainer")
displayVar.textContent = null

const numBtns = document.querySelectorAll(".number");
for (const button of numBtns) {
    button.addEventListener("click", () => {
        if (chained === true) {
            displayVar.textContent = null;
            chained = false;
        }
        displayVar.textContent = (displayVar.textContent).concat(button.textContent)
    })
}

const funcBtns = document.querySelectorAll(".function")
for (const button of funcBtns) {
    button.addEventListener("click", () => {
        previousOperator = currentOperator
        currentOperator = button.textContent;
        decimalPresent = false;

        if (firstTerm === null) {
            firstTerm = displayVar.textContent;
            displayVar.textContent = null;
        } else {
            chained = true;
            secondTerm = displayVar.textContent;
            hiddenFirstTerm = firstTerm
            hiddenSecondTerm = secondTerm
            result = operate(Number(firstTerm), previousOperator, Number(secondTerm));//console.log("STEP 2")
            secondTerm = null
            firstTerm = result

            displayVar.textContent = result

            if (displayVar.textContent === ("NaN") || displayVar.textContent === ("Infinity")) {
                displayVar.textContent = "ERROR"
            }
        }
    })
}

const decimalBtn = document.querySelector(".decimal")
decimalBtn.addEventListener("click", () => {
    if (decimalPresent === false) {
        displayVar.textContent = (displayVar.textContent).concat(".")
        decimalPresent = true;
    }
})

const equalsBtn = document.querySelector(".equals")
equalsBtn.addEventListener("click", () => {
    secondTerm = displayVar.textContent;
    result = operate(Number(firstTerm), currentOperator, Number(secondTerm))
    secondTerm = null;
    firstTerm = null;
    decimalPresent = false;
    chained = true;
    resultCheck = String(result)

    if (resultCheck.length > 10) {
        result = resultCheck.slice(0,5)
    }  
    displayVar.textContent = result
    

    if (displayVar.textContent === ("NaN") || displayVar.textContent === ("Infinity")) {
        displayVar.textContent = "ERROR"
    }
})

const clearBtn = document.querySelector(".clear")
clearBtn.addEventListener("click", () => {
    firstTerm = null;
    secondTerm = null;
    currentOperator = null;
    previousOperator = null;
    result = null;
    chained = null;
    decimalPresent = false;
    displayVar.textContent = null;
})

const backBtn = document.querySelector(".backspace")
backBtn.addEventListener("click", () => {
    if ((displayVar.textContent).length > 0) {
        displayVar.textContent = (displayVar.textContent).slice(0,-1)
    }
})