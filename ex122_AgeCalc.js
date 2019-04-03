var age = prompt("Please enter your age:");
numberOfLeap = Math.floor(age/4);
remainder = age%4;
totalDays = 365*age + numberOfLeap + remainder*0.25;

console.log(numberOfLeap);
console.log(remainder);

alert(age + " Years is roughly " + totalDays + " days");
