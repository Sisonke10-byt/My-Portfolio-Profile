## **Overview**✨

This project represents a personal portfolio website for Sisonke Boyilani, a DevOps Intern and a recent graduate in Information Technology Management. The portfolio is designed to showcase skills, experience, projects, and contact information. The website also features interactive elements such as a hamburger menu 🍔, contact modal, and a chatbot 🤖 for visitor interaction.

The project utilizes HTML, CSS, and JavaScript, with integrations for social media links 🌐, file download 📥 (CV), and a chatbot powered by pre-defined responses based on user input. You can view the live portfolio here.

The portfolio includes the following sections:

Home: Introduction with a brief description of my professional aspirations and skills.
About: Detailed information about my background, qualifications, and motivations, including a section for their capabilities, strengths, and motivators.
Skills: A showcase of my technical abilities in web development (HTML, CSS, JavaScript).
Contact: A contact form for visitors to reach out to me.
Footer: Links to Sisonke's GitHub, LinkedIn, and email 📧.

## **Features** 🌟

1. Responsive Design: The website is designed to be mobile-friendly 📱, with layouts adjusting to different screen sizes.
2. Social Media Links: Links to GitHub, LinkedIn, and email for easy access to my profiles and contact information.
3. Contact Form: Users can directly send messages to me via a form, integrated with Web3Forms API for submissions.
4. Downloadable CV: A link to download my CV in DOCX format 📄.
5. Icons: Font Awesome icons are used throughout the site to represent different technologies and actions like social media links and skills.
6. Responsive Design: The website is fully responsive and adjusts its layout for both mobile and desktop views.
7. Hamburger Menu: A toggleable hamburger menu 🍔 is implemented for mobile devices, allowing for a compact navigation bar.
8. Chatbot Interaction: A chatbot 🤖 allows visitors to ask questions and receive responses based on predefined keywords, enhancing interactivity. The chatbot provides responses to queries like:
- "Who are you?"
- "What are your skills?"
- "Where can I find your GitHub?"
- "Tell me about your experience."
9. Social Media Integration: Social media icons (GitHub, LinkedIn, Email) provide quick links to Sisonke's professional profiles 🌐.

## **File Structure** 📂

|-- index.html # Main HTML file for the portfolio
|-- style.css # Stylesheet for the website's design
|-- script.js # JavaScript file for functionality (modal, chatbot, etc.)
|-- myimage.jpg # Profile picture for homepage
|-- aboutImage.jpg # Image for the About section
|-- Sisonke Boyilani- CV (1).docx # CV file for download

## **Technologies Used 🛠️** 

- HTML5: For the basic structure and content of the website.
- CSS3: For styling the website, including responsiveness.
- JavaScript: Used for adding interactivity if needed (though it's not explicitly used in this template).
- Font Awesome: For adding icons for skills, social media links, and other graphical elements.
- Web3Forms API: For handling form submissions and sending messages directly from the site.
- Google Fonts: For the Roboto font, used for a modern and clean look.

## **Installation and Usage 💻**
To use this portfolio website locally on your system, follow these steps:

Clone the repository:

Clone or download the repository containing the website's files.
If cloning, use the following command:
git clone <repository-url>

Open index.html:

Navigate to the folder where you cloned or saved the website.
Open the index.html file in any modern web browser to view the site.

Customization:
Replace the myimage.jpg and aboutImage.jpg with your own images 📸.
Update the content in the <section id="home">, <section id="about">, <section id="skills">, and <section id="contact"> to reflect your own information.
Update the contact form's API access key (found in the form action URL) with your own Web3Forms API key if needed.

## **Customization Notes 📝**

Social Links: Update the social media links (GitHub, LinkedIn, etc.) to point to your own profiles 🌐. You can modify the URL inside the <a> tags under the wordicons and social-links divs.

Contact Form: You may need to update the Web3Forms API access key in the contact form action URL with your own credentials. This will allow you to receive form submissions 📬.

CV Download Link: The download link for the CV points to a file named Sisonke Boyilani- CV (1).docx. You should update this link to point to your own CV file.

## **Functionality Breakdown 💡**

Hamburger Menu (script.js) 🍔
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburgerIcon.style.display = navLinks.classList.contains('active') ? 'none' : 'block';
    closeIcon.style.display = navLinks.classList.contains('active') ? 'block' : 'none';
});

Contact Popup (script.js) 📞

contactLink.addEventListener('click', function() {
    popup.style.display = 'flex';
});

closePopup.addEventListener('click', function() {
    popup.style.display = 'none';
});

Chatbot (script.js) 🤖
The chatbot is powered by predefined responses mapped to specific keywords. The chatbot detects the user’s input and provides a relevant response based on the keywords. Emojis can also be added to the conversation by selecting from an emoji picker.

Emoji Picker (script.js) 😊
The emoji picker appears when the emoji button is clicked. The user can select an emoji, which is then appended to the user’s message.
document.getElementById('emoji-icon').addEventListener('click', function() {
    const emojiPicker = document.getElementById('emoji-picker');
    emojiPicker.style.display = emojiPicker.style.display === 'block' ? 'none' : 'block';
});

## **License 📄**
This project is licensed under the MIT License - see the LICENSE file for details.

## **Author 👤**
Sisonke Boyilani
DevOps Intern
GitHub
LinkedIn
Portfolio

## **Contact 📬**
For inquiries, feedback, or suggestions, feel free to reach out to Sisonke Boyilani via email:
Email: sisonkeboyilani@capaciti.org.za

## **Acknowledgments 🙏**
Font Awesome for the icons.
Google Fonts for the Roboto font.
Web3Forms for the contact form API integration.


## Overview

This repository contains the personal portfolio website for Sisonke Boyilani. The site is a static HTML/CSS/JavaScript project that showcases professional experience, skills, projects, and contact details. Interactive features include a responsive navigation, a small chatbot with predefined responses, and a contact form integrated with Web3Forms.

Recent edits (summary):
- Replaced the old CV file (`Sisonke Boyilani- CV (1).docx`) with `Sisonke_Boyilani_CV (3).docx`.
- Committed and pushed the latest site updates to `main`.
- Started a local static server for testing and added `server.log` (note: consider removing `server.log` from the repo and adding it to `.gitignore`).

## Quick Start — Run locally
Clone the repository (if needed) and serve the files from the project folder.

```bash
git clone https://github.com/Sisonke10-byt/My-Portfolio-Profile.git
cd My-Portfolio-Profile
```

Start a simple local server (serves at http://localhost:8000):

```bash
python3 -m http.server 8000
```

Run in background and write logs to `server.log`:

```bash
cd /home/sisonke/My-Portfolio-Profile
nohup python3 -m http.server 8000 > server.log 2>&1 & echo $!
```

Stop the server:

```bash
kill <PID>
```

Open http://localhost:8000 in your browser to view the site.

## File structure (notable files)

- `index.html` — Main site HTML
- `style.css` — Site styles
- `script.js` — Frontend JavaScript (navigation, chatbot interactions)
- `Images/` — Image assets (profile image `Images/Sisonke.png`, etc.)
- `Sisonke_Boyilani_CV (3).docx` — Current CV available for download from the site
- `server.log` — Local server log (created when running server with `nohup`)

If you do not want `server.log` in the repository, remove it and add an entry to `.gitignore`:

```bash
git rm --cached server.log
echo "server.log" >> .gitignore
git add .gitignore
git commit -m "Ignore server.log"
git push
```

## How to update the CV

Option A — Replace with a file from your machine:
1. Put the new CV file into the project root (via VS Code file explorer or copy into the folder).
2. Rename it to the desired filename (for example `Sisonke_Boyilani_CV (3).docx`).
3. Commit and push:

```bash
git add "Sisonke_Boyilani_CV (3).docx"
git commit -m "Update CV"
git push
```

Option B — Edit the content and generate a new DOCX/PDF locally, then replace as above.

Note: The download link in `index.html` points to the CV filename — update that href if you change the name.

## Committing and pushing changes

After making edits to site files, run:

```bash
git add .
git commit -m "Describe your changes"
git push origin main
```

## Deployment

This is a static site and can be hosted with GitHub Pages, Netlify, or Vercel. To use GitHub Pages (simple):

1. In the repository settings on GitHub, enable GitHub Pages from the `main` branch (root).
2. The site will be published at `https://<username>.github.io/<repo>` (allow a few minutes to deploy).

## Troubleshooting

- If your local edits do not appear in the browser, clear cache or hard refresh (Ctrl+Shift+R) or open in an Incognito window.
- Confirm the server is running and you are visiting `http://localhost:8000`.
- Check DevTools Console (F12) for JavaScript errors that may affect behavior.

## Contact

For questions or updates, contact:
- Email: sisonkeboyilani@capaciti.org.za
- GitHub: https://github.com/Sisonke10-byt

---

Updated to include the latest changes: CV replacement and local server notes.



