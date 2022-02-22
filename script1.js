
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
    if (operator === "plus") {
        return add(firstTerm, secondTerm);
    } else if (operator === "minus") {
        return subtract(firstTerm, secondTerm);
    } else if (operator === "times") {
        return multiply(firstTerm, secondTerm);
    } else if (operator === "over") {
        return divide(firstTerm, secondTerm);
    } else {
        return "error: didnt recognize operator"
    }
}

//console.log(operate(2,"times",10))


const containerVar = document.querySelector("#container");

const display = document.createElement("div");
display.classList.add("displayContainer");
display.style.backgroundColor = "gray";

const btnContainer = document.createElement("div");
btnContainer.classList.add("btnContainer");

containerVar.appendChild(display);
containerVar.appendChild(btnContainer);

function drawCalc() {
    let itemCounter = 0;
    let columns = 0;
    const chars = " 7410 852  963= /*-+";
    while (columns < 4) {
        const columnContainer = document.createElement("div");
        columnContainer.classList.add("columnContainer");

        let rows = 0;
        while (rows < 5) {
            const item = document.createElement("div");
            item.classList.add("btn");
            item.textContent = chars[itemCounter];
            columnContainer.appendChild(item);
            
            itemCounter++;
            rows++;
        }
        btnContainer.appendChild(columnContainer);
        columns++;
    }
}

drawCalc()