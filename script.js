//Increase the number:
let count = 1;
var start = document.getElementById("start");
var number_of_times = document.getElementById("number");

function countBtn(){
	if(start.style.display === "block"){
		start.style.display = "none";
		number_of_times.style.display = "block";
	}

	number_of_times.innerHTML = count++;
}

//To reset the counter:
function resetBtn(){
	if(start.style.display === "block"){
		number_of_times.style.display = "none";
		start.style.display = "block";
	} else {
		count = 1;
		number_of_times.innerHTML = 0;
		start.style.display = "none"
		number_of_times.style.display = "block";
	}
}

//To exit and end the counting:
function exitBtn(){
	if(start.style.display === "block"){
		if(confirm("Are you sure you want to exit?")){
			alert("May Allah rewards you!");
			location.href = close(); //Close the index.html file
		} else {
			alert("Cancelled.");
		}
	} else {
		alert("May Allah rewards you!");
		location.href = "index.html"; //To the beginning of the program
	}
}