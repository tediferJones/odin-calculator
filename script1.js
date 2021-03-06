
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

        if ((displayVar.textContent).length < 12) {
            displayVar.textContent = (displayVar.textContent).concat(button.textContent)
        }
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
            result = operate(Number(firstTerm), previousOperator, Number(secondTerm));
            secondTerm = null
            firstTerm = result
            resultCheck = String(result)

            if (resultCheck.length > 12) {
                displayVar.textContent = resultCheck.slice(0,12)
            } else if (resultCheck === "NaN" || resultCheck === "Infinity") {
                displayVar.textContent = "ERROR"
            } else {
                displayVar.textContent = result
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

    if (resultCheck.length > 12) {
        result = resultCheck.slice(0,12)
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

const bodyVar = document.querySelector("body")
bodyVar.addEventListener("keydown", (event) => {
    
    let nums = [0,1,2,3,4,5,6,7,8,9]
    if (event.key in nums) {
        if (chained === true) {
            displayVar.textContent = null;
            chained = false;
        }
        if ((displayVar.textContent).length < 12) {
            displayVar.textContent = (displayVar.textContent).concat(event.key)
        }
    }
})