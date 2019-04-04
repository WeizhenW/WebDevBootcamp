var toDo = [];

window.setTimeout(function() {
  var input = prompt("What would you like to do?");

  while(input !== "quit") {
    if(input === "list") {
    console.log(toDo);
    }
    else if(input === "new") {
     var newElement = prompt("Please enter the new item:");
     toDo.push(newElement);
    }
  input = prompt("What would you like to do?");
 }
})
