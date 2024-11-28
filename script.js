/*
 * script.js
 * Author: Sisonke Boyilani
 * Description: Handles the functionality of the modal popup in the contact form.
 * Date: November 2024
 */

"use strict";

// Declare global variables
let modal, btn, span;

// Helper function to open the modal
function openModal() {
    modal.style.display = "block";
}

// Helper function to close the modal
function closeModal() {
    modal.style.display = "none";
}

// Event listener for DOMContentLoaded to ensure all elements are available
document.addEventListener("DOMContentLoaded", function () {
    // Get the modal and button elements after the DOM is fully loaded
    modal = document.getElementById("contactModal");
    btn = document.getElementById("contactBtn");
    span = document.getElementById("closeBtn");

    // Add event listener to open the modal
    btn.addEventListener('click', openModal);

    // Add event listener to close the modal
    span.addEventListener('click', closeModal);

    // Close modal if clicked outside
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });
});
