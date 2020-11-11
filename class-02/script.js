const pi = 3.14;

function myFunctuion(x,y) {
    var myVar = x * y;
    console.log(myVar);
    return myVar;
}

console.log(pi);
var firstVar = myFunctuion(2, 5);
var finalArea = myFunctuion(firstVar, 5);

console.log(finalArea);


console.log(myFunctuion(myFunctuion(2, 5), 5));


function calculateLoan(amount, months,interest,name ) {
    console.log(arguments);
    // racunanje pozajmice
    return `${name} has borrowed ${amount} for ${months}`;
}

calculateLoan(100, 12, 7, "Anna", 123);
calculateLoan(100, 12, 7, "Anna");
calculateLoan(100, 12, 7);






var multipy = function(x, y) {
    return x * y;
}

function mySpecialFunction(x, y = 5, callback = multipy) {
    return callback(x, y);
}





var result = mySpecialFunction(7, 8, multipy);
console.log(result);





var foo = 500;							
function simpleFunction() {

    foo = 600;

    console.log(foo);
}


simpleFunction();
console.log(foo);


// var foo = function() {

// 	a = 1;	// `a` not formally declared
// }


// foo();
// console.log(a);	




var foo = function() {
	var a = 1;

	var bar = function() {
		var b = 2;

		var baz = function() {
			var c = 3;

			console.log( a, b, c );	
		}

		baz();
		console.log( a, b );		
	}

	bar();
	console.log( a );				
}

foo();



var example = () => 2;

function example () {
    return 2;
}

console.log(example());


var w = "asd";
var q = "as";

console.log(w.length > q.length);

console.log(12 != "12")

var first = true;
var last = false;


console.log(first && !last);
console.log(first || last);

console.log(5 + false)


var studentPoints = 78;

var passingNumberOfPoints = 60;

if (studentPoints > passingNumberOfPoints) {
    console.log("Yaaay");
} else {
    console.log("Naaay");
}

if (studentPoints > 90) {
    console.log(10);
} else if (studentPoints > 80) {
    console.log(10);
} else if (studentPoints > 70) {
    console.log(10);
} else if (studentPoints > 60) {
    console.log(10);
} else {
    console.log("Sorry");
}


// if ((number % 2) == 0) {
//     console.log("Number is even");
// }

var number = 5;


var isNumberEven = ((number % 2) == 0)


function logEven () {
    console.log("even");
}

function logOdd () {
    console.log("even");
}

console.log(isNumberEven ? logEven() : logOdd());


var userMiddleName = null;

var result = Infinity > -Infinity ? true : false;
console.log(result);


var user = {
    middleName: null
}

var n = 100;
isNumberEven ? ((number - 1) > n ? "2" : "2")  : logOdd()

user?.middlename
