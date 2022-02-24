
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
        return "error: didnt recognize operator"
    }
}

let firstTerm = null;
let secondTerm = null;
let currentOperator = null;
let result = null;
let chained = null;

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
        currentOperator = button.textContent;
        if (firstTerm === null) {
            firstTerm = displayVar.textContent;
            displayVar.textContent = null;
        } else {
            chained = true;
            secondTerm = displayVar.textContent;
            result = operate(Number(firstTerm), currentOperator, Number(secondTerm));//console.log("STEP 2")
            secondTerm = null
            firstTerm = result

            displayVar.textContent = result
        }
        //console.log("First Term is " + firstTerm)
        //console.log("operator is " + currentOperator)
        //console.log("second term is " + secondTerm)
        //displayVar.textContent = null;
    })
}

const equalsBtn = document.querySelector(".equals")
equalsBtn.addEventListener("click", () => {
    secondTerm = displayVar.textContent;
    result = operate(Number(firstTerm), currentOperator, Number(secondTerm))
    secondTerm = null;
    firstTerm = null;
    
    displayVar.textContent = result
})

//OLD POOPOO

function drawCalc() {
    let itemCounter = 0;
    let columns = 0;
    const chars = " 7410 852  963= /*-+";
    while (columns < 4) {
        const columnContainer = document.createElement("div");
        columnContainer.classList.add("columnContainer");

        let rows = 0;
        while (rows < 5) {
            const item = document.createElement("button");
            item.classList.add("btn");
            item.textContent = chars[itemCounter];
            item.addEventListener("click", () => {
                console.log(item.textContent)
                display.textContent = (display.textContent).concat(item.textContent)
            })
            columnContainer.appendChild(item);
            
            itemCounter++;
            rows++;
        }
        btnContainer.appendChild(columnContainer);
        columns++;
    }
}

//drawCalc()