let newTodo = $("input").val();

//click to cross over
$("li").on("click", function() {
  $(this).toggleClass("crossOver");
})

//append newTodo to the end
$("input").on("keypress", function(event) {
  if(event.which === 13) {
    $("ul").append("<li><i class='fas fa-trash-alt'></i>" + $(this).val() + "</li>");
    $("input").val("");
  }
})

//hove over to show trash Cleaning

$("li").on("click", function() {
  $(".fa-trash-alt").fadeIn(1000);
})

//plus sign to hide and show the form
$("#plusSign").on("click", function() {
  $("input").slideToggle(100);
})

//click trash can to delete item
$("fa-trash-alt").on("click", function() {
  $(this).parent().css("visibility", "hidden")
})
