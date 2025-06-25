// Get references to HTML elements
const gridContainer = document.getElementById('grid-container');
const blockIdInput = document.getElementById('block_id');
const colourIdInput = document.getElementById('colour_id');
const changeButton = document.getElementById('change_button');
const resetButton = document.getElementById('Reset');

// Function to create grid items dynamically
function createGrid() {
    for (let i = 1; i <= 9; i++) {
        const gridItem = document.createElement('div');
        gridItem.id = i; // Assign ID based on the number
        // Tailwind classes for styling (h-24, text-2xl, font-semibold, text-gray-700, rounded-lg)
        gridItem.className = 'grid-item h-24 text-2xl font-semibold text-gray-700 rounded-lg';
        gridItem.textContent = i; // Display the number inside the grid item
        gridContainer.appendChild(gridItem);
    }
}

// Function to reset all grid items to transparent background
function resetGridColors() {
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item => {
        item.style.backgroundColor = 'transparent'; // Set background to transparent
    });
}

// Event listener for the "Change Color" button
changeButton.addEventListener('click', () => {
    const blockId = parseInt(blockIdInput.value); // Get the entered block ID as an integer
    const color = colourIdInput.value.trim(); // Get the entered color and remove leading/trailing whitespace

    // Input validation
    if (isNaN(blockId) || blockId < 1 || blockId > 9) {
        alertBox("Please enter a valid Block ID between 1 and 9.");
        return;
    }
    if (!color) {
        alertBox("Please enter a color.");
        return;
    }

    // Reset all colors first
    resetGridColors();

    // Find the specific grid item and change its background color
    const targetGridItem = document.getElementById(String(blockId)); // Get the element by its ID
    if (targetGridItem) {
        targetGridItem.style.backgroundColor = color; // Apply the new color
    } else {
        alertBox("Grid item not found. This should not happen with valid IDs.");
    }
});

// Event listener for the "Reset" button
resetButton.addEventListener('click', () => {
    resetGridColors(); // Reset all grid colors
    blockIdInput.value = ''; // Clear the block ID input
    colourIdInput.value = ''; // Clear the color input
});

// Custom alert box implementation
function alertBox(message) {
    const existingAlert = document.getElementById('custom-alert');
    if (existingAlert) {
        existingAlert.remove(); // Remove existing alert if any
    }

    const alertDiv = document.createElement('div');
    alertDiv.id = 'custom-alert';
    // Tailwind classes for styling the alert (fixed, top-4, left-1/2, -translate-x-1/2, bg-blue-600, text-white, px-6, py-3, rounded-lg, shadow-xl, z-50, transition-all, duration-300, ease-in-out, transform, scale-0, opacity-0)
    alertDiv.className = 'fixed top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-xl z-50 transition-all duration-300 ease-in-out transform scale-0 opacity-0';
    alertDiv.textContent = message;

    document.body.appendChild(alertDiv);

    // Animate in
    setTimeout(() => {
        alertDiv.style.transform = 'translate(-50%, 0) scale(1)';
        alertDiv.style.opacity = '1';
    }, 10);

    // Animate out after 3 seconds
    setTimeout(() => {
        alertDiv.style.transform = 'translate(-50%, -20px) scale(0.9)';
        alertDiv.style.opacity = '0';
        setTimeout(() => {
            alertDiv.remove();
        }, 300); // Allow time for transition before removing
    }, 3000);
}

// Initialize the grid when the script loads
createGrid();

