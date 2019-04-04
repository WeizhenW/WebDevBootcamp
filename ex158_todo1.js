var toDo = [];

window.setTimeout(function() {
  var input = prompt("What would you like to do?");

  while(input !== "quit") {
    if(input === "list") {
      listToDos();
    }
    else if(input === "new") {
      addToDo();
    }
    else if(input === "delete") {
      deleteToDo();
    }
  input = prompt("What would you like to do?");
 }
 console.log("OK you quit the list");
}, 500);


function  listToDos(){
  console.log("********************");
  toDo.forEach(function(item, i){
    console.log(i + ": " + item);
  })
  console.log("********************");
}

function addToDo(){
  var newElement = prompt("Please enter the new item:");
  toDo.push(newElement);
  console.log(newElement + " has been added to the list");
}

function deleteToDo() {
  var delIndex = prompt ("Please enter the index of todo to delete:");
  toDo.splice(delIndex, 1);
  console.log("Todo is removed");
}
