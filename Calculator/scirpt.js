function parseExpression() {
    const displayValue = document.getElementById('display').textContent;
    const inputArray = displayValue.split(' ');

    const operatorIndex = inputArray.findIndex(item => ['+', '-', 'x', '/'].includes(item));
    const leftOperand = parseFloat(inputArray.slice(0, operatorIndex).join(''));
    const operator = inputArray[operatorIndex];
    const rightOperand = parseFloat(inputArray.slice(operatorIndex + 1).join(''));
    let res = 0

    if (operator === '+') {
        res = leftOperand + rightOperand;
    } else if (operator === '-') {
        res = leftOperand - rightOperand;
    } else if (operator === 'x') {
        res = leftOperand * rightOperand;
    } else if (operator === '÷') {
        res = leftOperand / rightOperand;
    } else {
        res = 'Error: Invalid operator';
    }
    const displayElement = document.getElementById('display');
    displayElement.textContent = res;
}

function appendButtonId(clickedButton) {
    const buttonId = clickedButton.id;
    const displayElement = document.getElementById('display');
    displayElement.textContent += buttonId + ' ';
}

function clearbtn(){
    const displayElement = document.getElementById('display');
    displayElement.textContent = '';
}