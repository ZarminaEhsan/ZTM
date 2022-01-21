/*
 *   Make a keyless car!
 *   This car will only let you drive if you are over 18. Make it do the following:
 *
 *   using prompt() and alert(), ask a user for their age.
 *   IF they say they are below 18, respond with:
 *   "Sorry, you are too young to drive this car. Powering off"
 *
 *   IF they say they are 18, respond with:
 *   "Congratulations on your first year of driving. Enjoy the ride!"
 *
 *   IF they say they are over 18, respond with:
 *   "Powering On. Enjoy the ride!"
*/

let age =  Number(prompt("What is your age?"));

if (age < 18) {
    alert("Sorry, you are too young to drive this car. Powering off");
}
else if (age === 18) {
    alert("Congratulations on your first year of driving. Enjoy the ride!");
}
else{
    alert("Powering On. Enjoy the ride!");
}


/* solution by instructor:


var age = prompt("What is your age?");

if (Number(age) < 18) {
	alert("Sorry, you are too yound to drive this car. Powering off");
} else if (Number(age) > 18) {
	alert("Powering On. Enjoy the ride!");
} else if (Number(age) === 18) {
	alert("Congratulations on your first year of driving. Enjoy the ride!");
}
*/

/********************Notes***************/


/*
************ Function declaration ************
    function newfunction() {
    }


************ Function expression ************
let newFunction = function () {
};


function expression can have names too e.g. function cat(){}
without names they are called anonymous function


************ Expression ************
1+3;
var a = 2;
return true;
etc
expression is something that produces a value


************ Calling or invoking of a function ************
alert();
newfunction(param1, param2);


************ Assign a variable ************
let a = true;


************ Function vs Method ************
function newFunction() {
}

method is inside an object:
let obj = {
    thisIsMethod : function() {
    }
};

to access function we use parenthesis and can use parameters as well:
newFunction();

to access method we use object then dot and then method name with parenthesis:
obj.thisIsMethod();
console.log();

*/



























