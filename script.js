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
    "greeting": {
        keywords: ["hello", "hi", "hey", "howdy", "good morning", "good evening"],
        response: "Hey! What can I do for you?"
    },
    "how_are_you": {
        keywords: ["how are you", "how's it going", "how are things", "what's up"],
        response: "Great! How can I help you?"
    },
    "about_me": {
        keywords: ["about you", "who are you", "tell me about yourself"],
        response: "I am Sisonke Boyilani, a recent graduate with a diploma in Information Technology Management, currently working as a DevOps Intern."
    },

    "Experience":[
        keywords: ["experience"],
        response: ""
    ],
    "skills": {
        keywords: ["skills", "what can you do", "what are your skills"],
        response: "I am proficient in HTML, CSS, JavaScript, and more. I have strong communication and problem-solving skills, as well as technical expertise in DevOps practices."
    },
    "education": {
        keywords: ["education", "where did you study", "your background"],
        response: "I graduated with a Diploma in Information Technology Management from Rosebank College."
    },
    "contact": {
        keywords: ["contact", "reach me", "how to contact"],
        response: "You can reach me at sisonkeboyilani@capaciti.org.za or call +27 765759788."
    },
    "cv": {
        keywords: ["cv", "resume", "curriculum vitae", "download cv"],
        response: "You can download my CV by clicking the 'Download CV' button in the navigation menu."
    },
    "portfolio": {
        keywords: ["portfolio", "projects", "portfolio profile", "what have you worked on"],
        response: "You can view my portfolio and projects on GitHub and LinkedIn. I'm currently working on a new project."
    },
    "github": {
        keywords: ["github", "github profile", "repositories"],
        response: "Check out my GitHub profile [here](https://github.com/Sisonke10-byt) for my latest repositories and projects."
    },
    "linkedin": {
        keywords: ["linkedin", "connect with me", "social media"],
        response: "Connect with me on LinkedIn [here](https://www.linkedin.com/in/sisonkesamkele)."
    },
    "default": {
        keywords: [],
        response: "Sorry, I didn't understand that. Can you ask something else?"
    }
};

// Function to send the user message to the chatbot
function sendMessage() {
    const userInput = document.getElementById('user-input').value.trim().toLowerCase();
    if (userInput !== "") {
        // Display user message
        displayMessage(userInput, "user");

        // Generate bot response based on keywords










        let botResponse = getBotResponse(userInput);

        // Display bot response
        displayMessage(botResponse, "chatbot");

        // Clear the input field after sending the message
        document.getElementById('user-input').value = "";
    }
}

// Function to find bot response based on user input
function getBotResponse(userInput) {
    // Check if any response category matches based on keywords
    for (const category in chatbotResponses) {
        const { keywords, response } = chatbotResponses[category];
        
        // Check if the user's input contains any of the keywords
        if (keywords.some(keyword => userInput.includes(keyword.toLowerCase()))) {
            return response;
        }
    }
    return chatbotResponses["default"].response;
}

// Function to display a message in the chat window
function displayMessage(message, sender) {
    const messagesDiv = document.getElementById('chatbot-messages');
    const messageDiv = document.createElement('div');
    
    if (sender === "user") {
        messageDiv.classList.add('chatbot-message');
        messageDiv.textContent = "You: " + message;
    } else if (sender === "chatbot") {
        messageDiv.classList.add('chatbot-response');
        messageDiv.textContent = "Chatbot: " + message;
    }

    messagesDiv.appendChild(messageDiv);
    messagesDiv.scrollTop = messagesDiv.scrollHeight; // Scroll to bottom
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