let button = document.querySelector("button");
let body = document.querySelector("body");
// let isPurple = false;

// button.addEventListener("click", function(){
//   if(isPurple) {
//     body.style.background = "white";
//     // isPurple = false;
//   } else {
//     body.style.background = "purple";
//     // isPurple = true;
//   }
//   isPurple = !isPurple;
// });

button.addEventListener("click", function() {
  body.classList.toggle("purple");
})
