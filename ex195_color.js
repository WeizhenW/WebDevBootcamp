let colors = generateRandomColors(6);
let header = document.querySelector(".header");
let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.getElementById("targetColor");
let messageDisplay = document.getElementById("message");
let restart = document.getElementById("restart");


refreshColor();
compareColor();


restart.addEventListener("click", function() {
  header.style.backgroundColor = "#232323";
  colors = generateRandomColors(6);
  pickedColor = pickColor();
  refreshColor();
  compareColor();
});

function refreshColor() {
  colorDisplay.textContent = pickedColor;

  for(let i=0; i<squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
  // console.log(colors);
}


function compareColor() {
  for(let i=0; i<squares.length; i++) {
    // squares[i].style.backgroundColor = colors[i];
    //add addEventListener: when click, compare vs. pickedColor
    //if not match, change to background color
    squares[i].addEventListener("click", function() {
      let clickedColor = this.style.backgroundColor;
      if(clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct!"
        colorChange();
      } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Please try again!"
      }
    })
  }
}


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

function generateRandomColors(num) {
  let colorArray = [];
  for(let i=0; i<num; i++) {
    let r = Math.floor(Math.random() * 255);
    let j = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let newColor = "rgb(" + r + ", " + j + ", " + b + ")";
    // console.log(newColor);
    colorArray.push(newColor);
    }
  console.log("colorArray:", colorArray);
  return colorArray;
  }
