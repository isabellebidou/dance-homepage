
var pw=null;
var tfpw=null;

var authenticationdiv=null;
var detailsdiv=null;
var tfdetailsdiv=null;
var authenticationform;
var mermaidpassword;

var xmlhttp = new XMLHttpRequest();



var url = "https://api.myjson.com/bins/9gqmx";




xmlhttp.open("GET", url, true);
xmlhttp.send();
function detailsinitialize(){
		
	console.log("initialize");
	
	authenticationdiv=document.getElementById("authenticationdiv");
	
	detailsdiv=document.getElementById("detailsdiv");
	tfdetailsdiv=document.getElementById("tfdetailsdiv");
	authenticationform=document.getElementById("authenticationform");
	mermaidpassword=document.getElementById("mermaidpassword");
	var copys = document.getElementsByClassName("copy");

	var now = new Date();
	var year = addZero(now.getFullYear(), 2);
	var i = 0;

	for (i; i < copys.length; i++) {

		copys[i].innerHTML = "Copyright: " + year;

	}

	xmlhttp.onreadystatechange = function() {
	if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
		var myPwArr = JSON.parse(xmlhttp.responseText);
		
		var i;
	
		pw = myPwArr[0].mermaidpw;
		tfpw = myPwArr[1].wariorpw;
		console.log(pw);
		console.log(tfpw);
	
		

	}
};

xmlhttp.open("GET", url, true);
xmlhttp.send();
}




function checkultrasecretmermaidpassword(){
	
	
	console.log("checkultrasecretmermaidpassword");
	if(pw!=null){
	
	console.log("mermaidpassword.value: "+mermaidpassword.value);
	if(mermaidpassword.value == "") {
      alert("Error: Username cannot be blank!");
      mermaidpassword.focus();
      //return false;
    }else if(mermaidpassword.value == pw){
    	
    	//console.log("sesameOpen");
	detailsdiv.id="detailsdivcenter";
	authenticationdiv.id="authenticationdivhidden";
	tfdetailsdiv.visibility="hidden";
    	
    	//sesameOpen();
    	//return true;
    	
    	}else if(mermaidpassword.value == tfpw){
    		
    		//console.log("sesameOpen");
	tfdetailsdiv.id="tfdetailsdivcenter";
	authenticationdiv.id="authenticationdivhidden";
	detailsdiv.visibility="hidden";
    	
    	//sesameOpen();
    	//return true;
    	
    
    	
    }else{
    	
    	alert("Error: Please check that you've entered and confirmed your password!");
    	mermaidpassword.focus();
    	//return false;
    }
    }else{
    	console.log("password is null");
    }
	
}

function sesameOpen(){
	console.log("sesameOpen");
	detailsdiv.id="detailsdivcenter";
	authenticationdiv.id="authenticationdivhidden";
	
}
