var age = prompt("Please enter your age:");

if(age < 0) {
  alert("Wrong age!");
}
else if(age == 21) {
  alert("happy 21st birthday!");
}
else if(age % 2 == 1) {
  alert("your age is odd!");
}
else if(Math.sqrt(age) ** 2 == age) {
  alert("perfect square!");
}
