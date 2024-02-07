let display = document.getElementById('display');

// Function to append value to the display
function appendToDisplay(value) {
    display.value += value;
}

// Function to clear the display
function clearDisplay() {
    display.value = '';
}

function calculateResult() {
    try {
        // Evaluate the expression entered and display the result
        display.value = eval(display.value);
    } catch (error) {
        // Display 'Error' in case of any errors during evaluation
        display.value = 'Error';
    }
}

// Function to calculate percentage
function calculatePercentage() {
    try {
        // Evaluate the percentage expression entered and display the result
        display.value = eval(display.value) / 100;
    } catch (error) {
        // Display 'Error' in case of any errors during evaluation
        display.value = 'Error';
    }
}

// Function to delete the last character
function deleteLastCharacter() {
    display.value = display.value.slice(0, -1);
}
