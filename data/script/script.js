function GoToMain() {	
	var password = "kiran12345";
	var input = document.querySelector(".password .container .input input").value;

	if(input.toString() == password){
		sessionStorage.setItem("wasOpen","yes");
		ClosePass();
	}
	else if (!input.length) {
		alert("You have entered empty !! Try again");
	}
	else{
		alert("Code didn't matched !! Try again");
	}
}
function OpenOrClose(){
	var temp = sessionStorage.getItem("wasOpen");
	if (temp!="yes") {
		OpenPass();
	}
	else{
		ClosePass();
	}
}
function OpenPass() {
	document.querySelector(".main").style.display = "none";
	document.querySelector(".password").style.display = "inline";
}
function ClosePass() {
	document.querySelector(".main").style.display = "inline";
	document.querySelector(".password").style.display = "none";
}