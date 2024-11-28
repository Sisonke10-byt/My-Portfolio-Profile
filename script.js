/*
 * script.js
 * Author: Sisonke Boyilani
 * Description: Handles the functionality of the modal popup in the contact form.
 * Date: November 2024
 */

document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById("hamburger");
    const closeMenu = document.getElementById("closeMenu");
    const navRight = document.querySelector("nav .right");

    hamburger.addEventListener("click", function() {
        navRight.style.display = "flex";
        closeMenu.style.display = "block";
        hamburger.style.display = "none";
    });

    closeMenu.addEventListener("click", function() {
        navRight.style.display = "none";
        closeMenu.style.display = "none";
        hamburger.style.display = "block";
    });
});

// Get the popup and link elements
const popup = document.getElementById('contactPopup');
const closePopup = document.getElementById('closePopup');
const contactLink = document.getElementById('contactLink');

// When the user clicks the "Click here to view contact information" link, show the popup
contactLink.addEventListener('click', function() {
    popup.style.display = 'flex'; // Show the popup
});

// When the user clicks the close button, hide the popup
closePopup.addEventListener('click', function() {
    popup.style.display = 'none'; // Hide the popup
});

// Optional: Close the popup if the user clicks outside of the popup content
window.addEventListener('click', function(event) {
    if (event.target === popup) {
        popup.style.display = 'none'; // Hide the popup
    }
});




