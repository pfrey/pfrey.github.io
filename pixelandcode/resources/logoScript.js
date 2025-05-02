const codeText = "/code";
const codeEl = document.querySelector(".code");
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
  // Reveal subheading, if available
  const guide = document.querySelector(".guide");
  guide.style.animationDelay = "2s";
};

setTimeout(() => {
  typeCode(); // start typing after 1000ms (1 second)
}, 1000);
