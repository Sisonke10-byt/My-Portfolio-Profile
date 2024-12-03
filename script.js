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

//CHATBOT

// Define the chatbot's responses and keywords
const chatbotResponses = {
    "hello": "Hi there! How can I help you today?",
    "hi": "Hello there! How can I help you today?",
    "how are you": "Great!. how can i help you",
    "about me": "I am Sisonke Boyilani, a recent graduate with a diploma in Information Technology Management, currently working as a DevOps Intern. My focus is on automating processes, managing cloud infrastructures, and enhancing software delivery pipelines.",
    "skills": "I am proficient in HTML, CSS, JavaScript. My Soft Skills include communication, where I can effectively articulate complex concepts and ideas to both technical and non-technical stakeholders. I excel at problem-solving, approaching challenges creatively and finding efficient solutions. I'm highly adaptable to new situations and thrive in dynamic environments, which is vital in the ever-evolving field of DevOps. Furthermore, I am a strong advocate for teamwork, working collaboratively with colleagues to achieve common goals and streamline processes. On the Technical Skills side,",
    "education": "I graduated with a Diploma in Information Technology Management from Rosebank College.",
    "contact": "You can reach me at sisonkeboyilani@capaciti.org.za or call +27 765759788.",
    "cv": "You can download my CV by clicking the 'Download CV' button in the navigation menu. It contains more detailed information about my experience and education.",
    "portfolio": "You can view my portfolio and projects on GitHub and LinkedIn. I have worked on creating my porfolio profile so far",
    "projects": "Portfolio Profile bu currently working on a new project",
    "github": "Check out my GitHub profile [here](https://github.com/Sisonke10-byt) for my latest repositories and projects.",
    "linkedin": "Connect with me on LinkedIn [here](https://www.linkedin.com/in/sisonkesamkele).",
    "default": "Sorry, I didn't understand that. Can you ask something else?",
};

// Function to send user message to the chatbot
function sendMessage() {
    const userInput = document.getElementById('user-input').value.trim().toLowerCase();
    if (userInput !== "") {
        // Display user message in the chat window
        displayMessage(userInput, "user");

        // Generate bot response based on user input
        let botResponse = chatbotResponses[userInput] || chatbotResponses["default"];

        // Display bot response in the chat window
        displayMessage(botResponse, "chatbot");

        // Clear the input field after sending the message
        document.getElementById('user-input').value = "";
    }
}

// Function to display a message in the chat window
function displayMessage(message, sender) {
    const messagesDiv = document.getElementById('chatbot-messages');
    const messageDiv = document.createElement('div');
    
    // Create message content based on sender
    if (sender === "user") {
        messageDiv.classList.add('chatbot-message');
        messageDiv.textContent = "You: " + message;
    } else if (sender === "chatbot") {
        messageDiv.classList.add('chatbot-response');
        messageDiv.textContent = "Chatbot: " + message;
    }

    
    messagesDiv.appendChild(messageDiv);

    
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

document.getElementById('send-message').addEventListener('click', sendMessage);


document.getElementById('user-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});


document.getElementById('chatbot-icon').addEventListener('click', function() {
    document.getElementById('chatbot-section').style.display = 'block';
    document.getElementById('chatbot-icon').style.display = 'none';
});


document.getElementById('close-chatbot').addEventListener('click', function() {
    document.getElementById('chatbot-section').style.display = 'none';
    document.getElementById('chatbot-icon').style.display = 'block';
});


document.getElementById('emoji-icon').addEventListener('click', function() {
    const emojiPicker = document.getElementById('emoji-picker');
    emojiPicker.style.display = emojiPicker.style.display === 'block' ? 'none' : 'block';
});

document.querySelectorAll('.emoji').forEach(function(emoji) {
    emoji.addEventListener('click', function() {
        const selectedEmoji = emoji.getAttribute('data-emoji');
        const userInput = document.getElementById('user-input');
        userInput.value += selectedEmoji; 
        document.getElementById('emoji-picker').style.display = 'none'; 
        userInput.focus(); 
    });
});


document.getElementById('link-icon').addEventListener('click', function() {
    const link = prompt('Enter the URL to insert:');
    if (link) {
        const userInput = document.getElementById('user-input');
        userInput.value += `<a href="${link}" target="_blank">${link}</a>`; 
        userInput.focus(); 
    }
});


document.getElementById('send-message').addEventListener('click', function() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() !== '') {
        addMessage(userInput, 'user');
        document.getElementById('user-input').value = ''; 
    }
});


function addMessage(message, sender) {
    const messageContainer = document.createElement('div');
    messageContainer.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
    messageContainer.innerHTML = message;
    document.getElementById('chatbot-messages').appendChild(messageContainer);
    document.getElementById('chatbot-messages').scrollTop = document.getElementById('chatbot-messages').scrollHeight; // Scroll to bottom
}


document.getElementById('close-chatbot').addEventListener('click', function() {
    document.getElementById('chatbot-section').style.display = 'none';
});


