console.log("print all numbers between -10 and 19");

var num = -10;

while(num <= 19){
  console.log(num);
  num++;
}


console.log("print all even numbers between 10 and 40");

var num = 10;

while(num <= 40){
  if(num%2 === 0) {
    console.log(num);
  }
  num++;
}

console.log("print all odd numbers between 300 and 333");

var num = 300;

while(num <= 333) {
  if(num%2 === 1) {
    console.log(num);
  }
  num++;
}

console.log("print all numbers divisible by 5 AND 3 b/w 5 and 50");

var num = 5;

while(num <= 50) {
  if(num%5 === 0 && num%3 === 0){
    console.log(num);
  }
  num++;
}
