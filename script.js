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

document.addEventListener("DOMContentLoaded", function() {
    const contactLink = document.getElementById("contactLink");
    const contactPopup = document.getElementById("contactPopup");
    const closePopup = document.getElementById("closePopup");

    
    contactLink.addEventListener("click", function(event) {
        event.preventDefault();
        contactPopup.style.display = "block";
    });

    closePopup.addEventListener("click", function() {
        contactPopup.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target === contactPopup) {
            contactPopup.style.display = "none";
        }
    });
});





