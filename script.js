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
const chatbotIcon = document.getElementById("chatbot-icon");
const chatbotWindow = document.getElementById("chatbot-window");
const closeButton = document.getElementById("close-chatbot");
const chatbotMessage = document.getElementById("chatbot-message");


function toggleChatbot() {
    
    if (chatbotWindow.style.display === "none" || chatbotWindow.style.display === "") {
        chatbotWindow.style.display = "block"; 
    } else {
        chatbotWindow.style.display = "none"; 
    }
}


function closeChatbot() {
    chatbotWindow.style.display = "none";
}


chatbotIcon.addEventListener("click", toggleChatbot);


closeButton.addEventListener("click", closeChatbot);

function changeChatbotMessage(newMessage) {
    
    if (typeof newMessage === "string") {
        chatbotMessage.innerText = newMessage; 
    } else {
        console.error("The message must be a string.");
    }
}


setTimeout(() => {
    changeChatbotMessage("We are here to help! Ask me anything.");
}, 5000);



