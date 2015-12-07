// 6/24/15

// Because the presence of an object or array can be considered truthy,it is often used to check for the existence of an 
// elemlent within a page. 
// as soon as a truthy value is found, the remaining options are not checked. Experienced programmers often:
// 1. Put the code most likely to return true first in OR operations and false answers first in an AND operation

// Keywords often seen in loops (and sometimes functions):
// 1. break - this Keyword causes the termination of the loop and tells the interpreter to go onto the next statement of code
// outside of the loop
// 2. continue - this keyword tells the interpreter to stop the current iteration and then check the condition again (if its
// 	true, the code runs again)

var scores = [24, 32, 17];
var arrayLenght = scores.length;
var roundNumber = 0;
var msg = '';
var i;

//loop through the items in the array

for (i; i < arrayLenght; i++){

	//Arrays are zero based - Add 1 to the current round
	roundNumber = (i+1);

	//Write the current round to message 
	msg += 'Round' + roundNumber + ':';

	msg += scores[i] + '<br />';

}

document.getElementById('answer').innerHTML = msg; 

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Bullseye! Tutoring</title>
</head>
<body>
  <section id='page2'>
    <h1> Bullseye </h1>
    <img src="" id="teacher2" alt="" />
    <section id="blackboard"></section>
  </section>
  
</body>
</html>

var table = 3; //unit of table
var operator = 'addition';
var i = 1; //set counter to 1
var msg = "";

if(operator === 'addition'){
  while(i < 11){
    msg += i + ' + ' + table + ' = ' + (i + table) + '<br />';
    i++;
  } }
else{
    while(i<11){
      msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
      i++;
    
  }
}

var el = document.getElementById("blackboard");
el.innerHTML = msg;





