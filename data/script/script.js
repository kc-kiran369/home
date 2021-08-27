function GoToMain() {
	var password = "kiran12345";

	var input = document.querySelector(".password .container .input input").value;

	if(input.toString() == password)
	{
		//enable main page
		document.querySelector(".main").style.display = "inline";

		//disable password page
		document.querySelector(".password").style.display = "none";
	}
	else{
		alert("Wrong password!!");
	}
}