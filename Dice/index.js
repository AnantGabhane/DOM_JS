var randomNumber1 = Math.floor(Math.random()*6)+1; //random num generated

var randomDiceImage = "dice" +randomNumber1+".png"; //image selected

var ImageSource = "images/" + randomDiceImage;     // source declered
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",ImageSource);

//for second image
var randomNumber2 = Math.floor(Math.random()*6)+1; //random num generated
var ImageSource2 = "images/dice" +randomNumber2+".png"; //image selected
document.querySelectorAll("img")[1].setAttribute("src",ImageSource2);

//condition check for comparison for player 1
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins !!!";
}else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins !!!";
}else {
    document.querySelector("h1").innerHTML = "Draw !!!!!!!";
}