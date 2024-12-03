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

// Declare variables for the chatbot and icon
let chatlog = document.getElementById('chatlog');
let userInput = document.getElementById('userInput');
let chatbot = document.getElementById('chatbot');
let chatbotIcon = document.getElementById('chatbotIcon');

// Sample profile data
const profileData = {
    name: "Sisonke Boyilani",
    role: "DevOps Engineer Intern",
    skills: ["HTML", "CSS", "JavaScript", "DevOps", "Cloud Computing"],
    education: {
        degree: "Diploma in Information Technology Management",
        institution: "Rosebank College",
        year: "2020 - 2023"
    },
    contact: {
        email: "sisonkeboyilani@capaciti.org.za",
        phone: "+27 765759788",
        address: "4757 Radebee Street, Ext2, Orange Farm"
    }
};

// Function to display chat messages
function displayMessage(message, sender) {
    let div = document.createElement("div");
    div.textContent = sender + ": " + message;
    div.classList.add(sender);
    chatlog.appendChild(div);
    chatlog.scrollTop = chatlog.scrollHeight; // Scroll to bottom
}

// Function to process the user's input
function processInput() {
    let inputText = userInput.value.trim().toLowerCase();

    if (inputText === "") {
        return; // If empty input, do nothing
    }

    // Display the user's message
    displayMessage(inputText, "User");

    // Respond based on the user's input using control structures
    let response = "";

    // Simple control structure to respond to user input
    if (inputText.includes("name")) {
        response = `My name is ${profileData.name}.`;
    } else if (inputText.includes("role")) {
        response = `I am an ${profileData.role}.`;
    } else if (inputText.includes("skills")) {
        response = `I am skilled in: ${profileData.skills.join(", ")}.`;
    } else if (inputText.includes("education")) {
        response = `I studied ${profileData.education.degree} at ${profileData.education.institution} from ${profileData.education.year}.`;
    } else if (inputText.includes("contact")) {
        response = `You can reach me via email at ${profileData.contact.email}, or call me at ${profileData.contact.phone}.`;
    } else {
        response = "I'm sorry, I didn't understand that. Try asking about my name, role, skills, or education.";
    }

    // Display the chatbot's response
    displayMessage(response, "Chatbot");

    // Clear the input field
    userInput.value = "";
}

// Function to toggle chatbot visibility
function toggleChatbot() {
    if (chatbot.style.display === "none" || chatbot.style.display === "") {
        chatbot.style.display = "block"; // Show the chatbot
        chatbotIcon.style.display = "none"; // Hide the icon
    } else {
        chatbot.style.display = "none"; // Hide the chatbot
        chatbotIcon.style.display = "block"; // Show the icon
    }
}


// Close the chatbot when the close button is clicked
function closeChatbot() {
    const chatbot = document.getElementById('chatbot');
    chatbot.style.display = "none"; // Hide the chatbot
}

// Process the user input (e.g., display the message in chatlog)
function processInput() {
    const userInput = document.getElementById('userInput').value;
    if (userInput) {
        const chatlog = document.getElementById('chatlog');
        const userMessage = document.createElement('div');
        userMessage.textContent = "You: " + userInput;
        chatlog.appendChild(userMessage);
        document.getElementById('userInput').value = ''; // Clear input after sending

        // Simulate a chatbot response
        const botResponse = document.createElement('div');
        botResponse.textContent = "Bot: " + getBotResponse(userInput);
        chatlog.appendChild(botResponse);

        chatlog.scrollTop = chatlog.scrollHeight; // Scroll to the bottom of the chatlog
    }
}

// Simple function to simulate bot response
function getBotResponse(userInput) {
    const responses = {
        "hello": "Hi there! How can I help you today?",
        "who are you": "I'm Sisonke, a DevOps Intern passionate about automation and cloud infrastructure.",
        "what are your skills": "I'm skilled in HTML, CSS, JavaScript, and DevOps practices.",
        "what is your background": "I recently graduated with a Diploma in Information Technology Management from Rosebank College. My studies covered IT infrastructure, systems management, and network administration.",
        "where did you study": "I studied Information Technology Management at Rosebank College from 2020 to 2023. I also have a National Senior Certificate from Indwe High School (2019).",
        "what projects have you worked on": "I've worked on several projects involving web development (HTML, CSS, JS), setting up CI/CD pipelines, and automating cloud infrastructure deployments. Currently, I'm enhancing my hands-on experience with various DevOps tools.",
        "tell me about your education": "I hold a Diploma in Information Technology Management from Rosebank College (2020-2023). I also completed my National Senior Certificate in 2019 at Indwe High School.",
        "what is your current job": "I’m currently a DevOps Intern where I focus on building automation pipelines, managing cloud infrastructure, and optimizing software development workflows.",
        "what are your career goals": "My goal is to become a proficient DevOps Engineer, contributing to building and maintaining reliable, scalable, and automated systems. I aim to improve the efficiency of development processes while keeping the systems secure and scalable.",
        "what do you want to learn next": "I’m eager to learn more about advanced DevOps practices, including microservices architecture, Kubernetes orchestration, and containerization using Docker.",
        "how can I contact you": "You can contact me via email at sisonkeboyilani@capaciti.org.za or through my LinkedIn and GitHub profiles. Would you like more information?",
        "where are you based": "I’m based in Orange Farm, South Africa. Feel free to reach out if you're in the area or online!",
        "what tools do you use": "I work with tools such as Jenkins for CI/CD, Docker for containerization, Kubernetes for orchestration, and AWS for cloud infrastructure management. I also use Git for version control.",
        "default": "Sorry, I didn't understand that. Could you rephrase?"
    };
    
    return responses[userInput.toLowerCase()] || responses["default"];
}