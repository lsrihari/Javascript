const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserNumberInput() {
  return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}
function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
    const logEntry={
        operation:operationIdentifier,
        prevResult=prevResult,
        number=operationNumber,
        result=newResult
    }
    logEntries.push(logEntry);
    console.log(logEntries);
}

function add() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult += enteredNumber;
  //   currentResult = currentResult + + userInput.value;
  //   currentResult = currentResult + parseInt( userInput.value);
  createAndWriteOutput("+", initialResult, enteredNumber);
}

function subtract() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult -= enteredNumber;
  createAndWriteOutput("-", initialResult, enteredNumber);
}

function multiply() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult *= enteredNumber;
  createAndWriteOutput("*", initialResult, enteredNumber);
}

function division() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult /= enteredNumber;
  createAndWriteOutput("/", initialResult, enteredNumber);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", division);

// currentResult = add(1,2)
// let calculationDescription=`(${currentResult}+10)*3/2-1`;
