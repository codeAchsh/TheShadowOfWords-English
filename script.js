const words = [
"May a small light fall upon you as you end your day.",
"It’s okay to stand still — the world keeps turning just fine.",
"May there be moments, even small ones, when the wind is on your side.",
"Whether moving or resting, go at the pace you choose.",
"In the quiet, you might find answers that are yours alone.",
"Even if you did nothing today, you were still preparing to meet tomorrow.",
"The depth of your breath carries who you are today.",
"Kindness grows when you don’t rush it.",
"Even if it seems you’re standing still, you are still moving forward.",
"Whether you choose or are chosen, it’s amazing that today exists at all.",
"The place you stand might be a light for someone else.",
"You don’t need a reason to untangle your heart.",
"Even if unseen, there is kindness that reaches you.",
"You’re standing firmly in the place called ‘today.’",
"You’re moving forward, even if the path isn’t straight.",
"Even in silence, your emotions are swaying.",
"If you can’t answer right away, it means you’re thinking carefully.",
"True strength may be found in quiet moments.",
"Loneliness is proof you’re thinking of someone.",
"Even on days you weren’t chosen, you might have been the main character in someone’s world.",
"Feelings that came undone can be tied together again.",
"When you can’t say anything, your heart is often speaking the loudest.",
"Even without full understanding, you can still stay close.",
"Sometimes letting go is the way to protect something.",
"Even the tears no one sees have meaning.",
"Quiet time is your heart’s way of preparing to return to its truth."

];

let previousWord = "";

function getRandomWord() {
  let word;
  do {
    word = words[Math.floor(Math.random() * words.length)];
  } while (word === previousWord && words.length > 1);
  previousWord = word;
  return word;
}

function showShadowWord() {
  const area = document.getElementById("shadow-area");
  if (!area) return;

  const word = document.createElement("div");
  word.className = "shadow-word";
  word.textContent = getRandomWord();

  area.appendChild(word);

  // Fade in → Fade out → Remove
  setTimeout(() => { word.style.opacity = "0.6"; }, 100);
  setTimeout(() => { word.style.opacity = "0"; }, 4000);
  setTimeout(() => { word.remove(); }, 7000);
}

window.addEventListener("load", () => {
  setTimeout(() => {
    showShadowWord(); // First display after 1 second delay
    setInterval(showShadowWord, 10000); // Regular display every 6 seconds
  }, 1000);
});

