const TO_EMAIL = "your-email@example.com"; // TODO: set to your inbox

function buildGmailComposeUrl({ to, subject, body, cc, bcc }) {
  const params = new URLSearchParams();
  params.set("view", "cm");
  params.set("fs", "1");
  if (to) params.set("to", to);
  if (subject) params.set("su", subject);
  if (body) params.set("body", body);
  if (cc) params.set("cc", cc);
  if (bcc) params.set("bcc", bcc);
  return `https://mail.google.com/mail/?${params.toString()}`;
}

document.getElementById("sendBtn")?.addEventListener("click", () => {
  const name = document.getElementById("name").value.trim();
  const fromEmail = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !fromEmail || !message) {
    alert("Please fill out all fields.");
    return;
  }

  const subject = `New contact from ${name}`;
  const body =
    `Name: ${name}\n` +
    `Email: ${fromEmail}\n\n` +
    `Message:\n${message}\n`;

  const gmailUrl = buildGmailComposeUrl({
    to: TO_EMAIL,
    subject,
    body,
  });

  // Opens Gmail compose in a new tab. If blocked, allow pop-ups for this site.
  window.open(gmailUrl, "_blank");
});
