let button1 = document.getElementById("p1");
let button2 = document.getElementById("p2");
let reset = document.getElementById("reset");
let score1 = document.getElementById("score1");
let score2 = document.getElementById("score2");
let goal = document.getElementById("goal");
let target = document.getElementById("target");


button1.addEventListener("click", function() {
  if(Number(score1.innerHTML) < Number(goal.innerHTML) &&
  Number(score2.innerHTML) < Number(goal.innerHTML)) {
    score1.innerHTML = Number(score1.innerHTML) + 1;
  }
  if(Number(score1.innerHTML) === Number(goal.innerHTML)) {
    score1.style.color = "green";
  }
})
button2.addEventListener("click", function() {
  if(Number(score2.innerHTML) < Number(goal.innerHTML) &&
Number(score1.innerHTML) < Number(goal.innerHTML)) {
    score2.innerHTML = Number(score2.innerHTML) + 1;
  }
  if(Number(score2.innerHTML) === Number(goal.innerHTML)) {
    score2.style.color = "green";
  }
})

target.addEventListener("click", function() {
  goal.innerHTML = target.value.toString();
})
reset.addEventListener("click", function() {
  score1.innerHTML = "0";
  score2.innerHTML = "0";
  score1.style.color = "black";
  score2.style.color = "black";
})



// button1.addEventListener("click", function() {
//   if(score1.innerHTML < goal.innerHTML) {
//     score1.innerHTML += 1;
//   }
// })
//
// function pressButton() {
//
// }
//
// function reset() {
//
//
// }
