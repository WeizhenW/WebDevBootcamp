let numOfColors = 6;
let colors = generateRandomColors(numOfColors);
let secondRow = document.querySelectorAll(".second");//select the second row of the squares
let header = document.querySelector(".header");
let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.getElementById("targetColor");
let messageDisplay = document.getElementById("message");
let restart = document.getElementById("restart");
// let easyButton = document.getElementById("easyButton");
// let hardButton = document.getElementById("hardButton");
let modeButtons = document.querySelectorAll(".mode");
//the first display of the colors
refreshColor();
compareColor();

for(let i=0; i<modeButtons.length; i++) {
  modeButtons[i].addEventListener("click", function(){
    modeButtons[0].classList.remove("selected");
    modeButtons[1].classList.remove("selected");
    this.classList.add("selected");
    if(this.textContent === "EASY") {
      numOfColors = 3;
      for(let j=3; j<6;j++) {
        squares[j].style.display = "none";
        }
      //the returned value of secondRow is an array;
      //go through each element of this array to apply the hide
    } else {
      numOfColors = 6;
      for(let j=3; j<6; j++) {
        squares[j].style.display = "block";
      }
    }
    colors = generateRandomColors(numOfColors);
    pickedColor = pickColor();
    refreshColor();
    compareColor();

})
}
// //if easy clicked, only 3 colors
// easyButton.addEventListener("click", function() {
//   this.classList.add("selected");
//   hardButton.classList.remove("selected");
//   for(let i=0; i<secondRow.length;i++) {
//     secondRow[i].style.display = "none";
//   } //the returned value of secondRow is an array;
//   //go through each element of this array to apply the background color (hide the second row effect)
//   numOfColors = 3;
//   colors = generateRandomColors(numOfColors);
//   pickedColor = pickColor();
//   refreshColor();
//   compareColor();
// })
// //if hard clicked, all 6 colors
// hardButton.addEventListener("click", function() {
//   this.classList.add("selected");
//   easyButton.classList.remove("selected");
//   for(let i=0; i<secondRow.length;i++) {
//     secondRow[i].style.display = "block";
//   }
//   numOfColors = 6;
//   colors = generateRandomColors(numOfColors);
//   pickedColor = pickColor();
//   refreshColor();
//   compareColor();
// })

//refresh to get new colors
restart.addEventListener("click", function() {
  header.style.backgroundColor = "steelblue";
  colors = generateRandomColors(numOfColors);
  //use the previous value of the numOfColors => easy or hard defined
  pickedColor = pickColor();
  refreshColor();
  compareColor();
});

//function to refresh the page to get new colors
function refreshColor() {
  colorDisplay.textContent = pickedColor;
  restart.textContent = "NEW COLORS";
  message.textContent = "Click a color";

  for(let i=0; i<colors.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
  // console.log(colors);
}

//function to generate all the candidate colors
function generateRandomColors(num) {
  let colorArray = [];
  for(let k=0; k<num; k++) {
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

//function to compare if the clicked color matches the picked color
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
//function to set a random picked color
function pickColor() {
  let indexColor = Math.floor(Math.random() * colors.length); //easy vs. hard mode
  return colors[indexColor];
}
