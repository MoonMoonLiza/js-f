//js

//jaScAr
let
 Number11 = 5;
 Number22 = 12;
 Number33 = Number11*Number22;
function jaScAr(){
	document.getElementById("jaScAr").innerHTML = Number33
}


//fire on/off
function onFire(){

	document.getElementById('fire').src = 'images/on fier.png';
}
function offFire(){

	document.getElementById('fire').src = 'images/off fier.png';
}

//candle on/off
function candle3(){

	document.getElementById('candle').src = 'images/oncandle3 .png';
}
function oncandle2(){

	document.getElementById('candle').src = 'images/oncandle2.png';
}
function oncandle1(){

	document.getElementById('candle').src = 'images/oncandle1.png';
}
function offcandle(){

	document.getElementById('candle').src = 'images/offcandle .png';
}

//JavaScript Properties

function javaProperties(){
	const person = {
  firstname: "MoonMoon",
  lastname: "Liza",
  age: 18,
  eyecolor: "blue"
};
	document.getElementById('j_prop').innerHTML =person.firstname + " is " + person.age + " years old.";
}

// Create a variable
//let person = "John Doe";
//function javaVariabl(){
//	document.getElementById('j_vari').innerHTML = person;
//}

//Java Strings
function javatStrings(){

	var info = document.getElementsByTagName('j_stri');
	alert(info.length);
}

//color change
function colorColor(){

	document.getElementById('c_color').style.color ="pink";
}

//Java Constructors
function javaConstructors(){
	document.getElementById('j_Constructors').innerHTML= "Hi!"; 
}

//Java Timi
function javaTimi(){

	var info = document.getElementsByTagName('j_timi');
	alert("Hi!");
}

//color change
function colorChan(){

	document.getElementById('c_chan').style.color ="green";
}

//JavaScript Constructors
function javaScriptConstructors(){
	document.getElementById('j_cons').innerHTML= "Hi!"; 
}

//JavaScript Timi
function javaScriptTimi(){

	var info = document.getElementsByTagName('j_st');
	alert("MoonMoon!");
}

//JavaScript Timing
function javaScriptTiming(){

	var info = document.getElementsByTagName('j_t');
	alert("Hello!");
}
//text change
function TextChange(){

	document.getElementById('t_change').innerHTML = "Arian Ahmed Abir";
}

//JavaScript Alert
function javaScriptAlert(){

	var info = document.getElementsByTagName('j_v');
	alert("I am an alert box!");
}


//Navigator Object
function navigatorObject(){
	document.getElementById('n_o').innerHTML="navigator.cookieEnabled is " + navigator.cookieEnabled;
} 

//screen width
function screenWidth(){
	document.getElementById('s_w').innerHTML="Screen width is " + screen.width;
} 

//JavaScript Window
function javaScriptWindow(){
	document.getElementById('j_w').innerHTML="Browser inner window width: " + window.innerWidth + "px<br>" +
"Browser inner window height: " + window.innerHeight + "px";
} 

//JavaScript Validation
function upperCase() {
  const x = document.getElementById("fname");
  x.value = x.value.toUpperCase();
}

//JavaScript Validation
function javaScriptValidation(){

	var info = document.getElementsByTagName('j_v');
	alert("Name must be filled out");
}



//JavaScript HTML DOM
function javaScriptHTMLDOM(){

	document.getElementById('j_hdom').src = 'images/book.jpg';
}

//computer on/off
function computerOn(){

	document.getElementById('computer').src = 'images/computer on.jpg';
}
function computerOff(){

	document.getElementById('computer').src = 'images/computer off.jpg';
}

//Old Heading
function oldHeading(){
	document.getElementById('o_h').innerHTML= "<i> 24 New Heading </i>";
} 

//JavaScript can Change HTML
function javaScriptChangeHTML(){
	document.getElementById('j_cch').innerHTML= "The paragraph above was changed by a script";
} 

//JavaScript Functions
function yourFunction(){
	const x = function (c, d) {return c * d};
	document.getElementById('j_yf').innerHTML=  x(7, 8);
}  

//JavaScript Function
function javaScriptFunction(){
	document.getElementById('j_fun').innerHTML = "I love You !!";
}

//JavaScript Functions
function myFunction(){
	const x = function (a, b) {return a * b};
	document.getElementById('j_f').innerHTML=  x(4, 3);
}  


//JavaScript Map Objects
function javaScriptMapObjects() {
	// Create a Map
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);
	document.getElementById('j_mo').innerHTML = fruits.get("apples");
}
//JavaScript Iterab
function javaScriptIterab() {
	document.getElementById('j_it').innerHTML ="Iterate over an Array"
}

//JavaScript Iterables
// Create a String
const name = "W3Schools";

// List all Elements
let text = "";
for (const x of name) {
  text += x + "<br>";
}
function javaScriptIterables(){
	document.getElementById('j_i').innerHTML=text; 
}
//JavaScript Object Constructors
function javaScriptObjectConstructors(){
	document.getElementById('j_oc').innerHTML= "My father is "; 
}
//JavaScript Objects
function javaScriptObjects(){
	const person = {
  name: "Liza",
  age: 20,
  city: "New York"
};
document.getElementById('j_o').innerHTML = person;
}
//The JavaScript Keyword
function javaScriptKeyword() {

	document.getElementById('j_K').innerHTML = "MoonMoon Liza";
}

//JavaScript Object Properties

function javaScriptObjectProperties(){
	const person = {
  firstname: "MoonMoon",
  lastname: "Liza",
  age: 20,
  eyecolor: "blue"
};
	document.getElementById('j_op').innerHTML =person.firstname + " is " + person.age + " years old.";
}

// Create and display a variable
let person = "John Doe";
function javaScriptVariables(){
	document.getElementById('j_v').innerHTML = person;
}

//JavaScript Strings
function javaScriptStrings(){

	var info = document.getElementsByTagName('j_g');
	alert(info.length);
}

//JavaScript Arithmetic
let
 Number1 = 5;
 Number2 = 8;
 Number3 = Number1+Number2;
function javaScriptArithmetic(){
	document.getElementById("j_a").innerHTML = Number3
}

//JavaScript const
function javaScriptConst(){
	document.getElementById("j_c").innerHTML = "Toyota,Audi,Volvo,BMW"
}

// Change heading
function changeHeading(){

	document.getElementById("c_h").innerHTML = "40 JavaScript Comments"
}
// Change paragraph
function changeParagraph(){
	document.getElementById("c_p").innerHTML = "My first paragraph."
}
//JavaScript Statements

let x, y; 
x = 74;        
y = 61;         
x-=y;      
function javaScriptStatements(){

	 document.getElementById("j_s").innerHTML ="The value of z is y";  
}

//avaScript Do
function javaScriptDo(){

	document.getElementById("demo").innerHTML = "Hello JavaScript!";
}

//element tag
function elementtag(){

	var info = document.getElementsByTagName('h3');
	alert(info.length);
}

//element class
function elementClass(){

	document.getElementsByClassName('e_c')[1].innerHTML = "MoonMoon";
}
//calculate
var number4 = 12;
var number5 = 22;
var number6 = number4*number5;
function calculate(){

	document.getElementById('v_a').innerHTML=number6
}
//calculation
var number1 = 5;
var number2 = 2;
var number3 = number1+number2;
function calculation(){

	document.getElementById('value').innerHTML=number3
}
//shoe shide
function textShow(){

	document.getElementById('s_s').style.display='block';
}
function textHide(){

	document.getElementById('s_s').style.display='none';
}
//color change
function colorChange(){

	document.getElementById('c_c').style.color ="hotpink";
}

//bulb on/off
function bulbOn(){

	document.getElementById('bulb').src = 'images/on.gif';
}
function bulbOff(){

	document.getElementById('bulb').src = 'images/off.gif';
}
//show date
function showDate(){

	  document.getElementById('s_d').innerHTML = Date();
}
//text change
function textChange(){

	document.getElementById('t_c').innerHTML = "hello";
}