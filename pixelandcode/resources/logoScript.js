const codeText = "/code";
const bGuideText = "brandguide";
const sGuideText = "styleguide";
const codeEl = document.querySelector(".code");
const bGuideEl = document.querySelector(".brandguide-logo");
const sGuideEl = document.querySelector(".styleguide-logo");
let index = 0;

function typeCode() {
  if (index < codeText.length) {
    codeEl.textContent += codeText.charAt(index);
    index++;
    setTimeout(typeCode, 150); // speed of typing
  } else {
    codeEl.style.borderRight = "none";
  }
}

// Start animation
window.onload = () => {
  // First reveal PIXEL
  const pixel = document.querySelector(".pixel");
  pixel.style.animationDelay = "0.5s";
  // Then type in code
  setTimeout(typeCode, 1000);
};

setTimeout(() => {
  typeCode(); // start typing after 1000ms (1 second)
}, 1000);
