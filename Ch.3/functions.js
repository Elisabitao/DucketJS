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



