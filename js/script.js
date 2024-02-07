// Define an object to map days to colors
var dayColors = {
    'Monday': '#e74c3c',
    'Tuesday': '#f39c12',
    'Wednesday': '#d35400',
    'Thursday': '#27ae60',
    'Friday': '#2ecc71',
    'Saturday': '#8e44ad',
    'Sunday': '#9b59b6'
};

var currentDay = null; // Variable to store the currently displayed day

function animateBox(day) {
    var box = document.getElementById('box');
    var button = document.querySelector('button');

    // Get the color corresponding to the clicked day
    var color = dayColors[day];

    // Calculate the target position to center the box
    var targetTop = window.innerHeight / 2 - box.offsetHeight / 2;
    var targetLeft = window.innerWidth / 2 - box.offsetWidth / 2;

    // Check if the clicked date is the same as the currently displayed date
    if (day !== currentDay) {
        // Transition the box off-screen
        box.style.top = '-100px'; // Move above the screen

        // Wait for 1 second before transitioning back onto the screen
        setTimeout(function() {
            // Change border color and move to target position
            box.style.borderColor = color;
            box.style.top = targetTop + 'px';
            box.style.left = targetLeft + 'px';
        }, 1000);

        // Update the current day after transition
        currentDay = day;
    } else {
        // If the clicked date is the same as the currently displayed date, just change the border color
        box.style.borderColor = color;
    }
}
