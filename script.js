/*
 * script.js
 * Author: Sisonke Boyilani
 * Description: Handles the functionality of the modal popup in the contact form.
 * Date: November 2024
 */

//HAMBURGER MENU

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const closeIcon = document.getElementById('closeIcon');
    const navLinks = document.getElementById('navLinks');
    const hamburgerIcon = document.getElementById('hamburgerIcon');

    hamburger.addEventListener('click', function() {
        navLinks.classList.add('active'); 
        hamburgerIcon.style.display = 'none'; 
        closeIcon.style.display = 'block'; 
    });

    
    closeIcon.addEventListener('click', function() {
        navLinks.classList.remove('active'); 
        hamburgerIcon.style.display = 'block'; 
        closeIcon.style.display = 'none'; 
    });
});

//CONTACTS POPUP

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

// chatbot.js

// Declare variables for the chatbot window and icon
const chatbotIcon = document.getElementById("chatbot-icon");
const chatbotWindow = document.getElementById("chatbot-window");
const closeButton = document.getElementById("close-chatbot");
const chatbotMessage = document.getElementById("chatbot-message");

// Function to toggle the chatbot window visibility
function toggleChatbot() {
    // Use control structures to toggle the chatbot window
    if (chatbotWindow.style.display === "none" || chatbotWindow.style.display === "") {
        chatbotWindow.style.display = "block"; // Show the chatbot window
    } else {
        chatbotWindow.style.display = "none"; // Hide the chatbot window
    }
}

// Function to close the chatbot window
function closeChatbot() {
    chatbotWindow.style.display = "none"; // Hide the chatbot window
}

// Event listener for opening the chatbot
chatbotIcon.addEventListener("click", toggleChatbot);

// Event listener for closing the chatbot
closeButton.addEventListener("click", closeChatbot);

// Function to change the chatbot message
function changeChatbotMessage(newMessage) {
    // Checking if the newMessage is a string (data type check)
    if (typeof newMessage === "string") {
        chatbotMessage.innerText = newMessage; // Update the message
    } else {
        console.error("The message must be a string.");
    }
}

// Example of updating the message (this can be expanded further)
setTimeout(() => {
    changeChatbotMessage("We are here to help! Ask me anything.");
}, 5000);



