// Global Variables
let historyDisplay = document.getElementById('history');
let resultDisplay = document.getElementById('result');

let currentInput = '';
let result = null;

// Append numbers
function appendNumber(number) {
  currentInput += number;
  updateDisplay();
}

// Append operator
function appendOperator(operator) {
  if (currentInput === '') return;
  const lastChar = currentInput.slice(-1);
  if (['+', '-', '*', '/'].includes(lastChar)) return;
  currentInput += operator;
  updateDisplay();
}

// Clear input
function clearDisplay() {
  currentInput = '';
  result = null;
  updateDisplay();
}

// Perform calculation
function calculate() {
  try {
    result = eval(currentInput); // ⚠️ eval is used here for simplicity; avoid in production
    historyDisplay.textContent = currentInput;
    resultDisplay.textContent = result;
    currentInput = result.toString();
  } catch (e) {
    resultDisplay.textContent = "Error";
  }
}

// Update UI
function updateDisplay() {
  resultDisplay.textContent = currentInput || "0";
}
