/*
 * script.js
 * Author: Sisonke Boyilani
 * Description: Handles the functionality of the modal popup in the contact form.
 * Date: November 2024
 */

// Wait for the DOM to be fully loaded before attaching event listeners
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const closeIcon = document.getElementById('closeIcon');
    const navLinks = document.getElementById('navLinks');
    const hamburgerIcon = document.getElementById('hamburgerIcon');

    // Toggle the navigation menu and icon when the hamburger icon is clicked
    hamburger.addEventListener('click', function() {
        navLinks.classList.add('active'); // Show the mobile menu
        hamburgerIcon.style.display = 'none'; // Hide the hamburger icon
        closeIcon.style.display = 'block'; // Show the close icon
    });

    // Close the navigation menu and icon when the close icon is clicked
    closeIcon.addEventListener('click', function() {
        navLinks.classList.remove('active'); // Hide the mobile menu
        hamburgerIcon.style.display = 'block'; // Show the hamburger icon
        closeIcon.style.display = 'none'; // Hide the close icon
    });
});



const popup = document.getElementById('contactPopup');
const closePopup = document.getElementById('closePopup');
const contactLink = document.getElementById('contactLink');


contactLink.addEventListener('click', function() {
    popup.style.display = 'flex'; 
});


closePopup.addEventListener('click', function() {
    popup.style.display = 'none'; 
});


window.addEventListener('click', function(event) {
    if (event.target === popup) {
        popup.style.display = 'none';
    }
});




