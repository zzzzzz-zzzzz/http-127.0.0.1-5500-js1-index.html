const emojis = ["❄️", "✨", ":-]", ":)", "🎈", "^_^"];
  function createFallingObject() {
    const obj = document.createElement("div");
    obj.classList.add("falling");
    obj.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    obj.style.left = Math.random() * 100 + "vw";
    obj.style.animationDuration = 2 + Math.random() * 3 + "s";
    obj.style.fontSize = 20 + Math.random() * 20 + "px";
    document.body.appendChild(obj);

    setTimeout(() => obj.remove(), 5000);
  }



  setInterval(createFallingObject, 200);
  const messages = [
  "“Code is like humor. When you have to explain it, its bad.” — Cory House",
  "Why do programmers prefer dark mode? Because light attracts bugs! 🐛",
  "“The best error message is the one that never shows up.” — Thomas Fuchs",
  "I told my computer I needed a break — it froze. 🥶",
  "“Talk is cheap. Show me the code.” — Linus Torvalds",
  "Why did the developer go broke? Because he used up all his cache. 💸",
  "“Programs must be written for people to read, and only incidentally for machines to execute.” — Harold Abelson",
  "A SQL query walks into a bar, walks up to two tables and asks: Can I join you? 😂",
  "“Simplicity is the soul of efficiency.” — Austin Freeman",
  "I tried to start a band called 1023MB — we havent got a gig yet. 🎸"
];

const box = document.getElementById("box");
const btn = document.getElementById("new-btn");

btn.addEventListener("click", () => {
  const random = Math.floor(Math.random() * messages.length);
  box.style.opacity = 0;
  setTimeout(() => {
    box.textContent = messages[random];
    box.style.opacity = 1;
  }, 300);
});
const clickSound = document.getElementById("click-sound");
  btn.addEventListener("click", () => {
    clickSound.currentTime = 0;
    clickSound.play();
  });
