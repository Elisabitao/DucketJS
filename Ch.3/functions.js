//difference between function declaration vs. function expression
//below is an example of function declaration. The interpreter always looks for variables and function declarations before going
//each section of a script - this means that a function created with a function declaration can be called before it has even been declared.

function area(width, height){
	return width * height;
};

var size = area(3,4);