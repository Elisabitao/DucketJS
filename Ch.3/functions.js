//difference between function declaration vs. function expression
//below is an example of function declaration. The interpreter always looks for variables and function declarations before going
//each section of a script - this means that a function created with a function declaration can be called before it has even been declared.

function area(width, height){
	return width * height;
};

var size = area(3,4);

//function expression example below. In function expression, the name is usually omitted and stored in a variable. It can be called
//like any function created with a function declaration.
//In function expression, the function is not processed until the interpreter gets to that statement. This means you cannot call this function
//before the interpreter has discovered it. 

var area = function(width, height){
	return width * height;
};

var size = area(3,4);

//Immediate invoked funcion expressions (IIFE) - often functions are used to ensure that the variable names do not conflict with
//each other (especially if the page uses more than one script). IIFE functions aren't given a name, instead they are executed
//once as the interpreter comes across them. Below the variable called area will hold the value returned from the function (rather
//than storing the function itself so that it can be called later).

var area = (function(){
	var width = 2;
	var height = 3;
	return width * height;
}());

//the final paranthesis above () after the closing curly brace of the code tells the interpreter to call the function immediately.
//When to use IIFE and anonymous function expressions are used. They are used for code that only needs to run once within a task,
//rather than repeatedly being called by other parts of the script. For example:
//1. As an argument when a function is called
//2. To assign the value of a property to an object
//3. In event handlers and listeners, to perform a task when an event occurs
//4. To prevent conflicts between two scripts that might use the same names

//example of first object in this book:

var hotel = {
	name: 'Quay',
	rooms: 40,
	booked: 25,
	gym: true,
	roomTypes: ['twin', 'double', 'suite'],

	checkAvailability : function() {
		return this.rooms - this.booked;
	}
}

//creating objects using constructor syntax

var hotel = new Object();

hotel.name = "Park";
hotel.rooms = 120;
hotel.checkAvailability = function(){
	return this.rooms;
};

var elName = document.getElementById("hotelname");
elName.textContent = hotel.name;



//another way of create and accessing objects constructor notation

function Hotel(name, rooms, booked){
	this.name = name;
	this.rooms = rooms;
	this.booked = booked;
	
	this.checkAvailability = function(){
		return this.rooms - this.booked;
	};
}

var quayHotel = new Hotel('Quay', 40, 25);
var parkHotel = new Hotel("Park", 120, 77);

var details1 = quayHotel.name + 'rooms: ';
		details += quayHotel.checkAvailibility();
		
var elHotel = document.getElementById("hotel");
elHostel.textContent = details; 

//this keyword. if function is declared on global scope, this refers to window. example below:

function windowSize(){
	var width = this.innerWidth;
	var height = this.innerHeight;
	
	return [width, height];
}

//global variables. all global variables also becomem properties of the window object, so when a function is in the global context, you can access global properties using the window object.

var width = 600;

var showWidth = function(){
	document.write(this.width);
}

showWidth(); //600

//when a function is defined inside an object, it becomes a method. in a method, this refers to the containing object.

//If a named function has been defined in global scope, and it is then used as a method of an object, this refers to the object is is contained within. Example below:


var width = 600;
var shape = {width: 300};

var showWidth = function(){
	return this.width;
};

shape.getWidth = showWidth; //we add the showWidth function as a method to the shape object created above

shape.getWidth(); //this now returns 300

//Three groups of built-in js objects:
//1. Browser object model:
// - Window
//   -- Document, History, Location, Navigator, Screen

//2. DOM - creates a model of the web page
//3 Global js objects. Strings, number, boolean, date, math, regex




//working with decimal numbers

var originalNumber = 10.23456;

var msg = '<h2> origin number</h2><p>' + originalNumber + '</p>';
msg += "<h2> 3 decimal places </h2><p>" + originalNumber.toFixed(3); + '</p>';
msg += "<h2> 3 digits</h2><p>" + originalNumber.toPrecision(3) + '</p>;

var el = document.getElementById("info");
el.innerHTML = msg; 

Global objects: Math Object

Property:

Math.PI //returns pi

Method:

Math.round() // Round to nearest int
Math.sqrt(n) // Return square root of positive number
Math.ceil() // Round number up to nearest int
Math.floor() // Round number down to nearest int
Math.random() // Generate random number from 0 to 1 


















