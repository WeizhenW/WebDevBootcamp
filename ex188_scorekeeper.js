let button1 = document.getElementById("p1");
let button2 = document.getElementById("p2");
let reset = document.getElementById("reset");
let score1 = document.getElementById("score1");//score to display for player 1
let score2 = document.getElementById("score2");//score to display for player 2
let scoreCount1 = 0;//score counter for player 1
let scoreCount2 = 0;//score counter for player 2
let gameOver = false;
let winnerScore = 5;//winning score counter
let goal = document.getElementById("goal");//winning score to display
let target = document.getElementById("target");//user input target score

button1.addEventListener("click", function() {
  if(gameOver) {
    scoreCount1 ++;
    score1.textContent = scoreCount1;
    if(scoreCount1 === winnerScore) {
      gameOver = true;//when player 1 reaches winning score, number turns green and game over true
      score1.classList.add("winner");
    }
  }
})
button2.addEventListener("click", function() {
  if(gameOver) {
    scoreCount2 ++;
    score2.textContent = scoreCount2;
    if(scoreCount2 === winnerScore) {
      gameOver = true;//same as row 18
      score2.classList.add("winner");
    }
  }
})

target.addEventListener("change", function() {//not only click, change the target score by input a number will trigger the event
  winnerScore = Number(this.value);//this.value returns a string
  goal.textContent = this.value;
  gameReset();
})

reset.addEventListener("click", function() {
  gameReset();
})

function gameReset() {//reset all the values back to default
  scoreCount1 = 0;
  scoreCount2 = 0;
  gameOver = false;
  score1.textContent = 0;
  score2.textContent = 0;
  score1.classList.remove("winner");
  score2.classList.remove("winner");
}
// button1.addEventListener("click", function() {
//   if(scoreCount1 < Number(goal.innerHTML) &&
//   Number(score2.innerHTML) < Number(goal.innerHTML)) {
//     score1.innerHTML = Number(score1.innerHTML) + 1;
//   }
//   if(Number(score1.innerHTML) === Number(goal.innerHTML)) {
//     score1.style.color = "green";
//   }
// })
// button2.addEventListener("click", function() {
//   if(Number(score2.innerHTML) < Number(goal.innerHTML) &&
// Number(score1.innerHTML) < Number(goal.innerHTML)) {
//     score2.innerHTML = Number(score2.innerHTML) + 1;
//   }
//   if(Number(score2.innerHTML) === Number(goal.innerHTML)) {
//     score2.style.color = "green";
//   }
// })
//
// target.addEventListener("click", function() {
//   goal.innerHTML = target.value.toString();
// })
// reset.addEventListener("click", function() {
//   score1.innerHTML = "0";
//   score2.innerHTML = "0";
//   score1.style.color = "black";
//   score2.style.color = "black";
// })
