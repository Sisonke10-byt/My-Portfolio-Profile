/*
 * script.js
 * Author: Sisonke Boyilani
 * Description: Handles the functionality of the modal popup in the contact form.
 * Date: November 2024
 */

document.addEventListener("DOMContentLoaded", function() {
    // Get the hamburger button, close button, and the nav menu
    const hamburger = document.getElementById("hamburger");
    const closeMenu = document.getElementById("closeMenu");
    const navRight = document.querySelector("nav .right");

    // Open the menu when the hamburger icon is clicked
    hamburger.addEventListener("click", function() {
        navRight.style.display = "flex";
        closeMenu.style.display = "block";
        hamburger.style.display = "none";
    });

    // Close the menu when the close icon is clicked
    closeMenu.addEventListener("click", function() {
        navRight.style.display = "none";
        closeMenu.style.display = "none";
        hamburger.style.display = "block";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const contactLink = document.getElementById("contactLink");
    const contactPopup = document.getElementById("contactPopup");
    const closePopup = document.getElementById("closePopup");

    // Open the popup when the link is clicked
    contactLink.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default link behavior
        contactPopup.style.display = "block";
    });

    // Close the popup when the close button is clicked
    closePopup.addEventListener("click", function() {
        contactPopup.style.display = "none";
    });

    // Close the popup if the user clicks anywhere outside the popup
    window.addEventListener("click", function(event) {
        if (event.target === contactPopup) {
            contactPopup.style.display = "none";
        }
    });
});





