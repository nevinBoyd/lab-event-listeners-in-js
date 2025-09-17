// Handle Button Clicks

// Function to change the background color when a button is clicked
function changeBackgroundColor() {
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)
  const color = `rgb(${r}, ${g}, ${b})`
  document.body.style.backgroundColor = color
  // Implement the function to change background color
}

// Function to reset the background color when the body is double-clicked
function resetBackgroundColor() {
  document.body.style.backgroundColor = ""
  // Implement the function to reset background color
}

// Capture Keyboard Input

// Function to display the key pressed by the user
function displayKeyPress(event) {
  const keyDisplay = document.getElementById("keyPressDisplay")
  if (keyDisplay) {
    keyDisplay.textContent = `Key pressed: ${event.key}`
  }
  // Implement the function to display key pressed
}

// Process Text Input

// Function to display user input in real-time
function displayUserInput() {
  const inputValue = document.getElementById("textInput").value
  const inputDisplay = document.getElementById("textInputDisplay")
  if (inputDisplay) {
    inputDisplay.textContent = `You typed: ${inputValue}`
  }
  // Implement the function to display user input
}

// Attach Event Listeners
function setupEventListeners() {
  // Attach event listener to change background color when the button is clicked
  document
    .getElementById('changeColorButton')
    .addEventListener('click', changeBackgroundColor)

  // Attach event listener to reset background color when the body is double-clicked
  document
    .getElementById('resetColorButton')
    .addEventListener('dblclick', resetBackgroundColor)

  const changeColorButton = document.getElementById('changeColorButton');

  // Attached event listener from read me for mouse over 
  changeColorButton.addEventListener('mouseover', () => {
    changeColorButton.style.backgroundColor = 'yellow';
  });
  // Attached event listener from read me for mouse out
  changeColorButton.addEventListener('mouseout', () => {
    changeColorButton.style.backgroundColor = 'initial'; // resets to default
  });

  // Attach event listener to display key pressed when a key is pressed down
  document.addEventListener('keydown', displayKeyPress)

  // Attach event listener to display user input in real-time as they type
  document.getElementById('textInput').addEventListener('input', displayUserInput)
}

// Initialize event listeners when the DOM is loaded
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', setupEventListeners)
}

module.exports = {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  displayUserInput,
  setupEventListeners,
}