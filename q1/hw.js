function validation(){
	 var x, text;

  // Get the value of the input field with id="numb"
  x = document.getElementById("numb").value;

  // If x is Not a Number or less than one or greater than 10
  if (isNaN(x) || x < 1 || x > 100) {
    text = "Input not valid";
  } else {
    text = "";
  }
  document.getElementById("demo1").innerHTML = text;
}

function textValidation(){
	var y, text;
	y=document.getElementById("name_").value;
if (y == "" || y.length > 24){
	text = "Please enter a valid Name";
	}else{
		text = "";
	}
	document.getElementById("demo").innerHTML = text;
}

function genderVal(){
	var z,w, text;
	z=document.getElementById("male");
	w=document.getElementById("female");
	if(w.checked== false && z.checked== false){
		text = "Please Select a Gender";
  } else {
  	text = "";
  }
  document.getElementById("demo2").innerHTML = text;
}

