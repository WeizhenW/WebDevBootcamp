var originalNum = 9;

var guessNum = Number(prompt("Please enter your guess:"));

if(guessNum === originalNum) {
  alert("You got it!");
}
else if(guessNum > originalNum) {
  alert("Your guess is too big");
}
else {
  alert("Your guess is too small");
}
