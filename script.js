// Function to determine the DOM level of the element
function findDOMLevel() {
    // Get the element with id 'level'
    const element = document.getElementById('level');
    
    // If the element doesn't exist, return early
    if (!element) {
        alert("Element with id 'level' not found.");
        return;
    }

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
window.onload = findDOMLevel;
