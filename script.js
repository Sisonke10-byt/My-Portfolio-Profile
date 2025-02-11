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

// Toggle the class 'active' to show/hide navLinks
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Toggle visibility
    hamburgerIcon.style.display = navLinks.classList.contains('active') ? 'none' : 'block';
    closeIcon.style.display = navLinks.classList.contains('active') ? 'block' : 'none';
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

const chatbotResponses = {
    "greeting": {
        keywords: ["hello", "hi", "hey", "👋", "good morning", "good evening"],
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
    "Location": {
        keywords: ["address", "where are you located", "province"],
        response: "I am currently located in the Gauteng province, specifically at 4757 Radebee Street, Extension 2, Orange Farm."
    },
    "Experience":{
        keywords: ["experience", "where do you currently work"],
        response: "Thanks for asking! While I’m a recent graduate and still building my experience, I am currently working as a DevOps intern. My academic background has also given me a strong foundation in programming, problem-solving, and teamwork. I’m excited to continue learning and applying my skills in the DevOps field. Feel free to ask more about my current projects or skills!"
    },
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
    "Sharp": {
        keywords: ["👍"],
        response: "Great! Do you have anymore questions that i can assist with?"
    },
    "laughing": {
        keywords: ["😂"],
        response: "Haha, I'm glad I could bring a smile to your face! Feel free to ask me anything about my projects or current internship!"
    },
    "sad": {
        keywords: ["😢"],
        response: "Oh no, I'm sorry to hear you're feeling down. If there's anything tech-related or career advice you need, I'm here to help! What's going on?"
    },
    "idea": {
        keywords: ["💡"],
        response: "Ah, you've got an idea! I love brainstorming new solutions. Whether it's a DevOps challenge or tech project, feel free to share, and let's work on it together!"
    },"No": {
        keywords: ["👎"],
        response: "Oh, not quite satisfied? Let me know how I can improve or assist you better. Whether it's my projects, skills, or something tech-related, I'm happy to help!"
    },
    "default": {
        keywords: [],
        response: "Sorry, I didn't understand that. Can you ask something else?"
    }
    
};

// Function to handle opening and closing the emoji picker
document.getElementById('emoji-icon').addEventListener('click', function() {
    const emojiPicker = document.getElementById('emoji-picker');
    emojiPicker.style.display = emojiPicker.style.display === 'block' ? 'none' : 'block'; // Toggle visibility
});

// Function to handle emoji selection
document.querySelectorAll('.emoji').forEach(function(emojiElement) {
    emojiElement.addEventListener('click', function() {
        const emoji = emojiElement.getAttribute('data-emoji');
        const userInput = document.getElementById('user-input');
        userInput.value += emoji; // Add the emoji to the input field
        document.getElementById('emoji-picker').style.display = 'none'; // Hide emoji picker after selection
    });
});

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

// Function to clear chat history
function clearHistory() {
    const messagesDiv = document.getElementById('chatbot-messages');
    messagesDiv.innerHTML = ""; // Clear the messages div
}

// Function to minimize the chatbot
function minimizeChatbot() {
    document.getElementById('chatbot-section').style.display = 'none';
    document.getElementById('chatbot-icon').style.display = 'block';
}

// Event listeners
document.getElementById('send-message').addEventListener('click', sendMessage);
document.getElementById('user-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

// Open the chatbot when clicking the chatbot icon
document.getElementById('chatbot-icon').addEventListener('click', function() {
    document.getElementById('chatbot-section').style.display = 'block';
    document.getElementById('chatbot-icon').style.display = 'none';
});

// Close the chatbot and clear history
document.getElementById('close-chatbot').addEventListener('click', function() {
    clearHistory(); // Clear the chat history
    document.getElementById('chatbot-section').style.display = 'none';
    document.getElementById('chatbot-icon').style.display = 'block';
});

// Minimize the chatbot (keep history intact)
document.getElementById('minimize-chatbot').addEventListener('click', function() {
    minimizeChatbot();
});

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