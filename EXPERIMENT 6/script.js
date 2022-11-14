function change(){ 
var d = document.getElementById("box"); 
var bgc = document.getElementById("bcolor").value; 
d.style.backgroundColor = bcolor; 
var tc = document.getElementById("tcolor").value; 
d.style.color = tcolor; 
var ts = document.getElementById("tsize").value; 
d.style.textSize = tsize + "px"; 
var w = document.getElementById("width").value; 
d.style.width = width + "px"; 
var h = document.getElementById("height").value;
d.style.height = height + "px"; 
var r = document.getElementById("bdradius").value; 
d.style.borderRadius = bdradius + "%"; 
}  
