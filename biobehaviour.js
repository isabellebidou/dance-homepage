 var authors= ['Ankie Janssen', 'Sam Toulouse', 'David Hegarty','Urzula Beatrycze Sztener', 'Alexandre Szrzypczak'] ;
 var ph1,ph2,ph3,ph4,ph5,ph6,ph7,ph8,ph9,ph10,ph11,ph12,ph13,ph14;
 
 var photos;
 var popupup;
 var photopopup;
 var photopopuplabel;
var popupWindow;
var photos;
var count = 0;
var iOS = false;
var mobileMenu=false;

var intervalId=0;
function bioinitialize(){
	console.log('initialize');
	iOS = isIos();
	console.log('height:'+ window.screen.height);
	console.log('width:'+ window.screen.width);
	mobileMenu=false;
	document.getElementById("mobilemenu").style.display="none";
	

	
	if (iOS) {
		//document.getElemeentById('popupup').transition.duration = 0;
		//document.getElemeentById('popup').transition.duration = 0;
		//popupWindow=document.getElementById("popup").id="popupupios";
	
	//popupup=document.getElementById("popupupios");
		/*
		var photoleft= document.getElementById("photoleft");
		var photoright= document.getElementById("photoright");
		var slideshowbutton=document.getElementById("slideshowbutton");
		var page= document.getElementById("page");
		var popupup=document.getElementById("popupup");
		photoleft.style.visibility=('Hidden');
		photoright.style.visibility=('Hidden');
		popupup.style.width=("100%");
		
		slideshowbutton.style.visibility=('Hidden');
		page.style.width=("100%");
		page.style.margin=("0%");*/
		
		
		
		
	}
	
	
	photos=document.getElementsByClassName("photo");
	
	popupup =false;
	photopopup=document.getElementById("photopopup");
	photopopuplabel=document.getElementById("photopopuplabel");
	
	var copys = document.getElementsByClassName("copy");

	var now = new Date();
	var year = addZero(now.getFullYear(), 2);
	var i = 0;

	for (i; i < copys.length; i++) {
 
		copys[i].innerHTML = "Copyright: " + year;

	}
	
//var menubutton = document.getElementsByClassName("menubutton");


	
/*function onTouchStartEvent (event) {
console.log(event.type);
event.preventDefault();
document.getElementById("mobilemenu").style.display="inline-block";
mobileMenu=true;
}
function onTouchEndEvent (event) {
console.log(event.type);
event.preventDefault();
document.getElementById("mobilemenu").style.display="none";
mobileMenu=false;
}*/

var menubutton= document.getElementById("menubutton");
//menubutton.addEventListener('touchstart', onTouchStartEvent, false);
//menubutton.addEventListener('touchend', onTouchEndEvent, false);

/*

menubutton.addEventListener('touchstart',{passive: true}, function (e) {
console.log("touchstart " );
e.preventDefault();
document.getElementById("mobilemenu").style.display="inline-block";
mobileMenu=true;
}, false);



menubutton.addEventListener('touchend',{passive: true}, function (e) {
console.log("touchend " );
e.preventDefault();
document.getElementById("mobilemenu").style.display="none";
mobileMenu=false;
}, false);*/

}






function addZero(x, n) {
	if (x.toString().length < n) {
		x = "0" + x;
	}
	return x;
}

function slideshow(){



	intervalId = setInterval(function(){ myTimer() }, 3000);
	

	
}
function myTimer() {
	if (count>= photos.length){
		count=0;
	}
	var photoInSlideShow=null;
	
	


	
	photoInSlideShow=photos[count++];
	var str=photoInSlideShow.src;
	var newSrc= str.substring(0,str.length-5).concat(".png");
    photopopup.src=newSrc;
    
	photopopuplabel.innerHTML=photoInSlideShow.title;
	
	console.log(photoInSlideShow.alt+' from myTimer');
	showPopup(photoInSlideShow);
	//count++;
}

function showPopup(ph){
	console.log(ph.alt+' from showPopup(p)');
	//photopopup.style.opacity='0.5';
	if(!popupup){
		photoClick(ph);
		
	}else{
		var str=ph.src;
		var newSrc= str.substring(0,str.length-5).concat(".png");
		photopopup.src=newSrc;
		
		//photopopup.style.opacity='1.0';
	photopopuplabel.innerHTML=ph.title;
		
	}
	photopopup.style.visbility="visible";
}

function photoClick(photo){
	
	if(photo != 'undefined' && photo != null){
		console.log(photo.title);
	
		
	popupWindow=document.getElementById("popup").id="popupup";
	var str=photo.src;
	var i = 0;
	for (i in photos){
		
		if (photos[i].src == photo.src){
			count= i;
			
			break;
		}
		
	}
	console.log("index= "+count);
	var newSrc= str.substring(0,str.length-5).concat(".png");
	photopopup.src=newSrc;
	photopopuplabel.innerHTML=photo.title;
	console.log(document.body.scrollHeight);
//	var myDocumentHeight= document.body.scrollHeight;

	photopopup.style.visbility="visible";
	document.body.scrollTop = document.body.scrollHeight;
	popupup=!popupup;
		
	}
	
		
}

function moveForward(){
	
	var photoInSlideShow=null;
	count++;
	
	if (count>=photos.length){
		
	count=0;	
	}
	photoInSlideShow=photos[count];
	var str=photoInSlideShow.src;
	var newSrc= str.substring(0,str.length-5).concat(".png");
    photopopup.src=newSrc;
    
	photopopuplabel.innerHTML=photoInSlideShow.title;
	
	console.log(photoInSlideShow.alt+' from moveForward');
	showPopup(photoInSlideShow);
	
}
function moveBackward(){
	var photoInSlideShow=null;
	count--;
	
	if (count<=0){
		
	count=photos.length-1;	
	}
	
	photoInSlideShow=photos[count];
	var str=photoInSlideShow.src;
	var newSrc= str.substring(0,str.length-5).concat(".png");
    photopopup.src=newSrc;
    
	photopopuplabel.innerHTML=photoInSlideShow.title;
	
	console.log(photoInSlideShow.alt+' from moveBackward');
	showPopup(photoInSlideShow);
	
}


function toggleMenu(){
	
	mobileMenu=!mobileMenu;
	if (mobileMenu){
		document.getElementById("mobilemenu").style.display="inline-block";
		
	}else{
		document.getElementById("mobilemenu").style.display="none";
	}
}

function hidePopup(){
	
	if (intervalId!=0){
		clearInterval(intervalId);
	}
	photopopup.src=null;
	photopopup.style.visbility="hidden";
	popupWindow=document.getElementById("popupup").id="popup";
	popupup=!popupup;
}
function isIos() {
	iOS = ((/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) ? true : false ), iOSversion = false;
		console.log("ios: " + iOS);

	return iOS;
	//return true;
}