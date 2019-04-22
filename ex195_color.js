let numOfColors = 6;
let colors = generateRandomColors(numOfColors);
let secondRow = document.querySelectorAll(".second");//the second row of the squares
let header = document.querySelector(".header");
let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.getElementById("targetColor");
let messageDisplay = document.getElementById("message");
let restart = document.getElementById("restart");
let easyButton = document.getElementById("easyButton");
let hardButton = document.getElementById("hardButton");

//the first display of the colors
refreshColor();
compareColor();

//if easy clicked, only 3 colors
easyButton.addEventListener("click", function() {
  header.style.backgroundColor = "#232323";
  for(let i=0; i<secondRow.length;i++) {
    secondRow[i].style.backgroundColor = "#232323";
  }
  numOfColors = 3;
  colors = generateRandomColors(numOfColors);
  pickedColor = pickColor();
  refreshColor();
  compareColor();
})
//if hard clicked, all 6 colors
hardButton.addEventListener("click", function() {
  header.style.backgroundColor = "#232323";
  numOfColors = 6;
  colors = generateRandomColors(numOfColors);
  pickedColor = pickColor();
  refreshColor();
  compareColor();
})
//change new colors
restart.addEventListener("click", function() {
  header.style.backgroundColor = "#232323";
  colors = generateRandomColors(numOfColors);
  pickedColor = pickColor();
  refreshColor();
  compareColor();
});

function refreshColor() {
  colorDisplay.textContent = pickedColor;
  restart.textContent = "NEW COLORS";

  for(let i=0; i<colors.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
  // console.log(colors);
}


function compareColor() {
  for(let i=0; i<colors.length; i++) {
    // squares[i].style.backgroundColor = colors[i];
    //add addEventListener: when click, compare vs. pickedColor
    //if not match, change to background color
    squares[i].addEventListener("click", function() {
      let clickedColor = this.style.backgroundColor;
      if(clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct!"
        colorChange();
        restart.textContent = "PLAY AGAIN?";
      } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Please try again!"
      }
    })
  }
}

function colorChange() {
  for(let i=0; i<colors.length; i++) {
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
