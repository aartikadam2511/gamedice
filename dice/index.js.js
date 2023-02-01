

// var name1=prompt("Enter first player name");
// var name2=prompt("Eneter second player name");
// document.querySelectorAll("p")[0].innerHTML=name1
// document.querySelectorAll("p")[1].innerHTML=name2
function myfunction(){
var randomNumber1=Math.floor(Math.random()*6+1);
var randomDiceImage="dice" + randomNumber1  +".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDiceImage);

var randomNumber2=Math.floor(Math.random()*6+1);
var randomDiceImage="dice" + randomNumber2  +".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src", randomDiceImage);

var randomNumber3=Math.floor(Math.random()*6+1);
var randomDiceImage="dice" + randomNumber3  +".png";
var image3=document.querySelectorAll("img")[2];
image3.setAttribute("src", randomDiceImage);

var randomNumber4=Math.floor(Math.random()*6+1);
var randomDiceImage="dice" + randomNumber4  +".png";
var image4=document.querySelectorAll("img")[3];
image4.setAttribute("src", randomDiceImage);



if ( randomNumber1>randomNumber2) {  
    if (randomNumber1>randomNumber3) {  
        if (randomNumber1>randomNumber4) {  
            document.querySelector("h1").innerHTML="player 1"+"win";
        }  
        else {  
            document.querySelector("h1").innerHTML="player 4"+"win";
        }  
    }  
}  
else if (randomNumber2>randomNumber3) {  
    if (randomNumber2>randomNumber4) {  
        document.querySelector("h1").innerHTML="player 2"+"win";
    }  
    else {  
        document.querySelector("h1").innerHTML="player 4"+"win"; 
    }  
}  
else if (randomNumber3>randomNumber4) {  
    document.querySelector("h1").innerHTML="player 3"+"win"; 
}  
else {  
    document.querySelector("h1").innerHTML="player 4"+"win"; 
}  
}

