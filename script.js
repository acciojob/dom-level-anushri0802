//your JS code here. If required.
// Function to determine the DOM level of the element
function findDOMLevel() {
    // Get the element with id 'level'
    const element = document.getElementById('level');

    // Initialize the level counter
    let level = 0;

    // Traverse up the DOM tree and count the parent elements
    while (element) {
        level++;
        element = element.parentElement; // Move to the parent element
    }

    // Display the result using alert
    alert("The level of the element is: " + level);
}

// Call the function when the page loads
findDOMLevel();
