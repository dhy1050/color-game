var colors=randomColorArray(6);

var pickerColor = colors[randomNumber()];
var square = document.querySelectorAll(".square");
var message = document.getElementById("message");
var body = document.querySelector("body");
var button = document.querySelector(".botton");
var question = document.querySelector("#question");

question.textContent = pickerColor;

for(var i = 0; i< colors.length; i++){
	square[i].style.background = colors[i];

	square[i].addEventListener("click", function(){

		console.log(this.style.background+" "+pickerColor);
		if(this.style.background === pickerColor){
			message.textContent = "Correct";
			// body.style.background = pickerColor;
			for(var j = 0 ; j<colors.length; j++){
				square[j].style.background = pickerColor;
			}

		}else{
			this.style.backgroundColor = "#232323";
			message.textContent = "Try again" ;
		}
	});

}

button.addEventListener("click", function(){
	colors = randomColorArray(6);
	reset();
	pickerColor = colors[randomNumber()];
	question.textContent = pickerColor;
});

function reset(){
	for(var i = 0; i< colors.length; i++){
		square[i].style.background = colors[i];
	}

	message.textContent = "Pick your answer";
}

function randomColorArray(num){
	var a=[];
	for(var i =0; i < num; i++ ){
		a[i]=randomColor();
	}

	return a;
}

function randomColor(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return "rgb(" + r +", " + g + ", " + b + ")";
}

function randomNumber(){
	var n = Math.floor(Math.random()*6);
	return n;
}