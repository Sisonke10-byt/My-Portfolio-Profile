# My-Portfolio-Profile

A personal portfolio website for Sisonke Boyilani. This is a static HTML/CSS/JavaScript project that showcases professional experience, technical skills, selected projects, and contact details. The site includes a responsive navigation, a small keyword-based chatbot, and a contact form integrated with Web3Forms.

---

## Project snapshot

- Repository: https://github.com/Sisonke10-byt/My-Portfolio-Profile
- Main files:
  - `index.html` — homepage and all site content
  - `style.css` — site styles
  - `script.js` — frontend JavaScript (navigation, chatbot, interactions)
  - `Images/` — image assets (contains `Images/Sisonke.png`)
  - `Sisonke_Boyilani_CV (3).docx` — downloadable CV referenced from the site
  - `server.log` — local server log (created when running a background server)

---

## What changed (recent)

- The CV file was replaced with `Sisonke_Boyilani_CV (3).docx`.
- README was rewritten to document the new project layout and run instructions.
- A local static server was used during development; `server.log` was created locally.

If you do not want `server.log` tracked, remove it and add it to `.gitignore` (instructions below).

---

## Run locally (quick)

1. Open a terminal and change to the project folder:

```bash
cd /home/sisonke/My-Portfolio-Profile
```

2. Start a simple HTTP server (Python 3):

```bash
python3 -m http.server 8000
```

3. Visit the site in your browser:

```
http://localhost:8000
```

4. Stop the server with Ctrl+C in the terminal running it, or kill the PID if started in background.

Optional: run in background and capture logs:

```bash
nohup python3 -m http.server 8000 > server.log 2>&1 & echo $!
```

---

## Development notes

- Files are static — any edit to `index.html`, `style.css`, or `script.js` is reflected after saving the file and refreshing the browser.
- If changes don't appear, do a hard refresh (Ctrl+Shift+R) or open an Incognito window to avoid cached assets.
- The site references the CV file by filename in `index.html`. If you rename the CV file, update the download link in `index.html`.

## How to update the CV

Replace the CV file in the project root (via VS Code or copy). Example workflow:

```bash
# copy new file into project (local path example)
cp ~/Downloads/MyUpdatedCV.docx /home/sisonke/My-Portfolio-Profile/"Sisonke_Boyilani_CV (3).docx"
# commit and push
cd /home/sisonke/My-Portfolio-Profile
git add "Sisonke_Boyilani_CV (3).docx"
git commit -m "Update CV"
git push origin main
```

Then update the `index.html` download link if the filename changed.

---

## Git and deployment

- Commit and push changes as usual:

```bash
git add .
git commit -m "Describe changes"
git push origin main
```

- To publish with GitHub Pages: in the repository settings enable Pages from the `main` branch (root). The site will appear at `https://<username>.github.io/My-Portfolio-Profile`.

---

## Cleanup `server.log` (recommended)

If you don't want `server.log` in the repository:

```bash
cd /home/sisonke/My-Portfolio-Profile
git rm --cached server.log || true
echo "server.log" >> .gitignore
git add .gitignore
git commit -m "Ignore server.log"
git push origin main
```

---

## Troubleshooting

- 404 for `favicon.ico` or other minor assets is harmless — the server will log these if not present.
- If `python3 -m http.server` fails with "Address already in use", find and stop the process:

```bash
ss -ltnp | grep ':8000'
kill <PID>
```

- Check the DevTools Console (F12) for JS errors if interactive features don't behave.

---

## Contact

Email: sisonkesamkele@gmail.com 
GitHub: https://github.com/Sisonke10-byt

---

Generated: 2026-08-26 — comprehensive README reflecting the current project contents and workflow.
