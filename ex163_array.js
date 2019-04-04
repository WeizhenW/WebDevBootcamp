function printReverse(inputArray){
  for(i = inputArray.length - 1; i >= 0; i--){
    console.log(inputArray[i]);
  }
}

function isUniform(inputArray) {
  for(i = 0; i < inputArray.length-1; i++){
    if(inputArray[i] !== inputArray[i+1]){
      return false;
    }
  }
  return true;
}

function sumArray(inputArray){
  var total = 0;
  inputArray.forEach(function(item){
    total = total + item;
  })
  return total;
}

function max(inputArray){
  var maxNum = 0;
  for(i = 0; i < inputArray.length; i++){
    if(inputArray[i] > maxNum){
      maxNum = inputArray[i];
    }
  }
  return maxNum;
}
