function GoToMain() {	
	var password = "kiran12345";
	var input = document.querySelector(".password .container .input input").value;
	var temp = sessionStorage.getItem("wasOpen");
	if (temp!="yes") {
		OpenPass();
	}
	else{
		ClosePass();
	}
	if(input.toString() == password){
		sessionStorage.setItem("wasOpen","yes");
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