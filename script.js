// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Get the element with id "level"
    const targetElement = document.getElementById('level');

    if (!targetElement) {
        alert("Element with id 'level' not found.");
        return;
    }

    let level = 1; // Start counting from the element itself
    let currentElement = targetElement;

    // Traverse up through the parent nodes until reaching the <html> element
    while (currentElement.parentElement) {
        level++;
        currentElement = currentElement.parentElement;
    }

    // Display the result using alert
    alert("The level of the element is: " + level);
});
