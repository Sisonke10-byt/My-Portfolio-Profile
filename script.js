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


    // Initialize chatbot state
    let chatbotOpen = false; // Boolean to check if chatbot is open
    let chatHistory = []; // Array to store user and bot messages

    // DOM elements
    const chatbotPopup = document.getElementById("chatbotPopup");
    const chatbotButton = document.getElementById("chatbotButton");
    const chatbotBody = document.getElementById("chatbotBody");
    const userMessageInput = document.getElementById("userMessage");
    const sendButton = document.getElementById("sendButton");

    // Toggle the chatbot open/close
    function toggleChatbot() {
        chatbotOpen = !chatbotOpen; // Toggle state
        if (chatbotOpen) {
            chatbotPopup.style.display = "block"; // Show chatbot
            chatbotButton.style.display = "none"; // Hide the button
        } else {
            chatbotPopup.style.display = "none"; // Hide chatbot
            chatbotButton.style.display = "block"; // Show button
        }
    }

    // Update the send button based on input
    function updateSendButton() {
        // If the user types anything in the message input, enable the button
        if (userMessageInput.value.trim() !== "") {
            sendButton.disabled = false;
        } else {
            sendButton.disabled = true;
        }
    }

    // Function to handle message sending
    function sendMessage() {
        const userMessage = userMessageInput.value.trim();
        if (userMessage !== "") {
            // Add user message to chat history (array)
            chatHistory.push({ sender: "user", message: userMessage });
            updateChatbotUI();
            userMessageInput.value = ""; // Clear input field
            sendButton.disabled = true; // Disable the send button again

            // Simulate bot's reply after 1 second
            setTimeout(() => {
                const botReply = getBotReply(userMessage); // Get bot's response
                chatHistory.push({ sender: "bot", message: botReply });
                updateChatbotUI();
            }, 1000);
        }
    }

    // Update the UI to reflect the chat history
    function updateChatbotUI() {
        // Clear the previous chat
        chatbotBody.innerHTML = "";
        // Loop through the chat history and display messages
        chatHistory.forEach(chat => {
            const messageElement = document.createElement("p");
            messageElement.textContent = chat.message;
            messageElement.classList.add(chat.sender === "user" ? "user-message" : "bot-message");
            chatbotBody.appendChild(messageElement);
        });
        // Scroll to the bottom of the chat
        chatbotBody.scrollTop = chatbotBody.scrollHeight;
    }

    // Function to get the bot's response (can be enhanced with more logic)
    function getBotReply(userMessage) {
        // Basic control structures to generate bot response based on user input
        if (userMessage.toLowerCase().includes("hello")) {
            return "Hi there! How can I help you today?";
        } else if (userMessage.toLowerCase().includes("bye")) {
            return "Goodbye! Have a great day!";
        } else if (userMessage.toLowerCase().includes("help")) {
            return "Sure, what do you need help with?";
        } else {
            return "Sorry, I didn't understand that. Could you please rephrase?";
        }
    }

    // Close the chatbot if clicked outside the popup
    window.onclick = function(event) {
        if (event.target === chatbotPopup || event.target === chatbotButton) return; // Ignore clicks inside chatbot
        if (chatbotOpen) {
            toggleChatbot(); // Close chatbot when clicked outside
        }
    }



