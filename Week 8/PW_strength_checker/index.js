//Unsure if these should be here, to save getting them every time, or in the function to save memory
const progressBar = document.getElementById("strength");
const indicator = document.getElementById("strengthIndicator");

document.getElementById("PWInput").addEventListener("input", displayStrength);

function displayStrength() {
  const PWLength = document.getElementById("PWInput").value.length;
  progressBar.value = PWLength * 5;
  if (PWLength < 1) {
    indicator.textContent = "N/A";
  } else if (PWLength < 8) {
    indicator.textContent = "Should be longer";
    progressBar.style.accentColor = "#ff0000"; //red
  } else if (PWLength >= 8 && PWLength < 12) {
    indicator.textContent = "Pretty good";
    progressBar.style.accentColor = "#ff7700"; //orange
  } else if (PWLength >= 12) {
    indicator.textContent = "Grrrreat!";
    progressBar.style.accentColor = "#00ff00"; //green
  }
}
