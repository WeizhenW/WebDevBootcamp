$("h1").text("The title has been changed");
$("li").first().html("<a href='http://google.com'>Google</a>");
$("img").attr({
  src: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
  height: "300px"
})
$("input").attr("placeholder", "only a placeholder")
$("select").val("");

$("h1").addClass("correct");
$("p").toggleClass("wrong");

$("#munich").toggleClass("done");
