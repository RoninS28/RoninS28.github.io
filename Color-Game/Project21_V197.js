// var colors = ["rgb(255, 0, 0)", "rgb(255, 255, 0)", "rgb(0, 255, 0)", "rgb(0, 255, 255)", "rgb(0, 0, 255)", "rgb(255, 0, 255)"];
var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
// var pickedColor = colors[3];//twill pick cyan
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
const body = document.querySelector("body");
let statusDisplay = document.querySelector("#statusDisplay");
let h1 = document.getElementsByTagName("h1")[0];
let reset = document.querySelector("#restartButton");
let easy = document.querySelector("#easy");
let difficult = document.querySelector("#difficult");
let difficultyLevel = "difficult"; //default value of this variable -- 6 squares by default will appear
//initially the difficult level is set to difficult
difficult.classList.toggle("activeEffect");


alert("Rules of this Game:-\r\n> You are given an RGB()value where\r\nR-Red; G-Green; B-Blue\r\n> Each of those values are out of 255 units\r\n"
        + "eg: rgb(0, 0, 0) = black, rgb(255, 255, 255) = white\r\n> One of the given squares is the right answer! \r\nLet's check out your skills!");


//---------------------------------------------------------------------
//Displaying Program Seleted Color
colorDisplay.textContent = pickedColor.toUpperCase();

//setting difficulty level
easy.addEventListener("click", function(){
	// showing active state
	// easy.classList.toggle("activeEffect"); //not toggle since on double click changes
	// difficult.classList.toggle("activeEffect");
	easy.classList.add("activeEffect");
	difficult.classList.remove("activeEffect");
	//generating 3 new colors
	colors = generateRandomColors(3);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor.toUpperCase();

	//setting difficulty level
	difficultyLevel = "easy";

	for(var i=0; i<squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i]; 
		}
		else{
			squares[i].style.backgroundColor = "#232323";
		}
	}

	
})
//setting difficulty level
difficult.addEventListener("click", function(){
	difficult.classList.add("activeEffect");
	easy.classList.remove("activeEffect");
	colors = generateRandomColors(6);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor.toUpperCase();
	difficultyLevel = "difficult";
	for(var i =0; i<squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
})


for(var i=0; i< squares.length; i++){ //use style.backgroundColor instead of olnly background-which isn't compatible with firefox
	//Initial coloring
	squares[i].style.backgroundColor = colors[i];

	//Mouse Click Event
	squares[i].addEventListener("click", function(){
		//grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		//Compare clickedColor with pickedColor
		if(clickedColor == pickedColor){
			statusDisplay.textContent = "CONGRATS! YOU WON";
			//Change all colors into pickedColor
			for(var j =0; j<squares.length; j++){
				if(colors[j]){
					squares[j].style.backgroundColor = pickedColor;					
				}
			}
			//Changing bg of h1 to pickedColor
			h1.style.backgroundColor = pickedColor;

			//Changing rest button text
			reset.textContent = "Play Again?";
		}
		else{
			this.style.backgroundColor = "#232323";//css might not be linked that is why body.style.bgcolor doesnt work
			statusDisplay.textContent = "Try Again!";
		}
	});
}


//Reset Button CLick event
reset.addEventListener("click", function(){
	//generate all new colors
	if(difficultyLevel == "easy"){
		colors = generateRandomColors(3);
	}
	else{
	    colors = generateRandomColors(6);		
	}
	//pick a new random color
	 pickedColor = pickColor();
	//change colors of squares on the page
	for(var i=0; i<squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
		statusDisplay.textContent = "";
	}
	colorDisplay.textContent = pickedColor.toUpperCase();
	//Changing rest button text
	reset.textContent = "New Color";
	h1.style.backgroundColor= "steelblue";
});

               //FUNCTIONS
function pickColor(){
	let random = Math.floor(Math.random() * colors.length);
	//random is a random index number
	return colors[random];
}

function generateRandomColors(x){
	//make an array
	var arr = []; 
	
	//add x random numbers to array
	for(var i=0; i< x; i++){
		//get random color and push into array
		arr.push(getRandomColor());
	}
	//return array at very end
	return arr;
}

function getRandomColor(){
	//pick a random color for red from 0 to 255
	var r =Math.floor(Math.random() * 256);// * number -- number is always exclusive of the rondom selection- we can use 255; hence 256
	//pick a random color for green from 0 to 255
	var g =Math.floor(Math.random() * 256);
	//pick a random color for blue from 0 to 255
	var b =Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}