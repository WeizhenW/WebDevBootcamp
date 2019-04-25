
//append new to do item to the end
$("input").on("keypress", function(event) {
  if(event.which === 13) {
    let newTodo = $(this).val();
    $("ul").append("<li><span class='trash'><i class='fas fa-trash-alt'></i></span><span id='item'>" + newTodo +"</span></li>");
    $(this).val("");
  }
})

//click to cross over to do items
$("ul").on("click", "li", function() {
  $(this).toggleClass("crossOver");

})//on will help add the listener to non existing element => li not existing yet at the beginning
//need to apply to ul first => but only fire when li is clicked

//plus sign to hide and show the form
$("#plusSign").on("click", function() {
  $("input").slideToggle(100);
})

//click trash can to delete item
$("ul").on("click", ".trash", function() {
  event.stopPropagation();
  $(this).parent().fadeOut(500, function() {
    $(this).remove();
  });  // $(this).parent().remove();
})
