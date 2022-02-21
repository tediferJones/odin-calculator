
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

console.log(operate(2,"times",10))