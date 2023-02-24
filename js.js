window.addEventListener("deviceorientation", handleOrientation, true);

function handleOrientation(event) {
  const animationText = document.getElementById("animation-text");

  let x = event.beta;
  let y = event.gamma;

  if (x > 90) { x = 90 };
  if (x < -90) { x = -90 };

  let newX = ((y / 90) * 50);
  let newY = ((x / 90) * -50);

  animationText.style.transform = `translate(-50%, -50%) rotateX(${x}deg) rotateY(${y}deg) translate(${newX}px, ${newY}px)`;
}
