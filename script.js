
var button = document.getElementById("launch");
var input = document.getElementById('summonerbar');
var ul = document.getElementById("summonerlist");

button.addEventListener("click", function(){
	if (input.value.length > 0) {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value="";
	}
})

input.addEventListener("keypress", function(keyp){

	if (input.value.length > 0 && keyp.keyCode === 13) {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value="";
	}
})