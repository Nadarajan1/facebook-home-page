var filter= /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})|([0-9]{10})+$/;	
var regex = /^[a-zA-Z ]*$/;
function validate(){
	var email = $("#email").val();
	var password = $("#password").val();
	var flag=false;
	$('#email').css("border","solid 1px #ccc");
	$('#dis').css("display","none");
	$('#password').css("border","solid 1px #ccc");
	$('#dis2').css("display","none");
	if(email==""||!filter.test(email)){
		$('#email').css("border","1px solid red");
		$('#dis').css("display","block");
		flag=true;
	}
	if(password==""||password.length <6){
		$('#password').css("border","1px solid red");
		$('#dis2').css("display","block");
		flag=true;
	}
	if(!flag){
		alert('login success');
		document.getElementById("login").reset(); 
	}
	return  false;
}
function validatereg(){
	var firstname = $("#firstname").val();
	var surname = $("#surname").val();
	var email2 = $("#email2").val();
	var password2 = $("#password2").val();	
	$('#firstname').css("border","solid 1px #ccc");
	$('#firstname').css("backgroundImage","none");
	$('#surname').css("border","solid 1px #ccc");
	$('#surname').css("backgroundImage","none");
	$('#email2').css("border","solid 1px #ccc");
	$('#email2').css("backgroundImage","none");
	$('#password2').css("border","solid 1px #ccc");
	$('#password2').css("backgroundImage","none");
	radiobutton();
	dropdown();
	var emsg=false; 
	if(firstname==""||!regex.test(firstname)){
		$('#firstname').css("border","1px solid red");
		$('#firstname').css("backgroundImage","url('ex.jpg')");
		emsg=true;
	}
	if(surname==""||!regex.test(surname)){
		$('#surname').css("border","1px solid red");
		$('#surname').css("backgroundImage","url('ex.jpg')");
		emsg=true;
	}
	if(email2==""||!filter.test(email2)){
		$('#email2').css("border","1px solid red");
		$('#email2').css("backgroundImage","url('ex.jpg')");
		emsg=true;						
	}
	if(password2==""||password2.length <6){
		$('#password2').css("border","1px solid red");
		$('#password2').css("backgroundImage","url('ex.jpg')");
		emsg=true;
	}
	if(!dropdown){
		return false;
	}
	if(!radiobutton()){
		return false;
	}
	if(!emsg){
		alert('registred');
		document.getElementById("register").reset(); 
	}
	return false;
}

function dropdown(){
		var dropdown1 = $('#dd').val();
		var dropdown2 = $('#dd2').val();
		var dropdown3 = $('#dd3').val();
		if(dropdown1=="0"||dropdown2=="0"||dropdown3=="0"){			
			$('#dd').css("border","1px solid red");			
			$('#dd2').css("border","1px solid red");
			$('#dd3').css("border","1px solid red");
			$('#dropdown').css("backgroundImage","url('ex.jpg')");
			return false;		
		}
		else if(dropdown1!=="0"||dropdown2!=="0"||dropdown3!=="0"){	
			$('#dd').css("border","solid 1px #ccc");
			$('#dropdown').css("backgroundImage","none");
			$('#dd2').css("border","solid 1px #ccc");
			$('#dd3').css("border","solid 1px #ccc");
			return true;
		}
}
function radiobutton(){
	    var male = $("input[name=gender]:checked").length;
		if(male <1 ){			
			$('#rb1').css("border","1px solid red");		
			$('#rb2').css("border","1px solid red");						
			$('#display').css("backgroundImage","url('ex.jpg')");
			return false;
			}
			
		else {
			$('#rb1').css("border","none");
			$('#rb2').css("border","none");
			$('#display').css("backgroundImage","none");
			return  true;
		}
		
}	
