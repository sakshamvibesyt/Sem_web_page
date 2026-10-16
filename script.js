/*
  SEM website settings
  1. Replace the example t.me links below with your actual bot usernames.
  2. Save and push the updated file to GitHub.
*/
const SITE_CONFIG = {
  musicBot: "https://t.me/",   // TODO: replace with your music bot link
  managerBot: "https://t.me/"  // TODO: replace with Zyra manager bot link
};

document.querySelectorAll("[data-link]").forEach((link) => {
  const key = link.dataset.link;
  if (SITE_CONFIG[key]) link.href = SITE_CONFIG[key];
});

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
menuToggle?.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});
navLinks?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

// Generate a QR code for the deployed site URL using a public QR image endpoint.
const qrContainer = document.getElementById("qrCode");
const downloadButton = document.getElementById("downloadQr");
const currentUrl = window.location.href;
if (qrContainer && /^https?:$/.test(window.location.protocol) && !window.location.hostname.includes("localhost")) {
  const img = document.createElement("img");
  img.alt = "QR code to open the SEM website";
  img.width = 134;
  img.height = 134;
  img.src = "https://api.qrserver.com/v1/create-qr-code/?size=240x240&margin=8&data=" + encodeURIComponent(currentUrl);
  img.onload = () => {
    qrContainer.replaceChildren(img);
    downloadButton.disabled = false;
  };
  img.onerror = () => { qrContainer.textContent = "QR couldn't load. Check your internet connection."; };
  downloadButton?.addEventListener("click", async () => {
    try {
      const response = await fetch(img.src);
      const blob = await response.blob();
      const objectUrl = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = objectUrl;
      a.download = "sem-website-qr.png";
      a.click();
      URL.revokeObjectURL(objectUrl);
    } catch {
      window.open(img.src, "_blank", "noopener,noreferrer");
    }
  });
}
