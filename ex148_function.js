function isEven(num) {
  // if(num % 2 === 0) {
  //   return true;
  // }
  // return false;
  return num % 2 === 0;
}

function factorial(num) {
  // if(num === 0) {
  //   return 1;
  // }
  // else {
  var result = 1;
  for(var i=1; i <= num; i++) {
    result *= i;
    }
    return result;
  }


function kebabToSnake(str) {
  return str.replace(/-/g, "_");
}
