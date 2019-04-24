// $("button").on("click", function() {
//   $("div").fadeOut(1000, function() {
//     $(this).remove();
//   })
// })

$("#fade").on("click", function() {
  $("div").fadeToggle(1000, function() {
  })
})

$("#slide").on("click", function() {
  $("div").slideToggle(1000);
})
