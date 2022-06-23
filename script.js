console.log('hello!')
var x = 10;
var y = 20;
var z = x + y;
console.log("The value of z is ", z);

var player1 = new Object();
player1.name = "Stoick the Vast";
player1.age = 50;
player1.maxScore = 1000;

var player2 = {name: "Hiccup Horrendous Haddock III", age: 15, maxScore: 1000};

var currentGamesScores = {};

var highestEverScore = player1.maxScore;

function add() {
  console.log("add clicked.");
  var card = document.getElementById("card");
  var anotherCard = card.cloneNode(true);
  anotherCard.style.display = "inline-block";

  var name = document.getElementById("firstName").value;
  var middle = document.getElementById("midName").value;
  var position = document.getElementById("lastName").value;
  //var gender = document.getElementById("gender").value;
  anotherCard.getElementsByTagName("h4")[0].textContent = name;
  anotherCard.getElementsByTagName("h3")[0].textContent = middle;
  anotherCard.getElementsByTagName("p")[0].textContent = position;

  document.getElementById("content").appendChild(anotherCard);

}

document.addEventListener('DOMContentLoaded', function () {
  const button = document.getElementById('addButton');
  button.addEventListener('click', add);
});

