let colors = [
  "rgb(255, 0, 0)",
  "rgb(255, 255, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 255, 255)",
  "rgb(255, 0, 255)",
  "rgb(0, 0, 255)"
]
let header = document.querySelector(".header");
let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.getElementById("targetColor");
let messageDisplay = document.getElementById("message");

for(let i=0; i<squares.length; i++) {
  //initial color
  squares[i].style.backgroundColor = colors[i];
  //add addEventListener: when click, compare vs. pickedColor
  //if not match, change to background color
  squares[i].addEventListener("click", function() {
    let clickedColor = this.style.backgroundColor;
    if(clickedColor !== pickedColor) {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Please try again!"
    } else {
      messageDisplay.textContent = "Correct!"
      colorChange();
    }
  })
}

colorDisplay.textContent = pickedColor;

function colorChange() {
  for(let i=0; i<squares.length; i++) {
    squares[i].style.backgroundColor = pickedColor;
  }
  header.style.backgroundColor = pickedColor;

}

function pickColor() {
  let indexColor = Math.floor(Math.random() * colors.length); //easy vs. hard mode
  return colors[indexColor];
}
