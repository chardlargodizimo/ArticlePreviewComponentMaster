const shareOption = document.querySelector(".share-option");
const shareButton = document.querySelector(".button");

// Function to close the social menu
function closeMenu() {
    shareOption.classList.remove("active");
    shareButton.classList.remove("inverse");
}

function toggleMenu() {
    shareOption.classList.toggle("active");
    shareButton.classList.toggle("inverse");
}

// Event listener to toggle the social menu
document.body.addEventListener("click", (e) => {
    const clickedElement = e.target;
    // Find the nearest ancestor button element of the clicked element
    const parentButton = clickedElement.closest(".button");

    // Check if the clicked element is the button or its child (the SVG icon)
    if (parentButton || clickedElement.classList.contains("button")) {
        toggleMenu();
    } else if (!shareOption.contains(clickedElement)) {
        // If the click occurred outside of the menu and the button, close the menu
        closeMenu();
    }
});