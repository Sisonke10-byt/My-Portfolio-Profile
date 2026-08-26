const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const chatToggle = document.querySelector("[data-chat-toggle]");
const chatPanel = document.querySelector("[data-chat-panel]");
const chatClose = document.querySelector("[data-chat-close]");
const chatForm = document.querySelector("[data-chat-form]");
const chatInput = document.querySelector("[data-chat-input]");
const chatMessages = document.querySelector("[data-chat-messages]");
const chatPrompts = document.querySelectorAll("[data-chat-prompt]");

function updateHeader() {
  header.classList.toggle("is-scrolled", window.scrollY > 20);
}

navToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
  header.classList.toggle("is-open", isOpen);
});

nav.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    nav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    header.classList.remove("is-open");
  }
});

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

const chatbotResponses = [
  {
    keywords: ["hello", "hi", "hey", "morning", "evening"],
    response: "Hi, I am Sisonke's portfolio assistant. You can ask me about his skills, education, contact details, CV, GitHub, or LinkedIn.",
  },
  {
    keywords: ["skill", "skills", "tools", "technology", "tech stack"],
    response: "Sisonke works with HTML, CSS, JavaScript, Git, Docker basics, CI/CD fundamentals, automation basics, and cloud learning. He also brings communication, teamwork, and problem-solving strengths.",
  },
  {
    keywords: ["devops", "intern", "automation", "ci", "cd", "docker", "cloud"],
    response: "Sisonke is an aspiring DevOps Engineer and DevOps intern, focused on automation, CI/CD pipelines, Git workflows, Docker basics, cloud fundamentals, and reliable software delivery.",
  },
  {
    keywords: ["education", "study", "college", "school", "qualification", "diploma"],
    response: "Sisonke completed a Diploma in Information Technology Management at Rosebank College from 2020 to 2023, and completed his National Senior Certificate at Indwe High School in 2019.",
  },
  {
    keywords: ["contact", "email", "phone", "call", "reach"],
    response: "You can contact Sisonke at sisonkeboyilani@capaciti.org.za or call +27 76 575 9788. The contact form on this page is also ready to use.",
  },
  {
    keywords: ["github", "repo", "repositories", "code"],
    response: "Sisonke's GitHub profile is https://github.com/Sisonke10-byt.",
  },
  {
    keywords: ["linkedin", "connect", "profile"],
    response: "You can connect with Sisonke on LinkedIn at https://www.linkedin.com/in/sisonkesamkele.",
  },
  {
    keywords: ["cv", "resume", "download"],
    response: "Use the Download CV button in the navigation bar to download Sisonke's CV.",
  },
  {
    keywords: ["project", "portfolio", "work"],
    response: "This portfolio highlights Sisonke's personal portfolio redesign, DevOps learning focus, and responsive frontend interface building.",
  },
];

function setChatOpen(isOpen) {
  if (!chatPanel || !chatToggle) return;
  chatPanel.hidden = !isOpen;
  chatToggle.setAttribute("aria-expanded", String(isOpen));
  if (isOpen) {
    chatInput?.focus();
  }
}

function getChatbotResponse(message) {
  const normalizedMessage = message.toLowerCase();
  const match = chatbotResponses.find((item) =>
    item.keywords.some((keyword) => normalizedMessage.includes(keyword))
  );

  return match
    ? match.response
    : "I can help with questions about Sisonke's skills, DevOps background, education, projects, CV, GitHub, LinkedIn, or contact details.";
}

function addChatMessage(message, type) {
  if (!chatMessages) return;
  const messageElement = document.createElement("div");
  messageElement.className = `chat-message ${type === "user" ? "user-message" : "bot-message"}`;
  messageElement.textContent = message;
  chatMessages.appendChild(messageElement);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function sendChatMessage(message) {
  const trimmedMessage = message.trim();
  if (!trimmedMessage) return;

  addChatMessage(trimmedMessage, "user");
  addChatMessage(getChatbotResponse(trimmedMessage), "bot");
}

chatToggle?.addEventListener("click", () => {
  setChatOpen(chatPanel?.hidden ?? true);
});

chatClose?.addEventListener("click", () => {
  setChatOpen(false);
});

chatForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!chatInput) return;
  sendChatMessage(chatInput.value);
  chatInput.value = "";
});

chatPrompts.forEach((prompt) => {
  prompt.addEventListener("click", () => {
    const promptText = prompt.getAttribute("data-chat-prompt") || "";
    setChatOpen(true);
    sendChatMessage(promptText);
  });
});

window.__portfolioChatReady = true;
