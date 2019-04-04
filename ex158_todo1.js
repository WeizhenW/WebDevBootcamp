var toDo = [];

window.setTimeout(function() {
  var input = prompt("What would you like to do?");

  while(input !== "quit") {
    if(input === "list") {
      console.log("********************");
      toDo.forEach(function(item){
        console.log(toDo.indexOf(item) + ": " + item);
      })
      console.log("********************");
    }
    else if(input === "new") {
      var newElement = prompt("Please enter the new item:");
      toDo.push(newElement);
      console.log(newElement + " has been added to the list");
    }
    else if(input === "delete") {
      var delIndex = prompt ("Please enter the index to delete:");
      toDo.splice(delIndex, 1);
      console.log("Todo is removed");

    }
  input = prompt("What would you like to do?");
 }

 console.log("OK you quit the list");
}, 500);
