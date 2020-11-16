const MAX_ELEMENT = window.prompt(`How many elements do you want in array`);

var counter = MAX_ELEMENT; // COUNTER
var array = [];
var max = -Infinity;

var getNumberFromInput = function() {
  var input = window.prompt(`Please enter ${counter + 1} element`);
  if(isNaN(input)) {
    throw new Error("Number that you have entered is not valid");
  }
  return parseInt(input);
}

while(counter > 0) { // <-- condition
  try {
    array.push(getNumberFromInput());
  } catch (e) {
    alert(e.toString());
    break;
  }
  // debugger;
  max = max < array[array.length - 1] ? array[array.length - 1] : max;
  counter--; // <-- increment/decrement
}

// for(var i = 0; i < MAX_ELEMENT; i++ ) {

// }

document.getElementById("array").innerHTML = array.toString();

document.getElementById("final").innerHTML = `The greatest number here is ${max}`;

var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
for (var i=0; i < days.length; i++) {    
	document.write(days[i] + ', '); 
}
