// Set current year in footer
const yearSpan = document.getElementById("year");
yearSpan.textContent = new Date().getFullYear();

// Simple button interaction
const btn = document.getElementById("clickBtn");
const message = document.getElementById("message");

btn.addEventListener("click", () => {
  message.textContent = "You clicked the button! 🎉";
});
