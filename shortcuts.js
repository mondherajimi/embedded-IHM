var ic_serveur = [
    "url('images/picto_serveur_active.png')",
	"url('images/picto_serveur_active2.png')",
    "url('images/picto_serveur_idle.png')",
    "url('images/picto_serveur_disabled.png')",
	"url('images/picto_serveur_repetition.png')",
	""
];
var i=0,j=0,k=0,l=0;
 function iterate(){
 if (k<ic_serveur.length-1){k++;}
 else{k=0;}
 }
 
 if(document.addEventListener){ //code for Moz
   document.addEventListener("keyup",keyCapt,false);
 }else{//code for IE
   document.attachEvent("onkeyup",keyCapt); 
 }
 function keyCapt(e){
   if(typeof window.event!="undefined"){
    e=window.event;//code for IE
   }
   if(e.keyCode=="97"){
    if(i==0){
    document.getElementById("messages").style.display="block";i=1;
	}else{
    document.getElementById("messages").style.display="none";i=0;
    }
   
   }else if(e.keyCode=="98"){
    if(j==0){
    document.getElementById("impression").style.display="block";j=1;
    }else{
    document.getElementById("impression").style.display="none";j=0;
   }
   
   }else if(e.keyCode=="99"){
   document.getElementById("serveur").style.backgroundImage = ic_serveur[k];iterate();
   
   }else if(e.keyCode=="100"){
   if(l==0){
   document.getElementById("rj45").style.backgroundImage = "url('images/picto_rj45.png')";l=1;
   }else if(l==1){
   document.getElementById("rj45").style.backgroundImage = "url('images/picto_rj45_ko.gif')";l=2;
   }else if(l==2){
   document.getElementById("rj45").style.backgroundImage = "";l=0;
   }
   }
 }
 /*window.onload=function(){
  alert("onload");
 }*/