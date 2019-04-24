$("h1").click(function() {
  alert("Ah, h1 is clicked!");
})

$("button").click(function() {
  $(this).css("background", "yellow");
  let text = $(this).text();
  console.log(text, "is clicked!");
})

$("input").keypress(function(event) {
    if(event.which === 13) { //when the enter key is hit
        console.log($(this).val());
        $(this).val("");//clear the input content
    }
})

$("h1").on("dblclick", function() {
    $(this).css("color", "red");
})

$("button").on("mouseenter", function() {
    $(this).css({
        color: "blue",
        fontSize: "20px",
        fontWeight: "bold"
    })
})

$("button").on("mouseleave", function() {
    $(this).css({
        color: "red",
        fontSize: "10px",
        fontWeight: "normal"
    })
})
