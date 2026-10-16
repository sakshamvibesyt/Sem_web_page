# SEM Official Website

A mobile-responsive, static personal hub with a black + purple neon design.

## Files
- `index.html` — website sections and links
- `style.css` — responsive layout and styling
- `script.js` — mobile navigation, editable bot links, QR code
- `assets/favicon.svg` — browser icon

## Update bot links
Open `script.js` and replace the placeholder URLs:

```js
const SITE_CONFIG = {
  musicBot: "https://t.me/your_music_bot_username",
  managerBot: "https://t.me/your_zyra_bot_username"
};
```

Then commit/push the changes to GitHub. You can also edit the card labels and add more bot cards in `index.html`.

## Deploy free on GitHub Pages
1. Sign in to GitHub and create a new **public** repository, for example `sem-website`.
2. Upload `index.html`, `style.css`, `script.js`, `README.md`, and the `assets` folder to the repository root. Do not upload the zip file as the only file; extract it first.
3. Open the repository **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Choose branch `main` and folder `/(root)`, then press **Save**.
6. Wait a minute or two and open the URL shown on the Pages settings screen, usually `https://YOUR-USERNAME.github.io/sem-website/`.
7. Open the deployed website on your phone and test all links. The QR section generates a QR code for the published page URL.

## Important
- Instagram, YouTube and Telegram links are pre-filled from the user-provided URLs.
- Music bot and Zyra links are placeholders because their exact Telegram URLs were not supplied.
- QR generation and download use a third-party QR endpoint, so it requires internet access. Avoid putting private or sensitive URLs into the QR generator.
- This is a static website; it does not collect messages or store personal information.
