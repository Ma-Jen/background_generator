var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var displayCssCode = document.querySelector(".cssCode");
var randomColorBtn = document.querySelector(".randomColorBtn");


function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	// css.textContent = body.style.background + ";";
	displayCssCode.textContent = "background-color: " + body.style.background + ";";
}
//random Color
var randomInputColorOne = document.querySelector(".inputColorOne");
var randomInputColorTwo = document.querySelector(".inputColorTwo");

function randomBackgroundColorSet() {
	randomInputColorOne = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
	randomInputColorTwo = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});

	body.style.background = "linear-gradient(to right ," 
	+ randomInputColorOne 
	+ ", " 
	+ randomInputColorTwo
	+ ")";

	displayCssCode.textContent = "background-color: " + body.style.background + ";";
}

randomColorBtn.addEventListener("click", randomBackgroundColorSet);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

// havent finish , need to put on color input the random color