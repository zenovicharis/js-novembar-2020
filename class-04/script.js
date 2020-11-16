var counter = 1;
var resultsContainer = document.getElementById('results');

while (counter < 20) {
  let textSpan = document.createElement("span");
  textSpan.innerHTML = counter;
  if ((counter % 2) == 0) {
    let breakline = document.createElement("br");
    resultsContainer.appendChild(textSpan);
    resultsContainer.appendChild(breakline);
  } else {
    textSpan.innerHTML += "&#9;"
    resultsContainer.appendChild(textSpan);
  }
  // resultsContainer.appendChild(textSpan);
  counter++;
}