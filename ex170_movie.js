var movieDatabase = [
  {
    title: "In Bruges",
    star: 5,
    watched: true
  },
  {
    title: "Frozen",
    star: 4.5,
    watched: false
  },
  {
    title: "Mad Max Fury Road",
    star: 5,
    watched: true
  },
  {
    title: "Les Miserables",
    star: 3.5,
    watched: false
  }
]

movieDatabase.forEach(function(movie) {
  if(movie.watched) {
    console.log("You have watched " + movie.title + " - " + movie.star + " stars");
  }
  else {
    console.log("You have not watched " + movie.title + " - " + movie.star + " stars");
  }
})
